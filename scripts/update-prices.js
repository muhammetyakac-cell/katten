const fs = require('fs');

// 1. Update Translation JSON files
const langs = ['nl', 'en', 'fr', 'tr'];

langs.forEach((lang) => {
  const filePath = `src/messages/${lang}.json`;
  if (fs.existsSync(filePath)) {
    let raw = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(raw);

    // Update pricing plan Basis price
    if (data.pricing && data.pricing.plans && data.pricing.plans[0]) {
      data.pricing.plans[0].price = "25";
    }

    // Update terms text
    if (data.terms && data.terms.sections) {
      data.terms.sections.forEach((sec) => {
        if (sec.content && (sec.content.includes('15') || sec.content.includes('15€') || sec.content.includes('15 euro'))) {
          sec.content = sec.content
            .replace(/15€/g, '25€')
            .replace(/15 euro/g, '25 euro')
            .replace(/15 euros/g, '25 euros')
            .replace(/15 €/g, '25 €');
        }
      });
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Updated base price to 25 in ${lang}.json`);
  }
});

// 2. Update blog-data.ts
const blogPath = 'src/lib/blog-data.ts';
if (fs.existsSync(blogPath)) {
  let content = fs.readFileSync(blogPath, 'utf8');
  content = content
    .replace(/€15/g, '€25')
    .replace(/15 euro/g, '25 euro')
    .replace(/15 euros/g, '25 euros')
    .replace(/15€/g, '25€')
    .replace(/15 €/g, '25 €');

  fs.writeFileSync(blogPath, content, 'utf8');
  console.log('Updated base price references in blog-data.ts');
}
