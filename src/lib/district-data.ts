export interface DistrictInfo {
  slug: string;
  slugAlias?: string;
  postalCode: string;
  name: Record<string, string>;
  title: Record<string, string>;
  subtitle: Record<string, string>;
  description: Record<string, string>;
  highlights: Record<string, string[]>;
  image: string;
  geo: {
    latitude: number;
    longitude: number;
  };
  keywords: Record<string, string[]>;
}

export const districts: DistrictInfo[] = [
  {
    "slug": "daily-visits",
    "postalCode": "Groot-Antwerpen",
    "name": {
      "nl": "Dagelijkse Huisbezoeken",
      "en": "Daily Home Visits",
      "fr": "Visites Quotidiennes à Domicile",
      "tr": "Günlük Ev Ziyaretleri"
    },
    "title": {
      "nl": "Dagelijkse Kattenoppas Bezoeken aan Huis in Antwerpen",
      "en": "Daily In-Home Cat Sitting Visits in Antwerp",
      "fr": "Visites Quotidiennes de Garde de Chat à Domicile à Anvers",
      "tr": "Anvers'te Günlük Evde Kedi Bakımı Ziyaretleri"
    },
    "subtitle": {
      "nl": "Persoonlijke verzorging, voeding en controle bij u thuis in Antwerpen.",
      "en": "Personalized care, feeding, and wellness checks at your home in Antwerp.",
      "fr": "Soins personnalisés, repas et suivi à votre domicile à Anvers.",
      "tr": "Anvers'te evinizde kişiselleştirilmiş kedi bakımı ve kontrolü."
    },
    "description": {
      "nl": "Tijdens onze dagelijkse bezoeken krijgt uw kat alle aandacht die ze verdient. Wij komen 1 of 2 keer per dag langs in de regio Antwerpen voor voeding, vers water, kattenbak hygiëne, speeltijd en een grondige gezondheidscheck onder leiding van een gediplomeerd bioloog.",
      "en": "During our daily visits, your cat receives all the affection and care they deserve. We visit 1 or 2 times per day across the Antwerp region for feeding, fresh water, litter hygiene, play sessions, and health checks.",
      "fr": "Lors de nos visites quotidiennes, votre chat reçoit toute l'attention nécessaire. Nous intervenons 1 ou 2 fois par jour à Anvers pour repas, eau fraîche, litière et jeux.",
      "tr": "Günlük ziyaretlerimizde kediniz hak ettiği tüm ilgiyi görür. Anvers bölgesinde günde 1 veya 2 kez gelerek mama, su, kum temizliği ve biyolog eşliğinde sağlık kontrolü yapıyoruz."
    },
    "highlights": {
      "nl": [
        "1 of 2 bezoeken per dag mogelijk",
        "HD Bodycam videobewijs na elk bezoek",
        "Persoonlijk dagrapport in het dashboard",
        "Geen stress van verhuizing naar pension"
      ],
      "en": [
        "1 or 2 visits per day available",
        "HD Bodycam video proof after every visit",
        "Personalized daily report in dashboard",
        "Zero relocation stress"
      ],
      "fr": [
        "1 ou 2 visites par jour",
        "Preuve vidéo Bodycam HD après chaque visite",
        "Rapport quotidien sur le tableau de bord",
        "Zéro stress de déplacement"
      ],
      "tr": [
        "Günde 1 veya 2 ziyaret seçeneği",
        "Her ziyarette HD Yaka Kamerası video kaydı",
        "Kullanıcı panelinde günlük rapor",
        "Otel stresi olmadan evde bakım"
      ]
    },
    "image": "/images/cat_feeding.png",
    "geo": {
      "latitude": 51.2194,
      "longitude": 4.4025
    },
    "keywords": {
      "nl": [
        "dagelijkse kattenoppas Antwerpen",
        "huisbezoek kat Antwerpen",
        "oppas aan huis kat"
      ],
      "en": [
        "daily cat sitter Antwerp",
        "in home cat visit Antwerp"
      ],
      "fr": [
        "visite quotidienne chat Anvers",
        "garde chat a domicile Anvers"
      ],
      "tr": [
        "günlük kedi bakıcısı Anvers",
        "evde kedi ziyareti Anvers"
      ]
    }
  },
  {
    "slug": "feeding",
    "postalCode": "Groot-Antwerpen",
    "name": {
      "nl": "Voeding & Vers Water",
      "en": "Feeding & Fresh Water",
      "fr": "Alimentation & Eau Fraîche",
      "tr": "Mama & Taze Su Bakımı"
    },
    "title": {
      "nl": "Voeding op Maat & Vers Water Service voor Katten in Antwerpen",
      "en": "Tailored Feeding & Fresh Water Service for Cats in Antwerp",
      "fr": "Service d'Alimentation Sur Mesure & Eau Fraîche pour Chats à Anvers",
      "tr": "Anvers'te Kediler İçin Özel Beslenme ve Taze Su Hizmeti"
    },
    "subtitle": {
      "nl": "Strikte naleving van uw voedingsschema en hydratatiecontrole door biologen.",
      "en": "Strict adherence to your feeding schedule and hydration monitoring by biologists.",
      "fr": "Respect strict de votre programme d'alimentation et suivi de l'hydratation.",
      "tr": "Kedinizin özel beslenme saatlerine tam uyum ve sıvı takibi."
    },
    "description": {
      "nl": "Voeding is essentieel voor het welzijn van uw kat. Wij volgen nauwgezet het dieet van uw huisdier — of het nu gaat om droogvoer, natvoer, KVV/BARF of speciaal dieetvoer. Na elk bezoek worden de voer- en drinkbakjes grondig afgewassen.",
      "en": "Nutrition is paramount for your cat's wellbeing. We closely follow your pet's diet — whether dry kibble, wet food, raw BARF diets, or prescription veterinary food. Bowls are washed clean every visit.",
      "fr": "L'alimentation est essentielle pour la santé de votre chat. Nous suivons attentivement son régime (croquettes, pâtée, alimentation médicale). Les gamelles sont lavées à chaque visite.",
      "tr": "Beslenme kedinizin sağlığı için hayati önem taşır. Kuru mama, yaş mama veya veteriner diyet mamasını kedinizin alışık olduğu düzenle veriyor, mama ve su kaplarını her gün yıkıyoruz."
    },
    "highlights": {
      "nl": [
        "Grondige reiniging van eete- en drinkbakjes",
        "Vaste voedingstijden volgens uw instructies",
        "Controle op hydratatie en eetlust",
        "Geschikt voor medische diëten"
      ],
      "en": [
        "Thorough cleaning of food and water bowls",
        "Fixed feeding times per your instructions",
        "Appetite and hydration monitoring",
        "Suitable for prescription diets"
      ],
      "fr": [
        "Nettoyage complet des gamelles",
        "Horaires fixes selon vos instructions",
        "Suivi de l'appétit et de l'hydratation",
        "Adapté aux régimes médicaux"
      ],
      "tr": [
        "Mama ve su kaplarının günlük yıkanması",
        "Talimatlarınıza uygun sabit beslenme saatleri",
        "İştah ve sıvı alımı takibi",
        "Özel veteriner diyetlerine uygunluk"
      ]
    },
    "image": "/images/cat_feeding.png",
    "geo": {
      "latitude": 51.2194,
      "longitude": 4.4025
    },
    "keywords": {
      "nl": [
        "katten eten geven oppas Antwerpen",
        "vers water kat vakantie",
        "voeding kat oppas"
      ],
      "en": [
        "cat feeding service Antwerp",
        "cat fresh water sitting Antwerp"
      ],
      "fr": [
        "nourrir chat vacances Anvers",
        "alimentation chat garde Anvers"
      ],
      "tr": [
        "kedi mama verme servisi Anvers",
        "tatilde kedi besleme Anvers"
      ]
    }
  },
  {
    "slug": "medication",
    "postalCode": "Groot-Antwerpen",
    "name": {
      "nl": "Medicatie & Insuline Care",
      "en": "Medication & Insulin Care",
      "fr": "Médicaments & Soins Insuline",
      "tr": "İlaç & İnsülin Bakımı"
    },
    "title": {
      "nl": "Deskundige Medicatie & Insuline Toediening bij Katten in Antwerpen",
      "en": "Expert Medication & Insulin Administration for Cats in Antwerp",
      "fr": "Administration Experte de Médicaments & Insuline pour Chats à Anvers",
      "tr": "Anvers'te Kediler İçin Uzman İlaç ve İnsülin Uygulama Hizmeti"
    },
    "subtitle": {
      "nl": "Veilige toediening van pillen, druppels en insuline-injecties onder biologisch toezicht.",
      "en": "Safe delivery of pills, drops, and insulin shots overseen by a biologist.",
      "fr": "Administration sécurisée de comprimés, gouttes et injections d'insuline.",
      "tr": "Biyolog kontrolünde güvenli hap, damla ve insülin iğnesi uygulaması."
    },
    "description": {
      "nl": "Heeft uw kat dagelijks medicatie nodig voor een chronische aandoening of diabetes? Onze oprichter is een gediplomeerd bioloog met ruime ervaring in het toedienen van pillen, zalven en insuline-injecties stipt op tijd.",
      "en": "Does your cat require daily medication for chronic illness or diabetes? Founded by a qualified biologist, our team is highly trained in administering pills, liquids, ointments, and precise insulin injections.",
      "fr": "Votre chat nécessite-t-il des médicaments quotidiens ou de l'insuline? Notre équipe dirigée par une biologiste administre les comprimés et piqûres à heures fixes.",
      "tr": "Kedinizin diyabet veya kronik rahatsızlığı için günlük ilaca mı ihtiyacı var? Biyolog ekibimizle hap, şurup, göz damlası ve insülin enjeksiyonlarını tam saatinde yapıyoruz."
    },
    "highlights": {
      "nl": [
        "Insuline-injecties op strakke 12-uurs intervallen",
        "Zachte toediening van pillen zonder stress",
        "Biologische en medische achtergrond",
        "HD Bodycam videobewijs van toediening"
      ],
      "en": [
        "Insulin injections at precise 12-hour intervals",
        "Gentle pill delivery without feline stress",
        "Biological and medical background",
        "HD Bodycam video proof of administration"
      ],
      "fr": [
        "Injections d'insuline à intervalle de 12h",
        "Administration douce de comprimés sans stress",
        "Formation biologique et médicale",
        "Preuve vidéo Bodycam HD"
      ],
      "tr": [
        "12 saatlik tam aralıklarla insülin iğnesi",
        "Kediyi strese sokmadan nazik hap verme",
        "Biyolojik ve medikal tecrübe",
        "İlaç anının HD Bodycam kaydı"
      ]
    },
    "image": "/images/cat_meds.png",
    "geo": {
      "latitude": 51.2194,
      "longitude": 4.4025
    },
    "keywords": {
      "nl": [
        "kat medicatie toedienen Antwerpen",
        "diabetische kat insuline oppas Antwerpen",
        "medische kattenoppas"
      ],
      "en": [
        "cat medication sitter Antwerp",
        "diabetic cat insulin sitting Antwerp"
      ],
      "fr": [
        "donner medicament chat Anvers",
        "insuline chat garde Anvers"
      ],
      "tr": [
        "kedi ilaç verme bakıcısı Anvers",
        "diyabetli kedi insülin bakımı Anvers"
      ]
    }
  },
  {
    "slug": "bodycam",
    "slugAlias": "bodycam-recordings",
    "postalCode": "Groot-Antwerpen",
    "name": {
      "nl": "HD Bodycam Transparantie",
      "en": "HD Bodycam Transparency",
      "fr": "Transparence Bodycam HD",
      "tr": "HD Yaka Kamerası Güvencesi"
    },
    "title": {
      "nl": "100% Transparante Kattenoppas met HD Bodycam Opnames in Antwerpen",
      "en": "100% Transparent Cat Sitting with HD Bodycam Recordings in Antwerp",
      "fr": "Garde de Chat 100% Transparente avec Enregistrements Bodycam HD à Anvers",
      "tr": "Anvers'te %100 Şeffaf Yaka Kameralı Kedi Bakım Hizmeti"
    },
    "subtitle": {
      "nl": "Bekijk na elk bezoek de videobeelden in uw persoonlijke klantendashboard.",
      "en": "Watch video footage after every visit in your private client dashboard.",
      "fr": "Visionnez les vidéos après chaque visite sur votre tableau de bord.",
      "tr": "Her ziyaretten sonra videoları kişisel kullanıcı panelinizden izleyin."
    },
    "description": {
      "nl": "Vertrouwen is de kern van onze service. Onze verzorgers dragen tijdens elk huisbezoek in Antwerpen een HD Bodycam. U krijgt na het bezoek toegang tot de beelden zodat u met eigen ogen ziet hoe uw kat verzorgd wordt.",
      "en": "Trust is at the heart of our service. Our sitters wear an HD Bodycam during every home visit in Antwerp. After each visit, you gain private access to watch your cat being fed, played with, and loved.",
      "fr": "La confiance est au cœur de notre service. Nos gardes portent une caméra vidéo HD lors de chaque visite à Anvers. Vous recevez un accès privé pour visionner les soins apportés.",
      "tr": "Güven hizmetimizin temelidir. Anvers'te her ziyarette bakıcılarımız HD Yaka Kamerası takar. Ziyaret sonrasında videolar panelinize yüklenir ve kedinizin nasıl bakıldığını izleyebilirsiniz."
    },
    "highlights": {
      "nl": [
        "Volledige HD-opname van het bezoek",
        "Discreet en privacy-vriendelijk (enkel voor u)",
        "Bekijk beelden binnen 24 uur op uw dashboard",
        "Gemoedsrust gegarandeerd tijdens uw vakantie"
      ],
      "en": [
        "Full HD recording of the visit",
        "Discreet & privacy compliant (client access only)",
        "Watch within 24 hours on your dashboard",
        "Guaranteed peace of mind while away"
      ],
      "fr": [
        "Enregistrement HD complet de la visite",
        "Confidentiel et sécurisé (accès client uniquement)",
        "Disponible sous 24h sur votre espace",
        "Sérénité garantie pendant vos vacances"
      ],
      "tr": [
        "Ziyaretin eksiksiz HD video kaydı",
        "Gizlilik odaklı (sadece sizin erişiminize açık)",
        "24 saat içinde panelde izleme imkanı",
        "Seyahatinizde %100 kafa rahatlığı"
      ]
    },
    "image": "/images/cat_bodycam.png",
    "geo": {
      "latitude": 51.2194,
      "longitude": 4.4025
    },
    "keywords": {
      "nl": [
        "bodycam kattenoppas Antwerpen",
        "transparante kattenoppas",
        "videobewijs oppas kat"
      ],
      "en": [
        "bodycam cat sitter Antwerp",
        "transparent pet sitting Antwerp"
      ],
      "fr": [
        "bodycam garde chat Anvers",
        "camera video cat sitter Anvers"
      ],
      "tr": [
        "yaka kameralı kedi bakıcısı Anvers",
        "videolu kedi bakıcı Anvers"
      ]
    }
  },
  {
    "slug": "health",
    "postalCode": "Groot-Antwerpen",
    "name": {
      "nl": "Gezondheidsmonitoring",
      "en": "Health Monitoring",
      "fr": "Suivi de Santé Féline",
      "tr": "Gelişmiş Sağlık Takibi"
    },
    "title": {
      "nl": "Biologische Gezondheidscontrole voor Katten in Antwerpen",
      "en": "Biological Health Monitoring for Cats in Antwerp",
      "fr": "Suivi de Santé Féline Biologique à Anvers",
      "tr": "Anvers'te Kediler İçin Biyolog Kontrolünde Sağlık Takibi"
    },
    "subtitle": {
      "nl": "Vroegtijdige herkenning van ziekte, stress en gedragsveranderingen.",
      "en": "Early detection of illness, stress, and behavioral shifts.",
      "fr": "Détection précoce des maladies, du stress et des changements de comportement.",
      "tr": "Hastalık, stres ve davranış değişikliklerinin erken teşhisi."
    },
    "description": {
      "nl": "Katten verbergen pijn en ziekte uitermate goed. Als biologen kijken wij verder dan alleen voer geven: we inspecteren de oogjes, vacht, ontlasting en ademhaling om eventuele gezondheidsproblemen direct te signaleren.",
      "en": "Cats excel at hiding pain and illness. As biologists, we go beyond basic feeding: we inspect eyes, coat condition, elimination habits, and breathing to catch any health issues early.",
      "fr": "Les chats masquent très bien la douleur. En tant que biologistes, nous inspectons les yeux, le pelage, la respiration et la litière pour détecter tout problème au plus vite.",
      "tr": "Kediler hastalık ve ağrılarını gizlemekte uzmandır. Biyolog bakıcılarımız mamadan fazlasını yapar: gözler, tüy yapısı, nefes ve kum durumunu inceleyerek olası sorunları anında fark eder."
    },
    "highlights": {
      "nl": [
        "Biyolojik uzmanlık met diergeneeskundige inzichten",
        "Dagelijkse inspectie van kattenbak en eetlust",
        "Direct contact bij afwijkingen of spoed",
        "Samenwerking met lokale dierenartsen in Antwerpen"
      ],
      "en": [
        "Biological expertise with veterinary awareness",
        "Daily check of appetite and litter habits",
        "Immediate client alert upon any medical concern",
        "Partnerships with local Antwerp vet clinics"
      ],
      "fr": [
        "Expertise biologique et sensibilité vétérinaire",
        "Vérification quotidienne du comportement",
        "Alerte immédiate en cas de souci",
        "Partenariat avec vétérinaires locaux"
      ],
      "tr": [
        "Biyoloji ve veteriner bilinciyle takip",
        "Günlük iştah ve kum kontrolü",
        "Sorun anında derhal kullanıcıya bildirim",
        "Anvers veteriner klinikleriyle koordinasyon"
      ]
    },
    "image": "/images/cat_health.png",
    "geo": {
      "latitude": 51.2194,
      "longitude": 4.4025
    },
    "keywords": {
      "nl": [
        "gezondheidscontrole kat oppas Antwerpen",
        "bioloog kattenzorg Antwerpen",
        "zieke kat oppas"
      ],
      "en": [
        "cat health monitoring Antwerp",
        "biologist cat care Antwerp"
      ],
      "fr": [
        "suivi sante chat Anvers",
        "biologiste garde chat Anvers"
      ],
      "tr": [
        "kedi sağlık takibi Anvers",
        "biyolog kedi bakıcısı Anvers"
      ]
    }
  },
  {
    "slug": "litter",
    "postalCode": "Groot-Antwerpen",
    "name": {
      "nl": "Kattenbak Hygiëne",
      "en": "Litter Box Hygiene",
      "fr": "Hygiène de la Litière",
      "tr": "Kedi Kumu Hijyeni"
    },
    "title": {
      "nl": "Dagelijkse Kattenbak Reiniging & Hygiëne Service in Antwerpen",
      "en": "Daily Litter Box Cleaning & Hygiene Service in Antwerp",
      "fr": "Service Quotidien de Nettoyage de Litière à Anvers",
      "tr": "Anvers'te Günlük Kedi Kumu Temizliği ve Hijyen Hizmeti"
    },
    "subtitle": {
      "nl": "Voorkom blaasontsteking en wildplassen met een brandschone kattenbak.",
      "en": "Prevent urinary tract infections and stress with a spotlessly clean box.",
      "fr": "Évitez les infections urinaires et le stress grâce à une litière impeccable.",
      "tr": "Tertemiz bir kum kabı ile idrar yolu enfeksiyonu ve stresi önleyin."
    },
    "description": {
      "nl": "Een vuile kattenbak is de nummer 1 oorzaak van stress en blaasproblemen bij katten. Wij scheppen de kattenbak bij elk bezoek grondig leeg, vullen vulling aan en houden de ruimte eromheen netjes schoon.",
      "en": "A soiled litter box is the #1 cause of feline stress and urinary issues. We thoroughly scoop the litter box every visit, top up fresh litter, and sweep the surrounding area clean.",
      "fr": "Une litière sale est la cause principale de stress chez le chat. Nous nettoyons le bac à chaque visite, ajoutons de la litière fraîche et balayons les alentours.",
      "tr": "Kirli kedi kumu, kedilerde idrar yolu sorunları ve stresin 1 numaralı sebebidir. Her ziyarette kumu eliyor, eksilen kumu ekliyor ve etrafını süpürüyoruz."
    },
    "highlights": {
      "nl": [
        "Grondig scheppen bij elk bezoek",
        "Netjes aanvegen van de uitloopruimte",
        "Volledige verschoonservice mogelijk",
        "Voorkomt nare geurtjes in huis"
      ],
      "en": [
        "Thorough scooping every visit",
        "Sweeping litter scatter around the box",
        "Full litter refresh option available",
        "Keeps your home smelling fresh"
      ],
      "fr": [
        "Nettoyage complet à chaque visite",
        "Balayage autour du bac",
        "Changement complet de litière possible",
        "Élimine les mauvaises odeurs"
      ],
      "tr": [
        "Her ziyarette detaylı kum eleme",
        "Kum kabı etrafının süpürülmesi",
        "Komple kum değiştirme seçeneği",
        "Evinizde kötü kokuları önleme"
      ]
    },
    "image": "/images/cat_plants.png",
    "geo": {
      "latitude": 51.2194,
      "longitude": 4.4025
    },
    "keywords": {
      "nl": [
        "kattenbak schoonmaken oppas Antwerpen",
        "kattenbak hygiene vakantie"
      ],
      "en": [
        "litter box cleaning Antwerp",
        "cat litter sitter Antwerp"
      ],
      "fr": [
        "nettoyage litiere chat Anvers"
      ],
      "tr": [
        "kedi kumu temizliği Anvers",
        "kedi kum kabı bakımı"
      ]
    }
  },
  {
    "slug": "playtime",
    "postalCode": "Groot-Antwerpen",
    "name": {
      "nl": "Aandacht & Speeltijd",
      "en": "Playtime & Affection",
      "fr": "Jeux & Attention",
      "tr": "Oyun & Sevgi Saati"
    },
    "title": {
      "nl": "Interactieve Speeltijd & Aandacht voor Katten in Antwerpen",
      "en": "Interactive Playtime & Affection for Cats in Antwerp",
      "fr": "Sessions de Jeux Interactifs & Câlins pour Chats à Anvers",
      "tr": "Anvers'te Kediler İçin Eğlenceli Oyun ve Sevgi Saatleri"
    },
    "subtitle": {
      "nl": "Mentale stimulatie, hengelspelletjes en knuffels tegen eenzaamheid.",
      "en": "Mental stimulation, feather wands, and cuddles to defeat loneliness.",
      "fr": "Stimulation mentale, jeux de plumeau et câlins contre la solitude.",
      "tr": "Yalnızlığı önleyen zihinsel oyunlar, olta oyunları ve bolca kucak."
    },
    "description": {
      "nl": "Katten hebben verrijking en sociale interactie nodig. Tijdens ons bezoek nemen we uitgebreid de tijd om met hengeltjes, balletjes of denkpuzzels te spelen, of gewoon rustig op de zetel te knuffelen als uw kat dat verkiest.",
      "en": "Cats thrive on environmental enrichment and human connection. During our visits, we dedicate quality time to play with wand toys, balls, or puzzle feeders — or simply cuddle on the sofa if your cat prefers quiet affection.",
      "fr": "Les chats ont besoin de jeux et de présence. Lors de nos visites, nous prenons le temps de jouer (plumeaux, balles, puzzles) ou de faire des câlins selon la personnalité de votre chat.",
      "tr": "Kedilerin oyun oynamaya ve sevgiye ihtiyacı vardır. Ziyaretlerimizde kedi oltaları, toplar ve akıl oyunlarıyla oynuyor ya da kediniz isterse koltukta sakince seviyoruz."
    },
    "highlights": {
      "nl": [
        "Speelhengel en puzzelspeelgoed inbegrepen",
        "Aangepast aan de energie van uw kat (kitten vs senior)",
        "Vermindert scheidingsangst en verveling",
        "HD Bodycam beelden van de speelsessie"
      ],
      "en": [
        "Feather wands and puzzle toys included",
        "Tailored to your cat's energy level (kitten vs senior)",
        "Reduces separation anxiety and boredom",
        "HD Bodycam footage of play sessions"
      ],
      "fr": [
        "Jeux et jouets interactifs inclus",
        "Adapté à l'énergie de votre chat",
        "Réduit l'anxiété de séparation",
        "Vidéos Bodycam des moments de jeu"
      ],
      "tr": [
        "Oyun oltaları ve zeka oyuncakları dahil",
        "Kedinizin enerjisine özel oyun (yavru vs yaşlı)",
        "Ayrılık kaygısı ve sıkıntıyı azaltma",
        "Oyun anlarının HD Bodycam kaydı"
      ]
    },
    "image": "/images/cat_playing.png",
    "geo": {
      "latitude": 51.2194,
      "longitude": 4.4025
    },
    "keywords": {
      "nl": [
        "kat spelen oppas Antwerpen",
        "aandacht kat vakantie",
        "kat knuffelen oppas"
      ],
      "en": [
        "cat playtime sitter Antwerp",
        "cat affection pet sitter Antwerp"
      ],
      "fr": [
        "jeux chat garde Anvers",
        "calins chat oppas Anvers"
      ],
      "tr": [
        "kedi oyun saati bakıcı Anvers",
        "kedi sevgi bakımı Anvers"
      ]
    }
  },
  {
    "slug": "plants",
    "postalCode": "Groot-Antwerpen",
    "name": {
      "nl": "Plantenverzorging",
      "en": "Plant Watering",
      "fr": "Arrosage des Plantes",
      "tr": "Çiçek Sulama Hizmeti"
    },
    "title": {
      "nl": "Plantenverzorging Service tijdens uw Vakantie in Antwerpen",
      "en": "Plant Watering Service During Your Vacation in Antwerp",
      "fr": "Service d'Arrosage des Plantes Pendant vos Vacances à Anvers",
      "tr": "Anvers'te Tatiliniz Sırasında Çiçek ve Saksı Sulama Hizmeti"
    },
    "subtitle": {
      "nl": "Gratis extra service: kamer- en tuinplanten verzorgd bij u thuis.",
      "en": "Complimentary service: indoor and garden plants cared for at home.",
      "fr": "Service offert: vos plantes d'intérieur et du jardin arrosées.",
      "tr": "Ücretsiz ekstra hizmet: evdeki ve bahçedeki çiçekleriniz sulanır."
    },
    "description": {
      "nl": "Kom thuiskomst niet voor dorre planten te staan! Als gratis extra service gieten wij uw kamerplanten en tuinplanten water tijdens onze kattenoppasbezoeken in Antwerpen.",
      "en": "Don't return home to withered plants! As a complimentary added service, we water your houseplants and garden greenery during our cat sitting visits across Antwerp.",
      "fr": "Ne rentrez pas chez vous avec des plantes fannées! Nous arrosons vos plantes d'intérieur et du jardin gratuitement pendant nos visites de garde de chat.",
      "tr": "Tatile gittiğinizde çiçekleriniz kurumasın! Kedi bakımı ziyaretlerimizde evdeki ve balkondaki saksı çiçeklerinizi ücretsiz olarak suluyoruz."
    },
    "highlights": {
      "nl": [
        "Inbegrepen bij Standaard en Premium plannen",
        "Gieten volgens uw specifieke instructies",
        "Zowel kamerplanten als terras/balkonplanten",
        "U komt thuis bij een groen huis"
      ],
      "en": [
        "Included with Standard and Premium plans",
        "Watered according to your exact notes",
        "Both indoor and balcony/garden plants",
        "Return home to thriving green plants"
      ],
      "fr": [
        "Inclus dans les forfaits Standard et Premium",
        "Arrosage selon vos consignes",
        "Plantes d'intérieur et de balcon",
        "Retrouvez un intérieur verdoyant"
      ],
      "tr": [
        "Standart ve Premium paketlerimize dahil",
        "Çiçeklerinize özel sulama talimatlarına uyum",
        "Hem salon hem balkon/teras bitkileri",
        "Yeşil ve canlı bir eve dönüş"
      ]
    },
    "image": "/images/cat_plants.png",
    "geo": {
      "latitude": 51.2194,
      "longitude": 4.4025
    },
    "keywords": {
      "nl": [
        "planten water geven vakantie Antwerpen",
        "oppas planten en katten Antwerpen"
      ],
      "en": [
        "plant watering pet sitter Antwerp",
        "house sitting plant care Antwerp"
      ],
      "fr": [
        "arrosage plantes vacances Anvers"
      ],
      "tr": [
        "tatilde çiçek sulama Anvers",
        "evde bitki sulama bakıcısı"
      ]
    }
  },
  {
    "slug": "mail",
    "postalCode": "Groot-Antwerpen",
    "name": {
      "nl": "Brievenbus & Huiszorg",
      "en": "Mail & House Security",
      "fr": "Relève Courrier & Sécurité",
      "tr": "Posta Toplama & Ev Güvenliği"
    },
    "title": {
      "nl": "Brievenbus & Inbraakpreventie Service bij Kattenoppas in Antwerpen",
      "en": "Mail Retrieval & Burglary Prevention Service in Antwerp",
      "fr": "Service de Relève de Courrier & Sécurité du Domicile à Anvers",
      "tr": "Anvers'te Posta Kutusu Boşaltma ve Ev Güvenliği Hizmeti"
    },
    "subtitle": {
      "nl": "Post verzamelen, gordijnen bewegen en afvalbuisjes buitenzetten.",
      "en": "Mail collection, blinds adjustment, and trash bin management.",
      "fr": "Relève du courrier, gestion des volets et des poubelles.",
      "tr": "Posta toplama, perde hareketi ve çöp kutusu yönetimi."
    },
    "description": {
      "nl": "Een volle brievenbus is een uitnodiging voor inbrekers. Tijdens onze oppasbezoeken verzamelen we uw post, openen of sluiten we gordijnen en zetten we vuilnisbakken buiten om uw huis een bewoonde indruk te geven.",
      "en": "An overflowing mailbox invites burglars. During our pet sitting visits, we collect your mail, adjust blinds, and set out trash bins on collection days to maintain a lived-in look.",
      "fr": "Une boîte aux lettres débordante attire les cambrioleurs. Nous relevons votre courrier, ajustons les volets et sortons les poubelles les jours de collecte à Anvers.",
      "tr": "Taşan bir posta kutusu hırsızlara davetiye çıkarır. Bakım ziyaretlerimizde postalarınızı topluyor, perdeleri hareket ettiriyor ve çöp gününde kutuları dışarı çıkarıyoruz."
    },
    "highlights": {
      "nl": [
        "Post en pakketjes veilig uit het zicht gelegd",
        "Inbraakpreventie: gordijnen & lichten bedienen",
        "Vuilnisbakken buitenzetten op ophaaldagen",
        "Geen extra kosten"
      ],
      "en": [
        "Mail and packages safely stored out of sight",
        "Burglary prevention: adjust blinds & lights",
        "Trash bin put-out on collection days",
        "No additional charges"
      ],
      "fr": [
        "Courrier mis en sécurité à l'abri des regards",
        "Prévention cambriolage: volets et lumières",
        "Sortie des poubelles les jours de collecte",
        "Sans supplément"
      ],
      "tr": [
        "Posta ve kargoların güvenle gözden uzak konması",
        "Hırsızlık önleme: perde ve ışık hareketi",
        "Çöp toplama gününde kutuları dışarı çıkarma",
        "Ekstra ücret yok"
      ]
    },
    "image": "/images/cat_security.png",
    "geo": {
      "latitude": 51.2194,
      "longitude": 4.4025
    },
    "keywords": {
      "nl": [
        "post ophalen vakantie Antwerpen",
        "inbraakpreventie oppas Antwerpen"
      ],
      "en": [
        "mail collection pet sitter Antwerp",
        "burglary prevention house sitting Antwerp"
      ],
      "fr": [
        "releve courrier vacances Anvers"
      ],
      "tr": [
        "tatilde posta toplama Anvers",
        "ev güvenlik kedi bakıcı"
      ]
    }
  },
  {
    "slug": "antwerpen-zuid",
    "postalCode": "2000 & 2018",
    "name": {
      "nl": "Antwerpen Zuid & Centrum",
      "en": "Antwerp South & Centre",
      "fr": "Anvers Sud & Centre",
      "tr": "Anvers Güney & Merkez"
    },
    "title": {
      "nl": "Professionele Kattenoppas aan Huis in Antwerpen Zuid & Het Eilandje",
      "en": "Professional In-Home Cat Sitting in Antwerp South & Eilandje",
      "fr": "Garde de Chat Professionnelle à Domicile à Anvers Sud & Eilandje",
      "tr": "Anvers Güney ve Merkez Bölgelerinde Profesyonel Evde Kedi Bakıcısı"
    },
    "subtitle": {
      "nl": "Exclusieve kattenverzorging met HD Bodycam garantie in Het Zuid, Zurenborg en Het Eilandje.",
      "en": "Exclusive cat care with HD Bodycam verification in Het Zuid, Zurenborg, and Het Eilandje.",
      "fr": "Soins félins exclusifs avec garantie vidéo HD Bodycam au Zuid et à l'Eilandje.",
      "tr": "Het Zuid, Zurenborg ve Het Eilandje bölgelerinde yaka kameralı özel kedi bakımı."
    },
    "description": {
      "nl": "Woont u in Het Zuid, Zurenborg, Het Eilandje of het historische centrum van Antwerpen? Katten biedt de meest hoogwaardige kattenoppas aan huis. Als biologen zorgen wij ervoor dat uw kat geen stress ervaart van een kattenhotel, maar heerlijk in zijn eigen vertrouwde appartement of woning blijft.",
      "en": "Living in Het Zuid, Zurenborg, Het Eilandje, or the historic centre of Antwerp? Katten delivers top-tier in-home cat care. As biologists, we ensure your cat experiences zero hotel stress, remaining comfortably in their own home.",
      "fr": "Vous habitez au Zuid, à Zurenborg, à l'Eilandje ou dans le centre d'Anvers? Katten offre une garde à domicile de haute qualité. En tant que biologistes, nous veillons à ce que votre chat ne subisse aucun stress.",
      "tr": "Anvers Güney (Het Zuid), Zurenborg, Het Eilandje veya tarihi merkezde mi yaşıyorsunuz? Katten en kaliteli evde kedi bakımını sunar. Biyolog ekibimizle kediniz otel stresi yaşamadan kendi evinde kalır."
    },
    "highlights": {
      "nl": [
        "Snelle sleuteloverdracht in postcode 2000 & 2018",
        "HD Bodycam videobewijs na elk bezoek",
        "Biologische en medical uzmanlık",
        "Planten water geven en post verzamelen inbegrepen"
      ],
      "en": [
        "Fast key pickup in postal codes 2000 & 2018",
        "HD Bodycam video updates after every visit",
        "Biological and medical cat care expertise",
        "Plant watering and mail collection included"
      ],
      "fr": [
        "Remise de clé rapide code postal 2000 & 2018",
        "Preuve vidéo HD Bodycam après chaque visite",
        "Expertise biologique et médicale",
        "Arrosage des plantes et relève du courrier inclus"
      ],
      "tr": [
        "2000 ve 2018 posta kodlarında hızlı anahtar teslimi",
        "Her ziyarette HD Yaka Kamerası kaydı",
        "Biyoloji eğitimi almış uzman bakım",
        "Çiçek sulama ve posta toplama hizmeti dahil"
      ]
    },
    "image": "/images/cat_security.png",
    "geo": {
      "latitude": 51.21,
      "longitude": 4.395
    },
    "keywords": {
      "nl": [
        "kattenoppas Antwerpen Zuid",
        "kattenoppas 2000 Antwerpen",
        "kattenoppas Het Eilandje",
        "kattenoppas Zurenborg"
      ],
      "en": [
        "cat sitter Antwerp South",
        "pet sitting 2018 Antwerp",
        "cat care Eilandje Antwerp"
      ],
      "fr": [
        "garde de chat Anvers Sud",
        "cat sitter 2000 Anvers"
      ],
      "tr": [
        "Anvers Güney kedi bakıcısı",
        "Anvers merkez kedi bakımı"
      ]
    }
  },
  {
    "slug": "berchem",
    "postalCode": "2600",
    "name": {
      "nl": "Berchem",
      "en": "Berchem",
      "fr": "Berchem",
      "tr": "Berchem"
    },
    "title": {
      "nl": "Betrouwbare Kattenoppas aan Huis in Berchem (2600)",
      "en": "Reliable In-Home Cat Sitting in Berchem (2600)",
      "fr": "Garde de Chat de Confiance à Domicile à Berchem (2600)",
      "tr": "Berchem Bölgesinde Güvenilir Evde Kedi Bakıcısı (2600)"
    },
    "subtitle": {
      "nl": "Dagelijkse verzorging, speelsessies en medische controle voor katten in Berchem.",
      "en": "Daily care, play sessions, and medical monitoring for cats in Berchem.",
      "fr": "Soins quotidiens, sessions de jeu et suivi médical pour chats à Berchem.",
      "tr": "Berchem'deki kediler için günlük bakım, oyun saatleri ve medikal takip."
    },
    "description": {
      "nl": "Bent u op zoek naar een ervaren kattenoppas in Berchem (postcode 2600)? Katten verzorgt uw kat in zijn vertrouwde omgeving. Onze bezoeken omvatten voeding, vers water, kattenbak reiniging, borstelen en HD Bodycam rapportage.",
      "en": "Searching for an experienced cat sitter in Berchem (postal code 2600)? Katten looks after your feline in their familiar home. Our visits include feeding, fresh water, litter cleaning, grooming, and HD Bodycam reports.",
      "fr": "Vous cherchez un garde de chat expérimenté à Berchem (code postal 2600)? Katten s'occupe de votre chat dans son environnement habituel. Nos visites comprennent repas, eau fraîche, litière et vidéo HD.",
      "tr": "Berchem bölgesinde (posta kodu 2600) deneyimli bir kedi bakıcısı mı arıyorsunuz? Katten kedinize kendi evinde bakar. Ziyaretlerimizde mama, taze su, kum temizliği ve HD Bodycam kaydı yer alır."
    },
    "highlights": {
      "nl": [
        "Lokaal actief in Berchem en Pulhof",
        "Medische verzorging en insuline toedienen",
        "Geen reiskosten binnen 2600",
        "HD Bodycam videobewijs"
      ],
      "en": [
        "Locally active in Berchem and Pulhof",
        "Medical care and insulin administration",
        "No travel fees within 2600",
        "HD Bodycam video proof"
      ],
      "fr": [
        "Service local à Berchem et Pulhof",
        "Soins médicaux et insuline",
        "Sans frais de déplacement à 2600",
        "Preuve vidéo Bodycam"
      ],
      "tr": [
        "Berchem ve Pulhof bölgesinde lokal hizmet",
        "İlaç ve insülin uygulaması uzmanlığı",
        "2600 bölgesinde ek yol ücreti yok",
        "HD Yaka kamerası kaydı"
      ]
    },
    "image": "/images/cat_health.png",
    "geo": {
      "latitude": 51.192,
      "longitude": 4.432
    },
    "keywords": {
      "nl": [
        "kattenoppas Berchem",
        "kattenoppas 2600",
        "oppas aan huis Berchem Antwerpen"
      ],
      "en": [
        "cat sitter Berchem Antwerp",
        "pet sitting Berchem 2600"
      ],
      "fr": [
        "garde de chat Berchem Anvers"
      ],
      "tr": [
        "Berchem kedi bakıcısı",
        "Anvers Berchem kedi bakımı"
      ]
    }
  },
  {
    "slug": "deurne",
    "postalCode": "2100",
    "name": {
      "nl": "Deurne",
      "en": "Deurne",
      "fr": "Deurne",
      "tr": "Deurne"
    },
    "title": {
      "nl": "Professionele Kattenoppas aan Huis in Deurne (2100)",
      "en": "Professional In-Home Cat Sitter in Deurne (2100)",
      "fr": "Garde de Chat Professionnelle à Domicile à Deurne (2100)",
      "tr": "Deurne Bölgesinde Profesyonel Evde Kedi Bakıcısı (2100)"
    },
    "subtitle": {
      "nl": "Zorgeloos op reis met onze deskundige kattenzorg in Deurne Noord & Zuid.",
      "en": "Travel worry-free with our expert cat care in Deurne North & South.",
      "fr": "Voyagez l'esprit tranquille grâce à nos soins félins à Deurne.",
      "tr": "Deurne Kuzey ve Güney bölgelerinde kafa rahatlığı sağlayan kedi bakımı."
    },
    "description": {
      "nl": "Woont u in Deurne (postcode 2100)? Laat uw kat niet naar een pension gaan, maar kies voor de biologische kattenoppas aan huis van Katten. Wij komen 1 of 2 keer per dag langs voor liefdevolle verzorging en woningbeheer.",
      "en": "Living in Deurne (postal code 2100)? Skip the cattery and choose Katten’s biologist-led in-home sitting. We visit 1 or 2 times daily for loving care and home maintenance.",
      "fr": "Vous résidez à Deurne (code postal 2100)? Choisissez la garde à domicile de Katten. Nous intervenons 1 ou 2 fois par jour pour des soins attentionnés.",
      "tr": "Deurne bölgesinde (posta kodu 2100) mi yaşıyorsunuz? Kedinizi otele bırakmak yerine Katten evde bakım hizmetini seçin. Günde 1 veya 2 kez ziyaret ile sevgi dolu bakım sunuyoruz."
    },
    "highlights": {
      "nl": [
        "Volledige dekking in Deurne Noord & Zuid",
        "Bodycam videoupdates bij elk bezoek",
        "Inclusief brievenbus en plantenservice",
        "Vaste scherpe tarieven"
      ],
      "en": [
        "Full coverage in Deurne North & South",
        "Bodycam video updates every visit",
        "Includes mail and plant watering service",
        "Fixed transparent rates"
      ],
      "fr": [
        "Couverture complète Deurne Nord & Sud",
        "Vidéos Bodycam à chaque visite",
        "Service courrier et plantes inclus",
        "Tarifs transparents"
      ],
      "tr": [
        "Deurne Kuzey ve Güney tüm sokaklarda hizmet",
        "Her ziyarette Bodycam video güncellemesi",
        "Posta ve çiçek sulama dahil",
        "Şeffaf sabit paket fiyatları"
      ]
    },
    "image": "/images/cat_playing.png",
    "geo": {
      "latitude": 51.22,
      "longitude": 4.46
    },
    "keywords": {
      "nl": [
        "kattenoppas Deurne",
        "kattenoppas 2100 Deurne",
        "thuisoppas kat Deurne Antwerpen"
      ],
      "en": [
        "cat sitter Deurne Antwerp",
        "pet sitting 2100 Deurne"
      ],
      "fr": [
        "garde de chat Deurne Anvers"
      ],
      "tr": [
        "Deurne kedi bakıcısı",
        "Anvers Deurne kedi bakımı"
      ]
    }
  },
  {
    "slug": "merksem",
    "postalCode": "2170",
    "name": {
      "nl": "Merksem",
      "en": "Merksem",
      "fr": "Merksem",
      "tr": "Merksem"
    },
    "title": {
      "nl": "Kattenoppas aan Huis in Merksem (2170)",
      "en": "In-Home Cat Sitter in Merksem (2170)",
      "fr": "Garde de Chat à Domicile à Merksem (2170)",
      "tr": "Merksem Bölgesinde Evde Kedi Bakıcısı (2170)"
    },
    "subtitle": {
      "nl": "Liefdevolle en professionele verzorging voor uw kat in Merksem.",
      "en": "Loving and professional care for your cat in Merksem.",
      "fr": "Soins attentionnés et professionnels pour votre chat à Merksem.",
      "tr": "Merksem'deki kediniz için sevgi dolu ve profesyonel evde bakım."
    },
    "description": {
      "nl": "In Merksem (postcode 2170) staat Katten voor u klaar. Wij bieden persoonlijke kattenoppas aan huis met biologische deskundigheid. Uw kat blijft ontspannen thuis en u krijgt dagelijks een HD Bodycam video toegestuurd.",
      "en": "In Merksem (postal code 2170), Katten is your trusted choice. We offer personalized in-home cat care grounded in biological science. Your cat stays relaxed at home while you get daily HD Bodycam videos.",
      "fr": "À Merksem (code postal 2170), Katten est votre partenaire de confiance. Votre chat reste serein chez vous et vous recevez des vidéos HD quotidiennes.",
      "tr": "Merksem (posta kodu 2170) bölgesinde Katten yanınızda. Biyolog eğitimiyle kişiselleştirilmiş evde kedi bakımı sunuyoruz. Kediniz evinde kalırken siz her gün HD Bodycam videolarını izleyin."
    },
    "highlights": {
      "nl": [
        "Lokale dekking in heel Merksem",
        "Biologische gedragscontrole",
        "HD Bodycam garantie",
        "Sleuteloverdracht bij u thuis"
      ],
      "en": [
        "Local coverage across Merksem",
        "Biological behavioral monitoring",
        "HD Bodycam guarantee",
        "Key collection at your home"
      ],
      "fr": [
        "Service local à Merksem",
        "Suivi comportemental biologique",
        "Garantie Bodycam HD",
        "Remise des clés à domicile"
      ],
      "tr": [
        "Tüm Merksem'de lokal hizmet",
        "Biyolojik davranış ve stres takibi",
        "HD Bodycam garantisi",
        "Evinizde kapıdan anahtar teslimi"
      ]
    },
    "image": "/images/cat_feeding.png",
    "geo": {
      "latitude": 51.245,
      "longitude": 4.445
    },
    "keywords": {
      "nl": [
        "kattenoppas Merksem",
        "kattenoppas 2170",
        "huisdieroppas Merksem Antwerpen"
      ],
      "en": [
        "cat sitter Merksem Antwerp",
        "pet sitting Merksem 2170"
      ],
      "fr": [
        "garde de chat Merksem Anvers"
      ],
      "tr": [
        "Merksem kedi bakıcısı",
        "Anvers Merksem kedi bakımı"
      ]
    }
  },
  {
    "slug": "wilrijk",
    "postalCode": "2610",
    "name": {
      "nl": "Wilrijk",
      "en": "Wilrijk",
      "fr": "Wilrijk",
      "tr": "Wilrijk"
    },
    "title": {
      "nl": "Kattenoppas aan Huis in Wilrijk & Edegem (2610)",
      "en": "In-Home Cat Sitter in Wilrijk & Edegem (2610)",
      "fr": "Garde de Chat à Domicile à Wilrijk & Edegem (2610)",
      "tr": "Wilrijk ve Edegem Bölgesinde Evde Kedi Bakıcısı (2610)"
    },
    "subtitle": {
      "nl": "Medische en biologische kattenverzorging aan huis in Wilrijk.",
      "en": "Medical and biological in-home cat care in Wilrijk.",
      "fr": "Soins félins médicaux et biologiques à domicile à Wilrijk.",
      "tr": "Wilrijk bölgesinde medikal ve biyolojik evde kedi bakımı."
    },
    "description": {
      "nl": "Woont u in Wilrijk (postcode 2610) of nabij Edegem? Katten verzorgt uw huisdier met de hoogste precisie. Van insuline toedienen tot gezellige speelsessies, wij zorgen ervoor dat uw kat niets tekortkomt.",
      "en": "Living in Wilrijk (postal code 2610) or near Edegem? Katten cares for your pet with top precision. From insulin delivery to play sessions, we ensure your cat lacks nothing.",
      "fr": "Vous résidez à Wilrijk (code postal 2610) ou près d'Edegem? Katten s'occupe de votre animal avec précision. De l'insuline aux jeux, votre chat ne manquera de rien.",
      "tr": "Wilrijk (posta kodu 2610) veya Edegem sınırında mı yaşıyorsunuz? Katten evcil hayvanınıza hassasiyetle bakar. İnsülin uygulamasından oyun saatlerine kadar her şey eksiksiz yapılır."
    },
    "highlights": {
      "nl": [
        "Snel ter plaatse in Wilrijk & Edegem",
        "Ervaring met medicatie & spuitjes",
        "Inclusief planten en post service",
        "HD Bodycam rapportage"
      ],
      "en": [
        "Prompt visits in Wilrijk & Edegem",
        "Medication & injection expertise",
        "Includes plant & mail service",
        "HD Bodycam reporting"
      ],
      "fr": [
        "Interventions rapides à Wilrijk & Edegem",
        "Expérience médicaments & piqûres",
        "Service plantes et courrier inclus",
        "Rapportage Bodycam HD"
      ],
      "tr": [
        "Wilrijk ve Edegem'de hızlı ziyaret",
        "İlaç ve insülin iğnesi tecrübesi",
        "Çiçek sulama ve posta hizmeti dahil",
        "HD Bodycam raporlaması"
      ]
    },
    "image": "/images/cat_meds.png",
    "geo": {
      "latitude": 51.17,
      "longitude": 4.39
    },
    "keywords": {
      "nl": [
        "kattenoppas Wilrijk",
        "kattenoppas 2610",
        "kattenoppas Edegem",
        "medische kattenoppas Wilrijk"
      ],
      "en": [
        "cat sitter Wilrijk Antwerp",
        "pet sitter Wilrijk 2610"
      ],
      "fr": [
        "garde de chat Wilrijk Anvers"
      ],
      "tr": [
        "Wilrijk kedi bakıcısı",
        "Anvers Wilrijk kedi bakımı"
      ]
    }
  }
];

export function getDistrictBySlug(slug: string): DistrictInfo | undefined {
  return districts.find((d) => d.slug === slug || (d as any).slugAlias === slug);
}

export function getAllDistricts(): DistrictInfo[] {
  return districts;
}
