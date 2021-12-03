const glob = require('glob');
const { generatePdfCertificate } = require('./generate-pdf');

(async function (argv) {
  const certificatePattern = argv[2] || 'test/fixtures/valid_certificate_*.json';
  console.log(__dirname);
  try {
    const filePaths = glob.sync(certificatePattern);
    await Promise.all(filePaths.map((filePath) => generatePdfCertificate(filePath)));
  } catch (error) {
    console.error(error);
  }
})(process.argv);
