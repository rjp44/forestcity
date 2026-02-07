# forestcity-technology

Report authored in Markdown with an automated PDF build.

## Setup

```bash
yarn install
```

## Build PDF

```bash
yarn build
```

Generates `reports/initial-report/report.pdf` from `reports/initial-report/report.md`.

## Watch mode

Re-build the PDF whenever `reports/initial-report/report.md` changes:

```bash
yarn watch
```

## Layout

- **reports/initial-report/report.md** — Source of the report (edit this file).
- **reports/initial-report/report.pdf** — Generated output (built by the above commands; not committed).

