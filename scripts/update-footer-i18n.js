const fs = require('fs');

const districtsI18n = {
  nl: {
    title: "Wijken in Antwerpen",
    zuid: "Antwerpen Zuid & Centrum",
    berchem: "Berchem (2600)",
    deurne: "Deurne (2100)",
    merksem: "Merksem (2170)",
    wilrijk: "Wilrijk & Edegem (2610)"
  },
  en: {
    title: "Antwerp Neighborhoods",
    zuid: "Antwerp South & Centre",
    berchem: "Berchem (2600)",
    deurne: "Deurne (2100)",
    merksem: "Merksem (2170)",
    wilrijk: "Wilrijk & Edegem (2610)"
  },
  fr: {
    title: "Quartiers d'Anvers",
    zuid: "Anvers Sud & Centre",
    berchem: "Berchem (2600)",
    deurne: "Deurne (2100)",
    merksem: "Merksem (2170)",
    wilrijk: "Wilrijk & Edegem (2610)"
  },
  tr: {
    title: "Anvers Bölgeleri",
    zuid: "Anvers Güney & Merkez",
    berchem: "Berchem (2600)",
    deurne: "Deurne (2100)",
    merksem: "Merksem (2170)",
    wilrijk: "Wilrijk & Edegem (2610)"
  }
};

const langs = ['nl', 'en', 'fr', 'tr'];

langs.forEach((lang) => {
  const filePath = `src/messages/${lang}.json`;
  if (fs.existsSync(filePath)) {
    let raw = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(raw);

    if (!data.footer) data.footer = {};
    data.footer.districts = districtsI18n[lang];

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Added footer.districts translations to ${lang}.json`);
  }
});
