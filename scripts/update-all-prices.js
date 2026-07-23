const fs = require('fs');

const langs = ['nl', 'en', 'fr', 'tr'];

langs.forEach((lang) => {
  const filePath = `src/messages/${lang}.json`;
  if (fs.existsSync(filePath)) {
    let raw = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(raw);

    // Update pricing plan prices
    if (data.pricing && data.pricing.plans) {
      if (data.pricing.plans[0]) data.pricing.plans[0].price = "25";
      if (data.pricing.plans[1]) data.pricing.plans[1].price = "35";
      if (data.pricing.plans[2]) data.pricing.plans[2].price = "55";
    }

    // Update terms text
    if (data.terms && data.terms.sections) {
      data.terms.sections.forEach((sec) => {
        if (sec.content) {
          sec.content = sec.content
            .replace(/15€/g, '25€')
            .replace(/15 euro/g, '25 euro')
            .replace(/15 euros/g, '25 euros')
            .replace(/22€/g, '35€')
            .replace(/22 euro/g, '35 euro')
            .replace(/22 euros/g, '35 euros')
            .replace(/35€/g, '55€')
            .replace(/35 euro/g, '55 euro')
            .replace(/35 euros/g, '55 euros');
        }
      });
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Updated all 3 tier prices (25, 35, 55) in ${lang}.json`);
  }
});

// Update blog-data.ts
const blogPath = 'src/lib/blog-data.ts';
if (fs.existsSync(blogPath)) {
  let content = fs.readFileSync(blogPath, 'utf8');

  content = content
    .replace(/€15/g, '€25')
    .replace(/15 euro/g, '25 euro')
    .replace(/15€/g, '25€')
    .replace(/€22/g, '€35')
    .replace(/22 euro/g, '35 euro')
    .replace(/22€/g, '35€')
    .replace(/€35/g, '€55')
    .replace(/35 euro/g, '55 euro')
    .replace(/35€/g, '55€');

  fs.writeFileSync(blogPath, content, 'utf8');
  console.log('Updated tier price references in blog-data.ts');
}
