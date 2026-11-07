// Converts content.md (a small markdown subset) into the setup document .docx
const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Table, TableRow, TableCell,
  WidthType, ShadingType, BorderStyle, LevelFormat, Footer, Header, PageNumber, PageBreak, ExternalHyperlink,
} = require("docx");

const [, , inPath, outPath] = process.argv;
const FONT = "Calibri";
const CONTENT_WIDTH = 11906 - 2 * 1134; // A4 minus 2 cm margins

// Inline parser: **bold**, *italic*, URLs
function runs(text, base = {}) {
  const out = [];
  const tokens = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter((t) => t !== "");
  for (const tok of tokens) {
    let style = { ...base };
    let t = tok;
    if (/^\*\*[^*]+\*\*$/.test(tok)) { style.bold = true; t = tok.slice(2, -2); }
    else if (/^\*[^*]+\*$/.test(tok)) { style.italics = true; t = tok.slice(1, -1); }
    for (const part of t.split(/(https?:\/\/\S+)/g).filter((p) => p !== "")) {
      if (/^https?:\/\//.test(part)) {
        out.push(new ExternalHyperlink({ link: part, children: [new TextRun({ text: part, style: "Hyperlink", font: FONT, size: style.size })] }));
      } else {
        out.push(new TextRun({ text: part, font: FONT, ...style }));
      }
    }
  }
  return out;
}

function cell(text, width, header) {
  return new TableCell({
    width: { size: width, type: WidthType.DXA },
    shading: header ? { type: ShadingType.CLEAR, color: "auto", fill: "DCE6F0" } : undefined,
    margins: { top: 60, bottom: 60, left: 90, right: 90 },
    children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: runs(text, { size: 18, bold: header || undefined }) })],
  });
}

function table(rows) {
  const n = rows[0].length;
  const widths = n === 5 ? [2838, 1700, 1700, 1700, 1700] : n === 4 ? [1500, 2100, 3400, 2638] : Array(n).fill(Math.floor(CONTENT_WIDTH / n));
  const border = { style: BorderStyle.SINGLE, size: 4, color: "A6A6A6" };
  return new Table({
    width: { size: widths.reduce((a, b) => a + b, 0), type: WidthType.DXA },
    columnWidths: widths,
    borders: { top: border, bottom: border, left: border, right: border, insideHorizontal: border, insideVertical: border },
    rows: rows.map((r, i) => new TableRow({ tableHeader: i === 0, children: r.map((c, j) => cell(c, widths[j], i === 0)) })),
  });
}

function parse(md) {
  const lines = md.split("\n");
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === "") { i++; continue; }
    if (line.startsWith("|")) {
      const rows = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        const cells = lines[i].trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
        if (!cells.every((c) => /^-+$/.test(c))) rows.push(cells);
        i++;
      }
      blocks.push(table(rows));
      blocks.push(new Paragraph({ spacing: { before: 0, after: 120 }, children: [] }));
      continue;
    }
    if (line.trim() === "<<<pagebreak>>>") {
      blocks.push(new Paragraph({ children: [new PageBreak()] }));
    } else if (line.startsWith("= ")) {
      blocks.push(new Paragraph({ spacing: { after: 100 }, indent: { left: 567, hanging: 567 }, children: runs(line.slice(2)) }));
    } else if (line.startsWith("# ")) {
      blocks.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: runs(line.slice(2)) }));
    } else if (line.startsWith("## ")) {
      blocks.push(new Paragraph({ heading: HeadingLevel.HEADING_2, children: runs(line.slice(3)) }));
    } else if (line.startsWith("- ")) {
      blocks.push(new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 80 }, children: runs(line.slice(2)) }));
    } else {
      blocks.push(new Paragraph({ spacing: { after: 140, line: 276 }, alignment: AlignmentType.JUSTIFIED, children: runs(line) }));
    }
    i++;
  }
  return blocks;
}

const centered = (text, opts = {}) =>
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: opts.after ?? 120 }, children: [new TextRun({ text, font: FONT, ...opts.run })] });

const titlePage = [
  new Paragraph({ spacing: { before: 2600 }, children: [] }),
  centered("Productivity SaaS in the age of agentic AI:", { run: { size: 40, bold: true, color: "1F3864" }, after: 60 }),
  centered("strategic responses for business model evolution", { run: { size: 40, bold: true, color: "1F3864" }, after: 600 }),
  centered("Thesis setup document", { run: { size: 28, color: "404040" }, after: 1400 }),
  centered("Mattia Capuzzo", { run: { size: 24, bold: true } }),
  centered("MSc in Innovation and Technology Management", { run: { size: 22 } }),
  centered("Università Cattolica del Sacro Cuore, Milan", { run: { size: 22 }, after: 400 }),
  centered("Supervisor: Prof. Jean-François de Jaegher", { run: { size: 22 }, after: 1400 }),
  centered("20 November 2026 (draft for discussion)", { run: { size: 22, color: "595959" } }),
  new Paragraph({ children: [new PageBreak()] }),
];

const doc = new Document({
  creator: "Mattia Capuzzo",
  title: "Thesis setup document",
  styles: {
    default: { document: { run: { font: FONT, size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { font: FONT, size: 32, bold: true, color: "1F3864" },
        paragraph: { spacing: { before: 360, after: 160 }, keepNext: true, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { font: FONT, size: 26, bold: true, color: "2F5496" },
        paragraph: { spacing: { before: 240, after: 120 }, keepNext: true, outlineLevel: 1 } },
    ],
  },
  numbering: {
    config: [{ reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 540, hanging: 270 } } } }] }],
  },
  sections: [{
    properties: { page: { margin: { top: 1134, bottom: 1134, left: 1134, right: 1134 } }, titlePage: true },
    headers: {
      default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Thesis setup document, M. Capuzzo", font: FONT, size: 16, color: "808080" })] })] }),
      first: new Header({ children: [new Paragraph({ children: [] })] }),
    },
    footers: {
      default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 18, color: "808080" })] })] }),
      first: new Footer({ children: [new Paragraph({ children: [] })] }),
    },
    children: [...titlePage, ...parse(fs.readFileSync(inPath, "utf8"))],
  }],
});

Packer.toBuffer(doc).then((buf) => { fs.writeFileSync(outPath, buf); console.log("written", outPath); });
