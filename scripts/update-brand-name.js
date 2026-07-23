const fs = require('fs');

const langs = ['nl', 'en', 'fr', 'tr'];

langs.forEach(lang => {
  const filePath = `src/messages/${lang}.json`;
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace "Katten —" with "Kattensitter —" in titles
    content = content.replace(/"siteTitle": "Katten — /g, '"siteTitle": "Kattensitter — ');
    content = content.replace(/"title": "Katten — /g, '"title": "Kattensitter — ');
    
    // Replace "Bij Katten " with "Bij Kattensitter " (For intro texts)
    content = content.replace(/Bij Katten /g, 'Bij Kattensitter ');
    content = content.replace(/At Katten,/g, 'At Kattensitter,');
    content = content.replace(/Chez Katten,/g, 'Chez Kattensitter,');
    content = content.replace(/Katten'de /g, "Kattensitter'da ");

    // Replace "Katten Home" with "Kattensitter Home"
    content = content.replace(/Katten Home/g, 'Kattensitter Home');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated brand name in ${lang}.json`);
  }
});
