const gulp = require('gulp');
const { mdToPdf } = require('md-to-pdf');
const path = require('path');

const REPORT_MD = 'reports/initial-report/report.md';
const REPORT_PDF = 'reports/initial-report/report.pdf';

async function buildPdf() {
  await mdToPdf(
    { path: path.join(__dirname, REPORT_MD) },
    { dest: path.join(__dirname, REPORT_PDF) }
  );
}

function pdf(done) {
  buildPdf()
    .then(() => done())
    .catch((err) => done(err));
}

function watch(done) {
  gulp.watch(REPORT_MD, pdf);
  done();
}

gulp.task('pdf', pdf);
gulp.task('watch', gulp.series('pdf', watch));
