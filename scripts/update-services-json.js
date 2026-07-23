const fs = require('fs');

const langs = ['nl', 'en', 'fr', 'tr'];

const newServicesLists = {
  nl: [
    { title: "Dagelijkse huisbezoeken", description: "Onze oppassers komen dagelijks bij u thuis langs op een afgesproken tijdstip. Tijdens elk bezoek verzorgen wij voeding, water en de kattenbak. Uw kat blijft in haar vertrouwde omgeving en ervaart zo min mogelijk stress.", icon: "home" },
    { title: "Voeding & water", description: "Wij volgen het voedingsschema van uw kat nauwgezet op. Of het nu gaat om droogvoer, natvoer, een dieet of een speciaal voorgeschreven voeding — wij zorgen ervoor dat alles op tijd en correct wordt gegeven.", icon: "bowl" },
    { title: "Kattenbak & hygiëne", description: "Een schone kattenbak is essentieel voor het welzijn van uw kat. Wij scheppen de kattenbak bij elk bezoek en vervangen het kattenbakvulling wanneer nodig.", icon: "sparkle" },
    { title: "Spelen & aandacht", description: "Katten hebben sociale interactie nodig, zelfs de meest onafhankelijke. Onze oppassers nemen de tijd voor speeltijd, aaien en gezelschap. Met hun favoriete speeltje uiteraard!", icon: "toy" },
    { title: "Gezondheidsmonitoring", description: "Wij houden bij elk bezoek het welzijn van uw kat in de gaten: eetlust, drinkgedrag, stoelgang, activiteitsniveau en algemene stemming. Afwijkingen worden onmiddellijk aan u gemeld.", icon: "heart" },
    { title: "Medicatie toediening", description: "Van dagelijkse pillen tot oogdruppels en insuline-injecties: onze oppassers zijn opgeleid en ervaren in het toedienen van medicatie. In overleg met uw dierenarts zorgen wij voor een correcte toediening.", icon: "pill" },
    { title: "Bodycam-opnames", description: "Voor volledige transparantie dragen onze oppassers een bodycam tijdens elk bezoek. De opnames worden na het bezoek beschikbaar gesteld via uw persoonlijk dashboard en worden 30 dagen bewaard.", icon: "camera" },
    { title: "Plantenverzorging", description: "Als bonusservice gieten wij tijdens ons bezoek ook graag uw kamerplanten en tuinplanten water. Zo hoeft u zich over niets zorgen te maken terwijl u weg bent.", icon: "plant" },
    { title: "Brievenbus & Huiszorg", description: "Wij legen uw brievenbus, zetten de vuilnisbak buiten en zorgen dat uw huis er bewoond uitziet (bijv. gordijnen open/dicht, lichten aan/uit) om inbraak te voorkomen.", icon: "mail" }
  ],
  en: [
    { title: "Daily home visits", description: "Our sitters visit your home daily at an agreed time. During each visit, we take care of food, water, and the litter box. Your cat stays in its familiar environment and experiences minimal stress.", icon: "home" },
    { title: "Feeding & water", description: "We strictly follow your cat's feeding schedule. Whether it's dry food, wet food, a diet, or specially prescribed food — we ensure everything is given correctly and on time.", icon: "bowl" },
    { title: "Litter box & hygiene", description: "A clean litter box is essential for your cat's well-being. We scoop the litter box during every visit and replace the litter when necessary.", icon: "sparkle" },
    { title: "Play & attention", description: "Cats need social interaction, even the most independent ones. Our sitters take time for playtime, petting, and companionship. With their favorite toy, of course!", icon: "toy" },
    { title: "Health monitoring", description: "We monitor your cat's well-being during every visit: appetite, drinking behavior, bowel movements, activity level, and general mood. Any deviations are immediately reported to you.", icon: "heart" },
    { title: "Medication administration", description: "From daily pills to eye drops and insulin injections: our sitters are trained and experienced in administering medication. We ensure correct administration in consultation with your vet.", icon: "pill" },
    { title: "Bodycam recordings", description: "For full transparency, our sitters wear a bodycam during every visit. The recordings are made available via your personal dashboard after the visit and are kept for 30 days.", icon: "camera" },
    { title: "Plant care", description: "As a bonus service, we are happy to water your indoor and outdoor plants during our visit. That way, you don't have to worry about anything while you're away.", icon: "plant" },
    { title: "Mail & Home Care", description: "We empty your mailbox, take out the trash, and make your house look lived-in (e.g., opening/closing curtains, turning lights on/off) to deter burglars.", icon: "mail" }
  ],
  fr: [
    { title: "Visites quotidiennes à domicile", description: "Nos gardiens visitent votre domicile tous les jours à une heure convenue. Lors de chaque visite, nous nous occupons de la nourriture, de l'eau et de la litière. Votre chat reste dans son environnement familier et subit un minimum de stress.", icon: "home" },
    { title: "Nourriture et eau", description: "Nous suivons strictement le programme alimentaire de votre chat. Qu'il s'agisse de croquettes, de nourriture humide, d'un régime ou d'aliments prescrits, nous nous assurons que tout est donné correctement et à temps.", icon: "bowl" },
    { title: "Litière et hygiène", description: "Une litière propre est essentielle au bien-être de votre chat. Nous nettoyons la litière à chaque visite et remplaçons le sable si nécessaire.", icon: "sparkle" },
    { title: "Jeu et attention", description: "Les chats ont besoin d'interactions sociales, même les plus indépendants. Nos gardiens prennent le temps de jouer, de caresser et de tenir compagnie. Avec leur jouet préféré, bien sûr !", icon: "toy" },
    { title: "Suivi de santé", description: "Nous surveillons le bien-être de votre chat à chaque visite : appétit, hydratation, selles, niveau d'activité et humeur générale. Toute anomalie vous est immédiatement signalée.", icon: "heart" },
    { title: "Administration de médicaments", description: "Des pilules quotidiennes aux gouttes pour les yeux et aux injections d'insuline : nos gardiens sont formés et expérimentés dans l'administration de médicaments. Nous assurons une administration correcte en consultation avec votre vétérinaire.", icon: "pill" },
    { title: "Enregistrements Bodycam", description: "Pour une transparence totale, nos gardiens portent une caméra corporelle à chaque visite. Les enregistrements sont disponibles sur votre tableau de bord personnel après la visite et sont conservés pendant 30 jours.", icon: "camera" },
    { title: "Entretien des plantes", description: "En prime, nous nous faisons un plaisir d'arroser vos plantes d'intérieur et de jardin lors de notre visite. Ainsi, vous n'avez à vous soucier de rien pendant votre absence.", icon: "plant" },
    { title: "Courrier & Soins de la Maison", description: "Nous vidons votre boîte aux lettres, sortons les poubelles et donnons à votre maison un aspect habité (par exemple, ouverture/fermeture des rideaux, allumage/extinction des lumières) pour dissuader les cambrioleurs.", icon: "mail" }
  ],
  tr: [
    { title: "Günlük ev ziyaretleri", description: "Bakıcılarımız her gün belirlenen saatte evinize gelir. Her ziyarette beslenme, su ve kum kabıyla ilgileniyoruz. Kediniz alışık olduğu ortamda kalır ve minimum düzeyde stres yaşar.", icon: "home" },
    { title: "Beslenme ve su", description: "Kedinizin beslenme programını titizlikle takip ediyoruz. Kuru mama, yaş mama, diyet veya özel olarak reçete edilen beslenme olsun — her şeyin zamanında ve doğru şekilde verilmesini sağlıyoruz.", icon: "bowl" },
    { title: "Kum kabı ve hijyen", description: "Temiz bir kum kabı kedinizin sağlığı için çok önemlidir. Her ziyarette kum kabını temizliyor ve gerektiğinde kumu değiştiriyoruz.", icon: "sparkle" },
    { title: "Oyun ve arkadaşlık", description: "Kedilerin sosyal etkileşime ihtiyacı vardır, en bağımsız olanların bile. Bakıcılarımız oyun, sevgi ve arkadaşlık için zaman ayırır. Elbette en sevdiği oyuncağıyla!", icon: "toy" },
    { title: "Sağlık takibi", description: "Her ziyarette kedinizin sağlık durumunu gözlemliyoruz: iştah, su tüketimi, kum kabı kullanımı, enerji seviyesi ve genel ruh hali. Herhangi bir değişiklik derhal size bildirilir.", icon: "heart" },
    { title: "İlaç uygulaması", description: "Günlük haplardan göz damlalarına ve insülin enjeksiyonlarına kadar: bakıcılarımız ilaç uygulamasında eğitimli ve deneyimlidir. Veterinerinizle koordineli olarak doğru uygulamayı sağlıyoruz.", icon: "pill" },
    { title: "Vücut kamerası kayıtları", description: "Tam şeffaflık için bakıcılarımız her ziyarette vücut kamerası takar. Kayıtlar ziyaret sonrasında kişisel paneliniz üzerinden erişilebilir hale gelir ve 30 gün boyunca saklanır.", icon: "camera" },
    { title: "Bitki sulama", description: "Ekstra hizmet olarak ziyaretimiz sırasında iç mekan ve bahçe bitkilerinizi de sularız. Böylece uzaktayken hiçbir şey için endişelenmenize gerek kalmaz.", icon: "plant" },
    { title: "Posta ve Ev Bakımı", description: "Posta kutunuzu boşaltırız, çöpleri dışarı çıkarırız ve hırsızları caydırmak için evinize yaşanıyor görünümü veririz (örn. perdeleri açma/kapama, ışıkları açma/kapatma).", icon: "mail" }
  ]
};

langs.forEach((lang) => {
  const filePath = `src/messages/${lang}.json`;
  if (fs.existsSync(filePath)) {
    let raw = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(raw);
    
    // Replace the servicesList entirely
    if (data.services && data.services.servicesList) {
      data.services.servicesList = newServicesLists[lang];
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`Updated servicesList in ${lang}.json`);
    }
  }
});
