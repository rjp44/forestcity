# forestcity-technology

Report authored in Markdown with an automated PDF build.

## Setup

```bash
npm install
```

## Build PDF

```bash
npm run build
```

Generates `reports/initial-report/report.pdf` from `reports/initial-report/report.md`.

## Watch mode

Re-build the PDF whenever `reports/initial-report/report.md` changes:

```bash
npm run watch
```

## Layout

- **reports/initial-report/report.md** — Source of the report (edit this file).
- **reports/initial-report/report.pdf** — Generated output (built by the above commands; not committed).

