const fs = require('fs');

const createMinimalPDF = (text, path) => {
  const content = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [ 3 0 R ] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [ 0 0 612 792 ] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
5 0 obj
<< /Length 64 >>
stream
BT
/F1 24 Tf
100 700 Td
(${text}) Tj
ET
endstream
endobj
trailer
<< /Root 1 0 R /Size 6 >>
%%EOF`;
  fs.writeFileSync(path, content);
};

const dir = 'd:/Emma/Practice/public/downloads';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

createMinimalPDF('Directions Route Map', dir + '/directions_route_map.pdf');
createMinimalPDF('Overview Level 3', dir + '/overview_level_3.pdf');
createMinimalPDF('Kiosks Level 2', dir + '/kiosks_level_2.pdf');
createMinimalPDF('Kiosks Level 6', dir + '/kiosks_level_6.pdf');
