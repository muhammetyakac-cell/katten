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
    "slug": "kattenoppas-aan-huis",
    "postalCode": "Antwerpen & Omstreken",
    "name": {
      "nl": "Kattenoppas aan Huis",
      "en": "In-Home Cat Sitting",
      "fr": "Garde de Chat à Domicile",
      "tr": "Evde Kedi Bakımı"
    },
    "title": {
      "nl": "Kattenoppas aan Huis in Antwerpen | Stressvrij voor uw Kat",
      "en": "In-Home Cat Sitting in Antwerp | Stress-Free Cat Care",
      "fr": "Garde de Chat à Domicile à Anvers | Sans Stress",
      "tr": "Antwerp'te Evde Kedi Bakımı | Kediniz İçin Stres Yok"
    },
    "subtitle": {
      "nl": "De beste zorg in de eigen, veilige omgeving van uw kat.",
      "en": "The best care in your cat's own safe environment.",
      "fr": "Les meilleurs soins dans l'environnement sûr de votre chat.",
      "tr": "Kedinizin kendi güvenli ortamında en iyi bakım."
    },
    "description": {
      "nl": "Waarom uw kat naar een onbekende plek brengen? Met onze kattenoppas aan huis service blijft uw kat veilig en comfortabel in haar eigen territorium. Onze gediplomeerde biologen komen dagelijks langs voor voeding, knuffels, kattenbakreiniging en gezondheidscontroles. Met 100% HD Bodycam garantie voor uw absolute gemoedsrust.",
      "en": "Why take your cat to an unfamiliar place? With our in-home cat sitting service, your cat stays safe and comfortable in their own territory. Our qualified biologists visit daily for feeding, cuddles, litter box cleaning, and health checks. With 100% HD Bodycam guarantee for your absolute peace of mind.",
      "fr": "Pourquoi emmener votre chat dans un endroit inconnu ? Avec notre service de garde à domicile, votre chat reste en sécurité et à l'aise sur son propre territoire. Nos biologistes qualifiés passent tous les jours pour les repas, les câlins et le nettoyage. Avec garantie Bodycam HD 100%.",
      "tr": "Kedinizin düzenini neden bozasınız? Evde kedi bakımı hizmetimizle, kediniz kendi bölgesinde güvende ve rahat kalır. Diplomalı biyologlarımız mama, şefkat, kum temizliği ve sağlık kontrolü için her gün evinize gelir. %100 HD Yaka Kamerası güvencesiyle içiniz rahat olsun."
    },
    "highlights": {
      "nl": ["Geen reistress voor uw kat", "Dagelijkse updates via dashboard", "Professionele zorg door biologen"],
      "en": ["No travel stress for your cat", "Daily updates via dashboard", "Professional care by biologists"],
      "fr": ["Pas de stress de voyage", "Mises à jour quotidiennes", "Soins professionnels par des biologistes"],
      "tr": ["Kediniz için seyahat stresi yok", "Panel üzerinden günlük rapor", "Biyologlardan profesyonel bakım"]
    },
    "image": "/images/cat_playing.png",
    "geo": { "latitude": 51.2194, "longitude": 4.4025 },
    "keywords": {
      "nl": ["kattenoppas aan huis", "kattensitter antwerpen", "kattenverzorging thuis", "huisbezoek kat"],
      "en": ["in-home cat sitting", "cat sitter antwerp", "at home cat care"],
      "fr": ["garde de chat à domicile", "cat sitter anvers"],
      "tr": ["evde kedi bakımı", "antwerp kedi bakıcısı", "evde kedi bakıcısı"]
    }
  },
  {
    "slug": "kattenpension-alternatief",
    "postalCode": "Antwerpen & Omstreken",
    "name": {
      "nl": "Alternatief voor Kattenpension",
      "en": "Cat Boarding Alternative",
      "fr": "Alternative Pension pour Chats",
      "tr": "Kedi Oteli Alternatifi"
    },
    "title": {
      "nl": "Het Beste Alternatief voor een Kattenpension | KattenHond",
      "en": "The Best Cat Boarding Alternative in Antwerp | KattenHond",
      "fr": "La Meilleure Alternative à la Pension pour Chats | KattenHond",
      "tr": "Antwerp'te Kedi Oteline En İyi Alternatif | Evde Bakım"
    },
    "subtitle": {
      "nl": "Bespaar uw kat de stress van een kooi en vreemde geuren.",
      "en": "Save your cat the stress of a cage and strange smells.",
      "fr": "Épargnez à votre chat le stress d'une cage.",
      "tr": "Kedizi kafes ve yabancı koku stresinden kurtarın."
    },
    "description": {
      "nl": "Een kattenpension kan erg stressvol zijn voor een kat. Vreemde katten, nieuwe geuren en opsluiting veroorzaken vaak angst. Als hét alternatief voor een kattenpension in Antwerpen, biedt KattenHond verzorging aan huis. Uw kat blijft koning(in) in eigen huis terwijl wij langskomen voor alle zorg, liefde en aandacht.",
      "en": "A cattery or cat boarding facility can be highly stressful. Strange cats, new smells, and confinement often cause anxiety. As the premier cat boarding alternative in Antwerp, KattenHond provides at-home care. Your cat remains royalty in their own home while we visit to provide all necessary care, love, and attention.",
      "fr": "Une pension pour chats peut être très stressante. Comme meilleure alternative à Anvers, KattenHond propose des soins à domicile. Votre chat reste roi dans sa propre maison pendant que nous passons pour lui donner tous les soins et l'amour nécessaires.",
      "tr": "Kedi oteli ve pansiyonlar kediler için çok stresli olabilir. Yabancı kediler, kafes ortamı ve yeni kokular endişe yaratır. Antwerp'teki en iyi kedi oteli alternatifi olarak, KattenHond evde bakım sunar. Kediniz kendi evinin krallığında kalırken, biz gelip tüm ihtiyacını ve sevgisini karşılarız."
    },
    "highlights": {
      "nl": ["Voorkomt stress en ziektes", "Geen dure pensionkosten per nacht", "100% gepersonaliseerde aandacht"],
      "en": ["Prevents stress and diseases", "No expensive nightly boarding fees", "100% personalized attention"],
      "fr": ["Prévient le stress et les maladies", "Pas de frais de pension de nuit", "Attention 100% personnalisée"],
      "tr": ["Stres ve hastalıkları önler", "Gecelik pahalı otel ücreti yok", "%100 kişiselleştirilmiş ilgi"]
    },
    "image": "/images/cat_feeding.png",
    "geo": { "latitude": 51.2194, "longitude": 4.4025 },
    "keywords": {
      "nl": ["kattenpension alternatief", "kattenhotel antwerpen", "kattenpension antwerpen", "kattenoppas in plaats van pension"],
      "en": ["cat boarding alternative", "cat hotel antwerp", "cattery alternative"],
      "fr": ["alternative pension chat", "hotel chat anvers"],
      "tr": ["kedi oteli alternatifi", "kedi pansiyonu alternatifi", "antwerp kedi oteli"]
    }
  },
  {
    "slug": "professionele-kattensitter",
    "postalCode": "Antwerpen & Omstreken",
    "name": {
      "nl": "Professionele Kattensitter",
      "en": "Professional Cat Sitter",
      "fr": "Cat Sitter Professionnel",
      "tr": "Profesyonel Kedi Bakıcısı"
    },
    "title": {
      "nl": "Professionele Kattensitter in Antwerpen | Gediplomeerd Bioloog",
      "en": "Professional Cat Sitter in Antwerp | Qualified Biologist",
      "fr": "Cat Sitter Professionnel à Anvers | Biologiste",
      "tr": "Antwerp Profesyonel Kedi Bakıcısı | Diplomalı Biyolog"
    },
    "subtitle": {
      "nl": "Kies voor zekerheid en expertise voor uw geliefde huisdier.",
      "en": "Choose certainty and expertise for your beloved pet.",
      "fr": "Choisissez la certitude et l'expertise pour votre animal.",
      "tr": "Sevgili evcil hayvanınız için uzmanlığı ve güveni seçin."
    },
    "description": {
      "nl": "Laat de zorg van uw kat niet aan het toeval over. Als professionele kattensitter in Antwerpen combineert KattenHond wetenschappelijke kennis (gediplomeerde biologen) met een enorme passie voor dieren. Wij herkennen subtiele signalen van pijn of stress en kunnen indien nodig medisch ingrijpen of medicatie toedienen.",
      "en": "Don't leave your cat's care to chance. As a professional cat sitter in Antwerp, KattenHond combines scientific knowledge (qualified biologists) with a immense passion for animals. We recognize subtle signs of pain or stress and can intervene medically or administer medication if needed.",
      "fr": "Ne confiez pas la garde de votre chat au hasard. En tant que cat sitter professionnel à Anvers, KattenHond combine connaissances scientifiques (biologistes) et passion. Nous reconnaissons les signes subtils de douleur ou de stress.",
      "tr": "Kedinizin bakımını şansa bırakmayın. Antwerp'te profesyonel kedi bakıcısı olarak KattenHond, bilimsel bilgi (diplomalı biyologlar) ile hayvan sevgisini harmanlar. İnce stres veya ağrı belirtilerini tanır, gerekirse ilaç veya tıbbi müdahale uygulayabiliriz."
    },
    "highlights": {
      "nl": ["Medische expertise (Bioloog)", "Ervaring met angstige katten", "Medicatie toediening inbegrepen"],
      "en": ["Medical expertise (Biologist)", "Experience with anxious cats", "Medication administration included"],
      "fr": ["Expertise médicale", "Expérience chats anxieux", "Administration de médicaments"],
      "tr": ["Tıbbi uzmanlık (Biyolog)", "Korkak kedilerle tecrübe", "İlaç uygulaması dahil"]
    },
    "image": "/images/cat_health.png",
    "geo": { "latitude": 51.2194, "longitude": 4.4025 },
    "keywords": {
      "nl": ["professionele kattensitter", "gediplomeerde kattenoppas", "medische kattenoppas", "kattensitter gezocht"],
      "en": ["professional cat sitter", "medical cat sitter", "qualified cat sitter"],
      "fr": ["cat sitter professionnel", "garde chat médical"],
      "tr": ["profesyonel kedi bakıcısı", "uzman kedi bakıcısı", "tıbbi kedi bakımı"]
    }
  },

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
      "nl": "Persoonlijke verzorging, voeding en controle bij u thuis in Antwerpen door KattenHond.",
      "en": "Personalized care, feeding, and wellness checks at your home in Antwerp by KattenHond.",
      "fr": "Soins personnalisés, repas et suivi à votre domicile à Anvers par KattenHond.",
      "tr": "KattenHond ile Anvers'te evinizde kişiselleştirilmiş kedi bakımı ve kontrolü."
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
        "oppas aan huis kat",
        "kattenhond store"
      ],
      "en": [
        "daily cat sitter Antwerp",
        "in home cat visit Antwerp",
        "kattenhond store"
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
      "tr": "Beslenme ve Taze Su"
    },
    "title": {
      "nl": "Professionele Kattenvoeding en Dieetverzorging in Antwerpen",
      "en": "Professional Cat Feeding and Dietary Care in Antwerp",
      "fr": "Alimentation Féline et Soins Diététiques Professionnels à Anvers",
      "tr": "Anvers'te Profesyonel Kedi Beslenmesi ve Diyet Bakımı"
    },
    "subtitle": {
      "nl": "Nauwkeurige opvolging van uw voedingsschema en speciale diëten.",
      "en": "Strict adherence to your cat feeding routine and special medical diets.",
      "fr": "Respect rigoureux du régime alimentaire et des besoins spécifiques de votre chat.",
      "tr": "Kedinizin beslenme rutinine ve özel diyetine harfiyen uyum."
    },
    "description": {
      "nl": "Wij respecteren het vertrouwde voedingspatroon van uw kat tot op de gram. Van speciaal BARF-dieet en nierdieet tot natvoer en automatische voederbakken. Wij zorgen voor kraakheldere, gereinigde voer- en drinkbakken en altijd fris water.",
      "en": "We respect your cat routine to the gram. From special BARF diets and renal food to wet pouches and automated feeders. We ensure spotless food dishes and fresh water every single visit.",
      "fr": "Nous respectons les habitudes de votre chat avec la plus grande rigueur. Qu'il s'agisse de nourriture sèche, pâtée ou régimes spécifiques, tout est servi dans des écuelles impeccablement propres.",
      "tr": "Kedinizin alışkın olduğu beslenme düzenini gramına kadar uyguluyoruz. Kuru mama, yaş mama, veteriner diyetleri ve otomatik mama kapları dahil olmak üzere kapları her gün yıkayıp taze su sağlıyoruz."
    },
    "highlights": {
      "nl": [
        "Afwegen volgens strikte instructies",
        "Grondig reinigen van voer- en waterbakken",
        "Opvolging van eetlust en drinkgedrag",
        "Geschikt voor medische diëten"
      ],
      "en": [
        "Weighed strictly per your instructions",
        "Daily sanitization of food & water bowls",
        "Appetite and hydration monitoring",
        "Perfect for medical prescription diets"
      ],
      "fr": [
        "Pesage précis selon vos consignes",
        "Nettoyage systématique des gamelles",
        "Surveillance de l'appétit et hydratation",
        "Idéal pour régimes vétérinaires"
      ],
      "tr": [
        "Talimatlarınıza göre hassas tartım",
        "Mama ve su kaplarının günlük dezenfeksiyonu",
        "İştah ve su tüketimi takibi",
        "Özel veteriner diyetlerine uygun"
      ]
    },
    "image": "/images/cat_feeding.png",
    "geo": {
      "latitude": 51.2194,
      "longitude": 4.4025
    },
    "keywords": {
      "nl": [
        "katten voeren vakantie Antwerpen",
        "kattenoppas voeding Antwerpen",
        "dieetvoer kat oppas"
      ],
      "en": [
        "cat feeding service Antwerp",
        "cat dietary pet sitter"
      ],
      "fr": [
        "nourrir chat vacances Anvers",
        "garde chat repas Anvers"
      ],
      "tr": [
        "tatilde kedi besleme Anvers",
        "kedi mama bakımı"
      ]
    }
  },
  {
    "slug": "medication",
    "postalCode": "Groot-Antwerpen",
    "name": {
      "nl": "Medicatie Toediening",
      "en": "Medication Administration",
      "fr": "Administration de Médicaments",
      "tr": "İlaç ve Tedavi Uygulaması"
    },
    "title": {
      "nl": "Deskundige Medicatie en Insuline Toediening voor Katten in Antwerpen",
      "en": "Expert Cat Medication and Insulin Injections in Antwerp",
      "fr": "Administration de Médicaments et Injections Féline à Anvers",
      "tr": "Anvers'te Kediler İçin Uzman İlaç ve İnsülin Uygulaması"
    },
    "subtitle": {
      "nl": "Ervaren toediening van pillen, drankjes, oogdruppels en insuline-injecties.",
      "en": "Experienced handling of pills, liquids, eye drops, and diabetes insulin injections.",
      "fr": "Garde spécialisée avec administration de pilules, sirops, gouttes et insuline.",
      "tr": "Hap, şurup, göz damlası ve diyabetik insülin iğnesi uygulamasında biyolog uzmanlığı."
    },
    "description": {
      "nl": "Heeft uw kat dagelijkse medicatie of insuline nodig voor diabetes? Onder toezicht van onze gediplomeerd bioloog dienen wij medicatie toe zonder stress of dwang. We hebben jarenlange ervaring met chronisch zieke en oudere katten.",
      "en": "Does your cat require daily prescription pills or insulin injections? Led by our biologist founder, we administer medication gently and accurately, with zero force or trauma.",
      "fr": "Votre chat a-t-il besoin d'un traitement quotidien ou d'injections d'insuline ? Sous la direction de notre biologiste, nous administrons les soins avec douceur et professionnalisme.",
      "tr": "Kedinizin kronik bir rahatsızlığı, tansiyon ilacı veya günlük insülin iğnesi mi var? Biyolog kurucumuz liderliğinde, kedinizi strese sokmadan nazikçe ilaçlarını veriyoruz."
    },
    "highlights": {
      "nl": [
        "Ervaring met insuline spuitjes & diabetes",
        "Stressvrije toediening van pillen & pasta",
        "Oog- en oordruppels behandeling",
        "Direct contact met uw dierenarts bij twijfel"
      ],
      "en": [
        "Experienced with insulin syringes & diabetes",
        "Stress-free pill & paste administration",
        "Eye and ear drop treatments",
        "Direct vet contact in case of concern"
      ],
      "fr": [
        "Expérience injections insuline et diabète",
        "Prise de comprimés sans stress",
        "Soins des yeux et oreilles",
        "Liaison directe avec votre vétérinaire"
      ],
      "tr": [
        "İnsülin ve diyabet iğnesi tecrübesi",
        "Stressiz hap ve macun yedirme",
        "Göz ve kulak damlası bakımı",
        "Şüpheli durumlarda veterinerinizle doğrudan irtibat"
      ]
    },
    "image": "/images/cat_meds.png",
    "geo": {
      "latitude": 51.2194,
      "longitude": 4.4025
    },
    "keywords": {
      "nl": [
        "kat medicatie geven oppas Antwerpen",
        "insuline spuiten kat oppas",
        "zieke kat verzorging vakantie"
      ],
      "en": [
        "cat medication pet sitting Antwerp",
        "cat insulin injection sitter"
      ],
      "fr": [
        "donner medicament chat Anvers",
        "injection insuline chat garde"
      ],
      "tr": [
        "kediye ilaç verme bakıcı Anvers",
        "kedi insülin iğnesi bakıcı"
      ]
    }
  },
  {
    "slug": "bodycam",
    "postalCode": "Groot-Antwerpen",
    "name": {
      "nl": "100% HD Bodycam Garantie",
      "en": "100% HD Bodycam Guarantee",
      "fr": "Garantie Bodycam 100% HD",
      "tr": "100% HD Yaka Kamerası Garantisi"
    },
    "title": {
      "nl": "100% Transparante Kattenoppas met Bodycam Opnames in Antwerpen",
      "en": "100% Transparent Cat Sitting with Bodycam Video in Antwerp",
      "fr": "Garde de Chat 100% Transparente avec Caméra Corporelle à Anvers",
      "tr": "Anvers'te Yaka Kamerası Kayıtlı %100 Şeffaf Kedi Bakıcılığı"
    },
    "subtitle": {
      "nl": "Bekijk precies wat er gebeurt tijdens elk bezoek via HD videobeelden.",
      "en": "Watch exactly what happens during every visit through secure HD video.",
      "fr": "Visionnez chaque visite en toute sécurité grâce à nos enregistrements HD.",
      "tr": "Her ziyarette neler yapıldığını güvenli HD video kayıtlarıyla izleyin."
    },
    "description": {
      "nl": "KattenHond is de enige oppasservice in België die elk huisbezoek standaard opneemt met een discrete HD bodycam. U ziet hoe uw kat eet, speelt en vertroeteld wordt. Dit biedt 100% gemoedsrust en transparantie over uw sleutels en eigendommen.",
      "en": "KattenHond is the only pet sitting service in Belgium recording every home visit with an HD bodycam. You get total transparency over your home security and see your cat thriving.",
      "fr": "KattenHond est le seul service en Belgique à enregistrer chaque visite avec une caméra corporelle HD. Sérénité absolue pour vos clés, votre logement et votre félin.",
      "tr": "KattenHond, Belçika'da her ev ziyaretini yüksek çözünürlüklü yaka kamerasıyla kaydeden tek profesyonel servistir. Evinizin güvenliğini ve kedinizin neşesini doğrudan görün."
    },
    "highlights": {
      "nl": [
        "Volledige registratie van aankomst tot vertrek",
        "Veilige cloudopslag via uw account",
        "100% respect voor uw privacy in huis",
        "Ideaal bewijs voor sleutelbeveiliging"
      ],
      "en": [
        "Full recording from entry to departure",
        "Secure private cloud storage",
        "Strict privacy protocol respected",
        "Ultimate peace of mind for keys & home"
      ],
      "fr": [
        "Enregistrement complet de l'entrée à la sortie",
        "Stockage cloud sécurisé et privé",
        "Respect total de la vie privée",
        "Confiance totale pour vos clés"
      ],
      "tr": [
        "Girişten çıkışa kadar eksiksiz kayıt",
        "Güvenli özel bulut depolama",
        "Ev mahremiyetinize %100 saygı",
        "Anahtar ve ev güvenliğinde tam rahatlık"
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
        "veilige kattenoppas aan huis",
        "transparante huisdierenzorg"
      ],
      "en": [
        "bodycam cat sitter Antwerp",
        "secure pet sitting verified"
      ],
      "fr": [
        "camera garde chat Anvers",
        "garde chat securisee"
      ],
      "tr": [
        "kameralı kedi bakıcısı Anvers",
        "güvenli evde kedi bakımı"
      ]
    }
  },
  {
    "slug": "health",
    "postalCode": "Groot-Antwerpen",
    "name": {
      "nl": "Gezondheidsmonitoring",
      "en": "Health & Wellness Checks",
      "fr": "Suivi de Santé & Bien-être",
      "tr": "Sağlık ve Refah Takibi"
    },
    "title": {
      "nl": "Deskundige Gezondheidscontrole door een Bioloog in Antwerpen",
      "en": "Expert Health & Wellness Monitoring by a Biologist in Antwerp",
      "fr": "Contrôle Sanitaire et Bien-Être Félin par un Biologiste à Anvers",
      "tr": "Anvers'te Biyolog Denetiminde Kedi Sağlık ve Refah Kontrolü"
    },
    "subtitle": {
      "nl": "Wetenschappelijke observatie van vacht, ogen, gedrag en stoelgang.",
      "en": "Scientific observation of coat, eyes, behavior, and digestive wellness.",
      "fr": "Observation attentive du pelage, des yeux, du comportement et du transit.",
      "tr": "Tüy, göz, davranış, kilo ve dışkı durumunun bilimsel gözlemi."
    },
    "description": {
      "nl": "Als bioloog herkent ons team vroege symptomen van stress, blaasproblemen, dehydratatie of lethargie voordat ze ernstig worden. Tijdens elk bezoek voeren we een systematische visuele inspectie uit en rapporteren we direct afwijkingen.",
      "en": "As trained biologists, our team identifies early signals of distress, urinary blockages, dehydration, or lethargy immediately. We perform systematic checks every visit.",
      "fr": "Formés en biologie animale, nous détectons immédiatement les premiers signes de stress, déshydratation ou infection urinaire. Surveillance minutieuse à chaque passage.",
      "tr": "Biyolog uzmanlığımız sayesinde kedilerde stres, idrar yolu tıkanıklığı, susuzluk veya halsizlik belirtilerini erkenden tespit ediyoruz. Her ziyarette detaylı kontrol yapıyoruz."
    },
    "highlights": {
      "nl": [
        "Controle van kattenbak op bloed/afwijkingen",
        "Inspectie van vacht, ogen, neus en oren",
        "Hydratatie- en eetlustcontrole",
        "Preventie van stressgerelateerde aandoeningen"
      ],
      "en": [
        "Litter inspection for urinary/digestive health",
        "Coat, eye, nose, and ear checks",
        "Hydration and vitality verification",
        "Stress prevention protocols"
      ],
      "fr": [
        "Inspection litière (reins, transit)",
        "Contrôle yeux, pelage et oreilles",
        "Vérification hydratation et vitalité",
        "Prévention active du stress"
      ],
      "tr": [
        "Kum kabında idrar/dışkı sağlık incelemesi",
        "Göz, kulak, burun ve tüy kontrolü",
        "Susuzluk ve canlılık testi",
        "Stres kaynaklı hastalıkların önlenmesi"
      ]
    },
    "image": "/images/cat_health.png",
    "geo": {
      "latitude": 51.2194,
      "longitude": 4.4025
    },
    "keywords": {
      "nl": [
        "gezondheidscontrole kat oppas",
        "kattenverzorging bioloog Antwerpen",
        "ziektepreventie kat vakantie"
      ],
      "en": [
        "cat health check pet sitter",
        "biologist cat care Antwerp"
      ],
      "fr": [
        "suivi veterinaire chat vacances",
        "sante feline Anvers"
      ],
      "tr": [
        "kedi sağlık kontrolü bakıcı",
        "biyolog kedi bakımı Anvers"
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
      "tr": "Kum Kabı Hijyeni"
    },
    "title": {
      "nl": "Grondige Kattenbak Schoonmaak en Geurpreventie in Antwerpen",
      "en": "Thorough Litter Box Cleaning & Odor Control in Antwerp",
      "fr": "Nettoyage Minutieux de la Litière et Gestion des Odeurs à Anvers",
      "tr": "Anvers'te Detaylı Kedi Kumu Temizliği ve Hijyen Bakımı"
    },
    "subtitle": {
      "nl": "Dagelijks scheppen, desinfecteren en vloer stofzuigen rondom de bak.",
      "en": "Daily scooping, periodic sanitization, and swept floors around litter areas.",
      "fr": "Nettoyage quotidien, désinfection et maintien d'un intérieur impeccable.",
      "tr": "Günlük eleme, koku önleme ve kum kabı etrafının süpürülmesi."
    },
    "description": {
      "nl": "Katten zijn uiterst schone dieren; een vuile kattenbak leidt snel tot onzindelijkheid of urinewegproblemen. Wij scheppen de bak dagelijks grondig leeg, vullen grit bij en stofzuigen rondslingerend grind voor een fris huis.",
      "en": "Cats demand pristine cleanliness. A soiled box leads to behavioral issues and infections. We scoop daily, top up litter, and sweep surrounding floors so your home stays immaculate.",
      "fr": "Une litière parfaitement propre est essentielle au bien-être de votre chat. Nous enlevons les déjections à chaque passage, renouvelons la litière et balayons le sol alentour.",
      "tr": "Kediler temizliğe son derece düşkündür; kirli bir kum kabı idrar yolu enfeksiyonlarına ve kum dışına yapmaya sebep olur. Kumu her gün temizliyor, takviye yapıyor ve etrafını süpürüyoruz."
    },
    "highlights": {
      "nl": [
        "Dagelijks uitscheppen en bijvullen",
        "Grondige desinfectie bij wekelijkse wissel",
        "Stofzuigen van uitloopkorrels",
        "Geen nare geurtjes in huis"
      ],
      "en": [
        "Daily scooping and fresh litter top-up",
        "Complete wash & disinfection available",
        "Vacuuming/sweeping tracked litter",
        "Guaranteed odor-free home"
      ],
      "fr": [
        "Nettoyage quotidien des déjections",
        "Désinfection périodique complète",
        "Aspiration des grains de litière",
        "Intérieur garanti sans odeur"
      ],
      "tr": [
        "Günlük eleme ve taze kum ekleme",
        "Gerektiğinde tam yıkama ve dezenfeksiyon",
        "Dışarı saçılan kumların süpürülmesi",
        "Kokusuz ve hijyenik yaşam alanı"
      ]
    },
    "image": "/images/cat_playing.png",
    "geo": {
      "latitude": 51.2194,
      "longitude": 4.4025
    },
    "keywords": {
      "nl": [
        "kattenbak schoonmaken vakantie",
        "kattenbak hygiene oppas Antwerpen"
      ],
      "en": [
        "litter box cleaning Antwerp",
        "cat litter maintenance sitter"
      ],
      "fr": [
        "nettoyage litiere chat vacances Anvers"
      ],
      "tr": [
        "kedi kumu temizleme bakıcı Anvers"
      ]
    }
  },
  {
    "slug": "playtime",
    "postalCode": "Groot-Antwerpen",
    "name": {
      "nl": "Spelen & Aandacht",
      "en": "Playtime & Affection",
      "fr": "Jeux & Câlins",
      "tr": "Oyun ve Şefkat Dolu İlgi"
    },
    "title": {
      "nl": "Mentale Stimulatie, Spelen en Knuffels voor Uw Kat in Antwerpen",
      "en": "Mental Stimulation, Play, and Cuddles for Your Cat in Antwerp",
      "fr": "Stimulation Mentale, Jeux et Câlins pour Chat à Anvers",
      "tr": "Anvers'te Kediler İçin Zihinsel Oyunlar, Egzersiz ve Şefkat"
    },
    "subtitle": {
      "nl": "Interactief jachtspel met hengels, lasertjes en ontspannen borstelsessies.",
      "en": "Interactive hunting games, wand toys, and relaxing brushing sessions.",
      "fr": "Jeux de chasse interactifs, plumes et séances de brossage relaxantes.",
      "tr": "Olta oyuncakları, lazer oyunları, tüy tarama ve sevgi dolu ilgi."
    },
    "description": {
      "nl": "Verveling is de grootste vijand van een binnenhuiskat tijdens uw afwezigheid. Wij besteden ruime tijd aan interactief spelen dat het natuurlijke jachtinstinct stimuleert, gevolgd door rustgevende aaisessies en borstelen.",
      "en": "Boredom causes anxiety for indoor cats. We dedicate quality time to active play mimicking natural predation instincts, followed by soothing petting and gentle grooming.",
      "fr": "L'ennui engendre du stress chez le chat d'intérieur. Nous prenons le temps de jouer avec votre compagnon pour stimuler son instinct naturel, suivi de moments câlins.",
      "tr": "Siz yokken ev kedilerinin en büyük sorunu can sıkıntısıdır. Kedinizin doğal avlanma içgüdülerini harekete geçiren oyunlar oynuyor, ardından tüy tarama ve sevgiyle ilgileniyoruz."
    },
    "highlights": {
      "nl": [
        "Interactieve hengels, balletjes & tunnels",
        "Vachtverzorging en zacht borstelen",
        "Aandacht op maat voor schuwe of actieve katten",
        "Foto's & filmpjes van de speelsessies"
      ],
      "en": [
        "Interactive feather wands & laser fun",
        "Coat brushing & gentle grooming",
        "Adapted pacing for shy or energetic cats",
        "Action photos & videos sent to you"
      ],
      "fr": [
        "Plumeaux, balles et tunnels interactifs",
        "Brossage doux du pelage",
        "Rythme adapté aux chats craintifs ou actifs",
        "Photos et vidéos des moments de jeu"
      ],
      "tr": [
        "Tüylü oltalar, tüneller ve zeka oyunları",
        "Tüy tarama ve masaj seansları",
        "Çekingen veya hareketli kedilere özel yaklaşım",
        "Oyun anından fotoğraf ve videolar"
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
        "kattenverzorging aan huis spelen"
      ],
      "en": [
        "cat playtime sitter Antwerp",
        "cat enrichment pet sitting"
      ],
      "fr": [
        "jeu calin chat vacances Anvers"
      ],
      "tr": [
        "kedi oyun bakıcısı Anvers",
        "kedi vakit geçirme"
      ]
    }
  },
  {
    "slug": "plants",
    "postalCode": "Groot-Antwerpen",
    "name": {
      "nl": "Plantenverzorging",
      "en": "Plant Watering Care",
      "fr": "Arrosage des Plantes",
      "tr": "Bitki ve Çiçek Bakımı"
    },
    "title": {
      "nl": "Gratis Plantenverzorging en Tuinbewatering tijdens Uw Vakantie",
      "en": "Complimentary Indoor Plant & Garden Watering during Vacation",
      "fr": "Arrosage Gratuit de Vos Plantes et Balcon pendant Vos Vacances",
      "tr": "Tatildeyken Ücretsiz Ev Bitkisi ve Çiçek Sulama Hizmeti"
    },
    "subtitle": {
      "nl": "Thuiskomen bij een blije kat én prachtig groene, gezonde kamerplanten.",
      "en": "Return home to a thriving cat and lush, beautifully hydrated house plants.",
      "fr": "Retrouvez un chat épanoui et des plantes d'intérieur fraîches et rayonnantes.",
      "tr": "Tatil dönüşü hem mutlu bir kediye hem de capcanlı yeşil bitkilere kavuşun."
    },
    "description": {
      "nl": "Als gratis aanvullende service geven wij uw kamerplanten en balkonbloemen water volgens uw instructies. Zo hoeft u geen aparte buren in te schakelen en blijft uw groene oase perfect behouden.",
      "en": "As a free courtesy, we water your indoor greenery and patio flowers according to your instructions. No need to ask separate neighbors for keys.",
      "fr": "En service gratuit inclus, nous arrosons vos plantes d'intérieur et de balcon selon vos indications. Votre maison reste pleine de vie.",
      "tr": "Ekstra hiçbir ücret talep etmeden, evdeki ve balkondaki çiçeklerinizi talimatlarınıza göre suluyoruz. Komşulara anahtar bırakma zahmetine son."
    },
    "highlights": {
      "nl": [
        "100% Gratis inbegrepen bij oppasbezoeken",
        "Planten water geven volgens schema",
        "Verwijderen van dorre bladeren",
        "Zowel binnenplanten als balkonbloemen"
      ],
      "en": [
        "100% Free with all sitting packages",
        "Watered precisely per plant schedule",
        "Dry leaf removal and care",
        "Covers indoor pots and balcony boxes"
      ],
      "fr": [
        "100% Inclus gratuitement avec vos visites",
        "Arrosage selon vos fréquences",
        "Entretien des feuilles mortes",
        "Plantes d'intérieur et jardinières"
      ],
      "tr": [
        "Tüm bakım paketlerimizde %100 Ücretsiz",
        "Bitkilerin ihtiyacına göre sulama",
        "Kuruyan yaprakların temizlenmesi",
        "İç mekan saksıları ve balkon çiçekleri"
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
        "plantenverzorging oppas"
      ],
      "en": [
        "plant watering holiday Antwerp",
        "house sitting plants"
      ],
      "fr": [
        "arroser plantes vacances Anvers"
      ],
      "tr": [
        "tatilde çiçek sulama Anvers",
        "ev bitkisi bakımı"
      ]
    }
  },
  {
    "slug": "mail",
    "postalCode": "Groot-Antwerpen",
    "name": {
      "nl": "Post & Woningcontrole",
      "en": "Mail & Home Security Check",
      "fr": "Courrier & Surveillance Domicile",
      "tr": "Posta Toplama ve Ev Güvenliği"
    },
    "title": {
      "nl": "Postbus Legen, Gordijnen Openen en Bewoonde Indruk van Uw Woning",
      "en": "Mail Collection, Blinds Rotation & Inhabited Home Security Appearance",
      "fr": "Relève du Courrier, Volets et Sécurisation Visuelle de Votre Domicile",
      "tr": "Posta Toplama, Perdeleri Havalandırma ve Ev Güvenliği Hizmeti"
    },
    "subtitle": {
      "nl": "Inbraakpreventie: uw huis ziet er bewoond en levendig uit tijdens uw reis.",
      "en": "Burglary prevention: your home maintains an active, occupied appearance.",
      "fr": "Prévention cambriolage : votre maison garde une apparence occupée et vivante.",
      "tr": "Hırsızlık önleme: siz tatildeyken eviniz canlı ve dolu bir görünüm kazanır."
    },
    "description": {
      "nl": "Een overvolle brievenbus trekt inbrekers aan. Wij legen uw postbus netjes, zetten vuilnisbakken buiten indien gewenst en variëren met verlichting of gordijnen voor optimale veiligheid van uw pand in Antwerpen.",
      "en": "An overflowing mailbox signals an empty house. We collect your mail, take bins in/out on collection days, and adjust curtains/lights for maximum security.",
      "fr": "Une boîte aux lettres pleine signale une absence prolongée. Nous relevons votre courrier, sortons les poubelles et actionnons les lumières/rideaux.",
      "tr": "Dolu bir posta kutusu evde kimsenin olmadığının en büyük işaretidir. Postalarınızı topluyor, çöp kutularını çıkarıyor ve perdeleri açıp kapatarak evinizin güvenliğini sağlıyoruz."
    },
    "highlights": {
      "nl": [
        "Gratis inbegrepen bij alle bezoeken",
        "Legen en netjes stapelen van post",
        "Gordijnen openen/sluiten op verzoek",
        "Inbraakpreventie voor een gerust hart"
      ],
      "en": [
        "Included free in every sitting visit",
        "Mail neatly sorted and stored inside",
        "Curtains & light rotation upon request",
        "Deters burglars effectively"
      ],
      "fr": [
        "Inclus sans frais additionnels",
        "Courrier trié et déposé en lieu sûr",
        "Ouverture/fermeture des volets",
        "Dissuasion efficace des cambriolages"
      ],
      "tr": [
        "Tüm ziyaretlerde tamamen ücretsiz",
        "Postaların toplanıp düzenli konması",
        "İsteğe göre perde ve ışık düzenlemesi",
        "Hırsızlığa karşı caydırıcı önlem"
      ]
    },
    "image": "/images/cat_security.png",
    "geo": {
      "latitude": 51.2194,
      "longitude": 4.4025
    },
    "keywords": {
      "nl": [
        "brievenbus legen vakantie Antwerpen",
        "huisbeveiliging oppas",
        "inbraakpreventie vakantie"
      ],
      "en": [
        "mail collection pet sitter Antwerp",
        "home security pet sitting"
      ],
      "fr": [
        "relever courrier vacances Anvers",
        "surveillance maison vacances"
      ],
      "tr": [
        "posta toplama tatil Anvers",
        "ev güvenliği bakıcı"
      ]
    }
  },
  {
    "slug": "hondenoppas",
    "postalCode": "Vlaanderen & Antwerpen",
    "name": {
      "nl": "Hondenoppas aan Huis",
      "en": "In-Home Dog Sitting",
      "fr": "Garde de Chien à Domicile",
      "tr": "Evde Köpek Bakıcılığı"
    },
    "title": {
      "nl": "Professionele Hondenoppas aan Huis in Antwerpen & Vlaanderen",
      "en": "Professional In-Home Dog Sitting in Antwerp & Flanders",
      "fr": "Garde Professionnelle de Chien à Domicile à Anvers & Flandre",
      "tr": "Anvers ve Flanders Genelinde Profesyonel Evde Köpek Bakıcılığı"
    },
    "subtitle": {
      "nl": "Liefdevolle zorg voor uw hond in de eigen vertrouwde omgeving, zonder pensionstress.",
      "en": "Loving dog care in their familiar home surroundings, avoiding kennel stress.",
      "fr": "Soins affectueux pour votre chien dans son environnement, sans stress de chenil.",
      "tr": "Köpeğiniz için pansiyon stresi olmadan, kendi yuvasında şefkatli ve uzman bakım."
    },
    "description": {
      "nl": "KattenHond biedt hoogwaardige hondenoppas aan huis. Uw hond blijft heerlijk in zijn eigen mand en vertrouwde tuin. Wij verzorgen maaltijden, wandelingen, speelsessies, medicatie en geven 100% HD Bodycam videobewijs na elk bezoek.",
      "en": "KattenHond offers premium in-home dog sitting. Your dog enjoys their cozy bed and familiar garden. We provide meals, walks, active play, medication, and HD bodycam video proof after every visit.",
      "fr": "KattenHond propose une garde de chien à domicile haut de gamme. Votre chien reste dans son panier habituel avec repas, promenades, jeux et vidéos Bodycam HD.",
      "tr": "KattenHond, evde üstün standartlarda köpek bakıcılığı sunar. Köpeğiniz kendi yatağında ve bahçesinde kalarak beslenme, yürüyüş, oyun ve ilaç bakımı alır. Her ziyarette HD kamera kaydı sunulur."
    },
    "highlights": {
      "nl": [
        "Eigen vertrouwde omgeving zonder blaffende pensions",
        "Wandelingen op maat in eigen buurt of park",
        "Voeding, borstelen en medicatietoediening",
        "HD Bodycam opname en GPS-wandelrapport"
      ],
      "en": [
        "Comfortable home environment without loud kennels",
        "Tailored walks in local neighborhood and parks",
        "Feeding, brushing, and medications covered",
        "HD Bodycam recording & GPS walk summary"
      ],
      "fr": [
        "Environnement familier sans chenil bruyant",
        "Promenades sur mesure au parc",
        "Repas, brossage et médicaments inclus",
        "Enregistrement Bodycam HD et rapport"
      ],
      "tr": [
        "Pansiyon gürültüsü olmadan kendi evinde konfor",
        "Mahallenizde ve parkta özel yürüyüş seansları",
        "Mama, tarama ve ilaç uygulamaları",
        "HD Yaka kamerası ve GPS yürüyüş raporu"
      ]
    },
    "image": "/images/cat_playing.png",
    "geo": {
      "latitude": 51.2194,
      "longitude": 4.4025
    },
    "keywords": {
      "nl": [
        "hondenoppas Antwerpen",
        "hondenoppas aan huis",
        "dog sitter Antwerpen",
        "hondenopvang aan huis",
        "kattenhond hondenoppas"
      ],
      "en": [
        "dog sitter Antwerp",
        "in home dog sitting Flanders",
        "dog care Antwerp"
      ],
      "fr": [
        "garde chien domicile Anvers",
        "dog sitting Flandre"
      ],
      "tr": [
        "köpek bakıcısı Anvers",
        "evde köpek bakımı Belçika"
      ]
    }
  },
  {
    "slug": "hondenuitlaatservice",
    "postalCode": "Vlaanderen & Antwerpen",
    "name": {
      "nl": "Hondenuitlaatservice",
      "en": "Dog Walking Service",
      "fr": "Service de Promenade pour Chien",
      "tr": "Profesyonel Köpek Gezdirme Servisi"
    },
    "title": {
      "nl": "Betrouwbare Hondenuitlaatservice en Wandelingen in Regio Antwerpen",
      "en": "Reliable Dog Walking Service & Outdoor Walks in Antwerp Region",
      "fr": "Service de Promenade de Chien Professionnel à Anvers",
      "tr": "Anvers Bölgesinde Güvenilir Köpek Gezdirme ve Yürüyüş Hizmeti"
    },
    "subtitle": {
      "nl": "Individuele of duo-wandelingen vol beweging, snuffeltijd en positiviteit.",
      "en": "Individual or duo walks full of exercise, sniffing adventures, and positive reinforcement.",
      "fr": "Promenades individuelles stimulantes avec exercice et bienveillance.",
      "tr": "Köpeğiniz için bol egzersizli, kokulu ve pozitif enerjili özel yürüyüş seansları."
    },
    "description": {
      "nl": "Heeft u een drukke werkdag of bent u minder mobiel? Onze professionele hondenuitlaters komen bij u langs voor een energieke wandeling van 30, 45 of 60 minuten. Wij wandelen individueel zodat uw hond alle persoonlijke aandacht krijgt.",
      "en": "Busy workday or recovering from surgery? Our professional dog walkers visit your home for invigorating 30, 45, or 60-minute walks. We prioritize 1-on-1 attention for safety and fun.",
      "fr": "Journée chargée au travail ? Nos promeneurs de chiens professionnels viennent chez vous pour des balades dynamiques de 30 à 60 minutes avec toute l'attention nécessaire.",
      "tr": "Yoğun iş günlerinizde veya seyahatlerinizde köpeğinizi yalnız bırakmayın. 30, 45 veya 60 dakikalık birebir yürüyüş seanslarıyla köpeğinize sağlıklı bir egzersiz sunuyoruz."
    },
    "highlights": {
      "nl": [
        "Individuele wandelingen (geen overvolle busjes)",
        "30, 45 of 60 minuten naar keuze",
        "Pootjes schoonmaken en drinkbak vullen bij thuiskomst",
        "GPS-route en vrolijke foto's naar uw telefoon"
      ],
      "en": [
        "Solo walks (no overcrowded pack vans)",
        "30, 45, or 60 min session options",
        "Paws cleaned and fresh water bowl upon return",
        "GPS route & live photos sent to your phone"
      ],
      "fr": [
        "Promenades individuelles sécurisées",
        "Sessions de 30, 45 ou 60 minutes",
        "Pattes nettoyées et eau fraîche au retour",
        "Parcours GPS et photos envoyées"
      ],
      "tr": [
        "Bireysel yürüyüş (kalabalık minibüs taşımacılığı yok)",
        "30, 45 veya 60 dakika seçenekleri",
        "Eve dönüşte pati temizliği ve taze su ikmali",
        "Telefona anlık GPS rotası ve fotoğraflar"
      ]
    },
    "image": "/images/cat_playing.png",
    "geo": {
      "latitude": 51.2194,
      "longitude": 4.4025
    },
    "keywords": {
      "nl": [
        "hondenuitlaatservice Antwerpen",
        "hond uitlaten Antwerpen",
        "dog walker Antwerpen",
        "hondenuitlater tarieven"
      ],
      "en": [
        "dog walker Antwerp",
        "dog walking service Antwerp",
        "hire dog walker"
      ],
      "fr": [
        "promeneur de chien Anvers",
        "service promenade chien"
      ],
      "tr": [
        "köpek gezdirme Anvers",
        "köpek yürüyüş servisi Belçika"
      ]
    }
  },
  {
    "slug": "puppy-care",
    "postalCode": "Vlaanderen & Antwerpen",
    "name": {
      "nl": "Puppyverzorging & Begeleiding",
      "en": "Puppy Care & Socialization Visits",
      "fr": "Garde et Soins pour Chiot",
      "tr": "Yavru Köpek (Puppy) Bakımı ve Sosyalleştirme"
    },
    "title": {
      "nl": "Gespecialiseerde Puppyverzorging en Bezoekjes aan Huis in Antwerpen",
      "en": "Specialized In-Home Puppy Care & Potty Break Visits in Antwerp",
      "fr": "Visites et Soins Spécialisés pour Chiots à Domicile à Anvers",
      "tr": "Anvers'te Yavru Köpekler İçin Evde Tuvalet ve Sosyalleşme Bakımı"
    },
    "subtitle": {
      "nl": "Korte plaspauzes, zindelijkheidstraining en veilige socialisatie voor jonge pups.",
      "en": "Potty breaks, routine reinforcement, and gentle socialization for young pups.",
      "fr": "Sorties propreté, éducation douce et jeux adaptés pour jeunes chiots.",
      "tr": "Yavru köpekler için tuvalet alışkanlığı, beslenme ve güvenli sosyalleşme ziyaretleri."
    },
    "description": {
      "nl": "Een puppy kan nog geen hele werkdag alleen zijn. KattenHond biedt speciale puppybezoekjes met plaspauzes, speelsessies, voeding en zindelijkheidsondersteuning onder toezicht van gediplomeerde dierexperts.",
      "en": "A young puppy cannot stay alone all day. KattenHond provides tailored puppy visits with potty breaks, bite-inhibition play, and positive feeding support.",
      "fr": "Un chiot a besoin de sorties fréquentes. KattenHond propose des visites adaptées avec pauses pipi, repas et jeux stimulants.",
      "tr": "Yavru köpekler gün boyu yalnız kalamaz. KattenHond uzmanları eve gelerek tuvalet molası, mama takviyesi ve zihinsel gelişim oyunları sağlar."
    },
    "highlights": {
      "nl": [
        "Korte frequente plaspauzes tegen ongelukjes",
        "Ondersteuning van de zindelijkheidstraining",
        "Positieve stimulatie en socialisatiespelletjes",
        "Bioloog advies over puppygroei en voeding"
      ],
      "en": [
        "Frequent potty break visits",
        "Reinforces consistent house training",
        "Gentle play and positive stimulation",
        "Biologist guidance on puppy development"
      ],
      "fr": [
        "Sorties régulières pour la propreté",
        "Aide à l'éducation douce",
        "Jeux d'éveil positifs",
        "Conseils de spécialistes en biologie"
      ],
      "tr": [
        "Düzenli tuvalet molalarıyla ev kazalarını önleme",
        "Tuvalet eğitimine destek",
        "Pozitif oyunlarla sosyalleştirme",
        "Biyologdan yavru gelişimi tavsiyeleri"
      ]
    },
    "image": "/images/cat_playing.png",
    "geo": {
      "latitude": 51.2194,
      "longitude": 4.4025
    },
    "keywords": {
      "nl": [
        "puppy oppas Antwerpen",
        "puppy plaspauze aan huis",
        "puppyverzorging Antwerpen"
      ],
      "en": [
        "puppy sitter Antwerp",
        "puppy potty break visits"
      ],
      "fr": [
        "garde chiot Anvers",
        "visite chiot domicile"
      ],
      "tr": [
        "yavru köpek bakıcısı Anvers",
        "puppy bakımı"
      ]
    }
  },
  {
    "slug": "willebroek",
    "postalCode": "2830",
    "name": {
      "nl": "Willebroek & Rupelstreek",
      "en": "Willebroek & Rupel Region",
      "fr": "Willebroek & Région du Rupel",
      "tr": "Willebroek ve Rupel Bölgesi"
    },
    "title": {
      "nl": "Kattenoppas & Hondenoppas aan Huis in Willebroek (2830)",
      "en": "In-Home Cat Sitter & Dog Sitting in Willebroek (2830)",
      "fr": "Garde de Chat et Chien à Domicile à Willebroek (2830)",
      "tr": "Willebroek (2830) Bölgesinde Evde Kedi ve Köpek Bakıcılığı"
    },
    "subtitle": {
      "nl": "Professionele verzorging aan huis in Willebroek, Blaasveld, Tisselt en Klein-Willebroek.",
      "en": "Professional in-home pet care in Willebroek, Blaasveld, Tisselt, and Klein-Willebroek.",
      "fr": "Garde d'animaux professionnelle à domicile à Willebroek, Blaasveld et Tisselt.",
      "tr": "Willebroek, Blaasveld, Tisselt ve Klein-Willebroek'te profesyonel evde evcil hayvan bakımı."
    },
    "description": {
      "nl": "Woont u in Willebroek (postcode 2830) of de omliggende deelgemeenten zoals Blaasveld, Tisselt of Heindonk? KattenHond is uw betrouwbare kattenoppas en hondenoppas aan huis. Onder leiding van een gediplomeerd bioloog verzorgen wij uw katten en honden met dagelijkse bezoeken, voeding, wandelingen en 100% HD Bodycam opnames.",
      "en": "Living in Willebroek (postal code 2830) or surrounding areas like Blaasveld, Tisselt, or Klein-Willebroek? KattenHond is your verified in-home pet sitting service providing daily visits, dog walking, and bodycam security.",
      "fr": "Vous habitez à Willebroek (2830), Blaasveld ou Tisselt ? KattenHond assure la garde professionnelle de vos chats et chiens à domicile avec enregistrement vidéo HD et expertise biologique.",
      "tr": "Willebroek (posta kodu 2830), Blaasveld, Tisselt veya Klein-Willebroek bölgesinde mi oturuyorsunuz? KattenHond, biyolog uzmanlığı ve yaka kamerası şeffaflığı ile kedi ve köpeklerinize evinizde en kaliteli bakımı sunar."
    },
    "highlights": {
      "nl": [
        "Actief in heel Willebroek (2830), Blaasveld & Tisselt",
        "Kattenoppas aan huis & Hondenuitlaatservice",
        "Elk bezoek opgenomen met 100% HD Bodycam",
        "Gratis plantenverzorging en postbusservice inbegrepen"
      ],
      "en": [
        "Active across all Willebroek (2830), Blaasveld & Tisselt",
        "Cat sitting & dog walking at your doorstep",
        "Every visit backed by 100% HD Bodycam recordings",
        "Free plant watering and mailbox security included"
      ],
      "fr": [
        "Actif à Willebroek (2830), Blaasveld et Tisselt",
        "Garde de chats à domicile et promenades canines",
        "Chaque visite enregistrée en vidéo HD Bodycam",
        "Arrosage de plantes et relève de courrier gratuits"
      ],
      "tr": [
        "Tüm Willebroek (2830), Blaasveld ve Tisselt genelinde aktif",
        "Evde kedi bakımı ve profesyonel köpek gezdirme",
        "Her ziyarette %100 HD Yaka Kamerası video kaydı",
        "Ücretsiz çiçek sulama ve posta toplama hizmeti"
      ]
    },
    "image": "/images/cat_bodycam.png",
    "geo": {
      "latitude": 51.0608,
      "longitude": 4.3586
    },
    "keywords": {
      "nl": [
        "kattenoppas Willebroek",
        "hondenoppas Willebroek",
        "hondenuitlaatservice Willebroek",
        "kattenoppas 2830",
        "dierenoppas Blaasveld",
        "kattenoppas Tisselt",
        "kattenhond willebroek"
      ],
      "en": [
        "cat sitter Willebroek",
        "dog sitting Willebroek",
        "pet sitter 2830 Belgium"
      ],
      "fr": [
        "garde chat Willebroek",
        "garde chien Willebroek 2830"
      ],
      "tr": [
        "Willebroek kedi bakıcısı",
        "Willebroek köpek bakıcısı",
        "Willebroek pet sitter"
      ]
    }
  },
  {
    "slug": "mechelen",
    "postalCode": "2800",
    "name": {
      "nl": "Mechelen & Omstreken",
      "en": "Mechelen City & Area",
      "fr": "Malines & Environs",
      "tr": "Mechelen ve Çevresi"
    },
    "title": {
      "nl": "Kattenoppas & Hondenoppas aan Huis in Mechelen (2800)",
      "en": "In-Home Cat Sitting & Dog Walking in Mechelen (2800)",
      "fr": "Garde de Chats et Chiens à Domicile à Malines (2800)",
      "tr": "Mechelen (2800) Bölgesinde Evde Kedi ve Köpek Bakımı"
    },
    "subtitle": {
      "nl": "Zorgeloos reizen met onze professionele huisdierenoppas in Mechelen centrum, Nekkerspoel en Battel.",
      "en": "Travel with peace of mind with our professional pet sitters in Mechelen center and surrounding districts.",
      "fr": "Partez l'esprit serein avec notre service de garde d'animaux à Malines et ses quartiers.",
      "tr": "Mechelen merkez, Nekkerspoel ve çevresinde biyolog onaylı evde evcil hayvan bakıcılığı."
    },
    "description": {
      "nl": "Woont u in de historische stad Mechelen (2800, 2801, 2811)? KattenHond verzorgt uw katten en honden met de hoogste standaarden. Geen verhuizing naar pensions, maar liefdevolle bezoeken in eigen huis met bodycam transparantie.",
      "en": "Located in Mechelen (2800)? KattenHond delivers top-tier in-home cat care and dog walking. Your pets stay relaxed at home while you receive daily HD video updates.",
      "fr": "À Malines (2800), KattenHond prend soin de vos animaux avec amour et expertise. Visites à domicile et promenades sans stress.",
      "tr": "Mechelen (2800) bölgesinde kedi ve köpekleriniz için konforlu evde bakım ve köpek gezdirme hizmeti sunuyoruz."
    },
    "highlights": {
      "nl": [
        "Snelle service in heel Mechelen (2800) & Nekkerspoel",
        "Ervaring met medicatie, dieet en seniordieren",
        "HD Bodycam videobewijs na elk bezoek",
        "Inclusief planten en post service"
      ],
      "en": [
        "Prompt service across Mechelen (2800)",
        "Medical, senior, and diet care expertise",
        "HD Bodycam proof after each visit",
        "Includes plant watering and mail care"
      ],
      "fr": [
        "Service rapide à Malines et environs",
        "Prise en charge médicaments et régimes",
        "Preuve vidéo HD après chaque passage",
        "Plantes et courrier inclus"
      ],
      "tr": [
        "Mechelen genelinde hızlı hizmet",
        "İlaç, diyet ve yaşlı hayvan bakımı uzmanlığı",
        "Her ziyarette HD video kaydı",
        "Çiçek sulama ve posta toplama dahil"
      ]
    },
    "image": "/images/cat_feeding.png",
    "geo": {
      "latitude": 51.0259,
      "longitude": 4.4776
    },
    "keywords": {
      "nl": [
        "kattenoppas Mechelen",
        "hondenoppas Mechelen",
        "hondenuitlater Mechelen",
        "kattenoppas 2800",
        "kattenhotel Mechelen alternatief"
      ],
      "en": [
        "cat sitter Mechelen",
        "dog walker Mechelen 2800"
      ],
      "fr": [
        "garde chat Malines",
        "garde chien Malines 2800"
      ],
      "tr": [
        "Mechelen kedi bakıcısı",
        "Mechelen köpek bakıcısı"
      ]
    }
  },
  {
    "slug": "boom",
    "postalCode": "2850",
    "name": {
      "nl": "Boom & De Schorre",
      "en": "Boom & Rupel Area",
      "fr": "Boom & Vallée du Rupel",
      "tr": "Boom ve Rupel Bölgesi"
    },
    "title": {
      "nl": "Kattenoppas & Hondenoppas aan Huis in Boom (2850)",
      "en": "In-Home Pet Sitting & Dog Walking in Boom (2850)",
      "fr": "Garde de Chat et Chien à Domicile à Boom (2850)",
      "tr": "Boom (2850) Bölgesinde Evde Kedi ve Köpek Bakıcısı"
    },
    "subtitle": {
      "nl": "Deskundige dierenverzorging aan huis in Boom, nabij De Schorre en de Rupel.",
      "en": "Expert in-home pet care in Boom, near De Schorre and Rupel river.",
      "fr": "Soins experts pour vos animaux à Boom et ses alentours.",
      "tr": "Boom bölgesinde De Schorre ve Rupel yakınlarında profesyonel evde bakım."
    },
    "description": {
      "nl": "In Boom (2850) biedt KattenHond professionele kattenoppas en hondenoppas aan huis. Ideaal voor vakantiegangers of festivalbezoekers die de beste zorg voor hun huisdier wensen met 100% HD videobewijs.",
      "en": "In Boom (2850), KattenHond offers professional in-home cat visits and dog walking with 100% HD bodycam transparency.",
      "fr": "À Boom (2850), bénéficiez d'une garde féline et canine d'excellence à votre domicile.",
      "tr": "Boom (2850) bölgesinde güvenilir evde kedi bakımı ve köpek gezdirme hizmetleri."
    },
    "highlights": {
      "nl": [
        "Actief in postcode 2850 Boom",
        "HD Bodycam opnames bij elk bezoek",
        "Flexibele bezoektijden",
        "Biyologische zorgexpertise"
      ],
      "en": [
        "Active in 2850 Boom",
        "HD Bodycam footage per visit",
        "Flexible visiting times",
        "Biologist care expertise"
      ],
      "fr": [
        "Présent à Boom 2850",
        "Vidéos HD à chaque visite",
        "Horaires flexibles",
        "Expertise biologique"
      ],
      "tr": [
        "2850 Boom bölgesinde aktif",
        "Her ziyarette HD kamera kaydı",
        "Esnek ziyaret saatleri",
        "Biyolog uzmanlığı"
      ]
    },
    "image": "/images/cat_emergency.png",
    "geo": {
      "latitude": 51.0878,
      "longitude": 4.3683
    },
    "keywords": {
      "nl": [
        "kattenoppas Boom",
        "hondenoppas Boom 2850",
        "hondenuitlaatservice Boom",
        "dierenoppas Rupel"
      ],
      "en": [
        "cat sitter Boom Belgium",
        "pet sitting Boom 2850"
      ],
      "fr": [
        "garde chat Boom 2850"
      ],
      "tr": [
        "Boom kedi bakıcısı",
        "Boom köpek gezdirme"
      ]
    }
  },
  {
    "slug": "brasschaat",
    "postalCode": "2930",
    "name": {
      "nl": "Brasschaat & Park",
      "en": "Brasschaat & Green Area",
      "fr": "Brasschaat & Région Nord",
      "tr": "Brasschaat Bölgesi"
    },
    "title": {
      "nl": "Exclusieve Kattenoppas & Hondenoppas aan Huis in Brasschaat (2930)",
      "en": "Premium In-Home Cat & Dog Sitting in Brasschaat (2930)",
      "fr": "Garde Haut de Gamme pour Chats & Chiens à Brasschaat (2930)",
      "tr": "Brasschaat (2930) Bölgesinde Premium Evde Kedi ve Köpek Bakımı"
    },
    "subtitle": {
      "nl": "Hoogwaardige verzorging in Brasschaat centrum, Vriesdonk, Maria-ter-Heide en Bethanië.",
      "en": "Premium care across Brasschaat center, Vriesdonk, and Maria-ter-Heide.",
      "fr": "Service exclusif à Brasschaat, Vriesdonk et Maria-ter-Heide.",
      "tr": "Brasschaat merkez ve villalar bölgesinde VIP evde evcil hayvan bakıcılığı."
    },
    "description": {
      "nl": "Woont u in de groene gemeente Brasschaat (2930)? KattenHond levert discrete, professionele kattenverzorging en hondenservice aan huis. Met bodycam beveiliging en biologische vakkennis blijft uw huisdier in optimale conditie.",
      "en": "Living in green Brasschaat (2930)? KattenHond offers discreet, high-end in-home cat care and dog walking with bodycam security.",
      "fr": "À Brasschaat (2930), confiez vos animaux à des experts en biologie pour une garde à domicile discrète et sécurisée.",
      "tr": "Brasschaat (2930) bölgesinde lüks ve güvenli evde kedi-köpek bakımı, yaka kamerası güvencesiyle."
    },
    "highlights": {
      "nl": [
        "Dekking in heel Brasschaat 2930 & Vriesdonk",
        "Discrete, betrouwbare oppassers met bioloog toezicht",
        "100% HD Bodycam videobewijs",
        "Wandelingen in Brasschaatse parken"
      ],
      "en": [
        "Coverage across all 2930 Brasschaat",
        "Discreet, background-checked biologist sitters",
        "100% HD Bodycam video proof",
        "Nature walks in Brasschaat parks"
      ],
      "fr": [
        "Couverture totale Brasschaat 2930",
        "Gardiens discrets formés en biologie",
        "Enregistrement HD Bodycam",
        "Promenades au parc de Brasschaat"
      ],
      "tr": [
        "Tüm Brasschaat 2930 genelinde hizmet",
        "Güvenilir ve biyolog denetimli bakıcılar",
        "100% HD Yaka kamerası video kaydı",
        "Brasschaat parklarında keyifli yürüyüşler"
      ]
    },
    "image": "/images/cat_playing.png",
    "geo": {
      "latitude": 51.2917,
      "longitude": 4.4922
    },
    "keywords": {
      "nl": [
        "kattenoppas Brasschaat",
        "hondenoppas Brasschaat",
        "hondenuitlaatservice Brasschaat",
        "kattenoppas 2930",
        "dierenoppas Vriesdonk"
      ],
      "en": [
        "cat sitter Brasschaat",
        "dog sitting Brasschaat 2930"
      ],
      "fr": [
        "garde chat Brasschaat",
        "garde chien Brasschaat"
      ],
      "tr": [
        "Brasschaat kedi bakıcısı",
        "Brasschaat köpek bakıcısı"
      ]
    }
  },
  {
    "slug": "schoten",
    "postalCode": "2900",
    "name": {
      "nl": "Schoten & Vaart",
      "en": "Schoten & Canal Area",
      "fr": "Schoten & Région Canal",
      "tr": "Schoten Bölgesi"
    },
    "title": {
      "nl": "Kattenoppas & Hondenoppas aan Huis in Schoten (2900)",
      "en": "In-Home Cat Sitting & Dog Walking in Schoten (2900)",
      "fr": "Garde de Chat et Chien à Domicile à Schoten (2900)",
      "tr": "Schoten (2900) Bölgesinde Evde Kedi ve Köpek Bakımı"
    },
    "subtitle": {
      "nl": "Vertrouwde verzorging langs het kanaal, Deuzeld, Koningshof en Schoten centrum.",
      "en": "Trusted pet sitting along the canal, Deuzeld, and Schoten center.",
      "fr": "Garde d'animaux de confiance à Schoten, Deuzeld et Koningshof.",
      "tr": "Schoten merkez, Deuzeld ve kanal boyunda güvenli evde kedi-köpek bakımı."
    },
    "description": {
      "nl": "In Schoten (2900) staat KattenHond klaar voor uw katten en honden. Dagelijkse bezoeken, verse voeding, borstelen, wandelingen en HD Bodycam beelden zorgen voor een zorgeloze vakantie.",
      "en": "In Schoten (2900), KattenHond provides certified in-home cat sitting and dog walking with complete transparency.",
      "fr": "À Schoten (2900), bénéficiez de soins attentionnés pour votre chat ou chien à domicile.",
      "tr": "Schoten (2900) bölgesinde tatiliniz boyunca evcil hayvanlarınıza şefkatle bakıyoruz."
    },
    "highlights": {
      "nl": [
        "Postcode 2900 Schoten & Koningshof",
        "Geen pensionstress voor uw dier",
        "HD Bodycam garantie",
        "Medicatie en plantenservice"
      ],
      "en": [
        "Postal code 2900 Schoten covered",
        "Zero kennel stress for your pet",
        "HD Bodycam guarantee",
        "Medication and plant care"
      ],
      "fr": [
        "Secteur 2900 Schoten",
        "Zéro stress de déplacement",
        "Garantie Bodycam HD",
        "Médicaments et arrosage"
      ],
      "tr": [
        "2900 Schoten bölgesi",
        "Pansiyon stresi yok",
        "HD Kamera garantisi",
        "İlaç ve çiçek sulama desteği"
      ]
    },
    "image": "/images/cat_health.png",
    "geo": {
      "latitude": 51.25,
      "longitude": 4.5
    },
    "keywords": {
      "nl": [
        "kattenoppas Schoten",
        "hondenoppas Schoten",
        "hondenuitlaatservice Schoten",
        "kattenoppas 2900"
      ],
      "en": [
        "cat sitter Schoten",
        "dog walking Schoten 2900"
      ],
      "fr": [
        "garde chat Schoten 2900"
      ],
      "tr": [
        "Schoten kedi bakıcısı",
        "Schoten köpek gezdirme"
      ]
    }
  },
  {
    "slug": "kapellen",
    "postalCode": "2950",
    "name": {
      "nl": "Kapellen & Bos",
      "en": "Kapellen & Forest Region",
      "fr": "Kapellen & Région Boisée",
      "tr": "Kapellen Bölgesi"
    },
    "title": {
      "nl": "Kattenoppas & Hondenoppas aan Huis in Kapellen (2950)",
      "en": "In-Home Cat & Dog Sitting in Kapellen (2950)",
      "fr": "Garde de Chat et Chien à Domicile à Kapellen (2950)",
      "tr": "Kapellen (2950) Bölgesinde Evde Kedi ve Köpek Bakımı"
    },
    "subtitle": {
      "nl": "Liefdevolle thuisverzorging in Kapellen, Hoogboom en Kapellenbos.",
      "en": "Loving in-home pet care in Kapellen, Hoogboom, and Kapellenbos.",
      "fr": "Soins affectueux à domicile à Kapellen, Hoogboom et environs.",
      "tr": "Kapellen, Hoogboom ve Kapellenbos bölgesinde evde evcil hayvan bakımı."
    },
    "description": {
      "nl": "In Kapellen (2950) verzorgt KattenHond uw geliefde viervoeters in hun vertrouwde habitat. Wij zorgen voor maaltijden, spelen, wandelingen in het bos en HD videobeelden.",
      "en": "In Kapellen (2950), KattenHond provides expert in-home care for cats and dogs, including forest walks and HD bodycam video.",
      "fr": "À Kapellen (2950), vos animaux profitent de leur confort familier avec des visites de qualité supérieure.",
      "tr": "Kapellen (2950) bölgesinde kedi ve köpekleriniz için evde bakım ve orman yürüyüşleri."
    },
    "highlights": {
      "nl": [
        "Postcode 2950 Kapellen & Hoogboom",
        "Biologische expertise",
        "HD Bodycam opnames",
        "Planten en post service gratis"
      ],
      "en": [
        "Postcode 2950 Kapellen covered",
        "Biologist led care",
        "HD Bodycam videos",
        "Free plant and mail care"
      ],
      "fr": [
        "Secteur Kapellen 2950",
        "Expertise biologique",
        "Vidéos Bodycam HD",
        "Courrier et plantes inclus"
      ],
      "tr": [
        "2950 Kapellen bölgesi",
        "Biyolog denetimi",
        "HD Kamera kayıtları",
        "Ücretsiz çiçek ve posta bakımı"
      ]
    },
    "image": "/images/cat_feeding.png",
    "geo": {
      "latitude": 51.3142,
      "longitude": 4.4319
    },
    "keywords": {
      "nl": [
        "kattenoppas Kapellen",
        "hondenoppas Kapellen",
        "kattenoppas 2950",
        "hondenuitlaatservice Kapellen"
      ],
      "en": [
        "cat sitter Kapellen",
        "dog sitting Kapellen 2950"
      ],
      "fr": [
        "garde chat Kapellen"
      ],
      "tr": [
        "Kapellen kedi bakıcısı",
        "Kapellen köpek bakıcısı"
      ]
    }
  },
  {
    "slug": "edegem",
    "postalCode": "2650",
    "name": {
      "nl": "Edegem & UZA",
      "en": "Edegem & UZA Region",
      "fr": "Edegem & Environs",
      "tr": "Edegem Bölgesi"
    },
    "title": {
      "nl": "Kattenoppas & Hondenoppas aan Huis in Edegem (2650)",
      "en": "In-Home Cat Sitter & Dog Walker in Edegem (2650)",
      "fr": "Garde de Chat et Chien à Domicile à Edegem (2650)",
      "tr": "Edegem (2650) Bölgesinde Evde Kedi ve Köpek Bakımı"
    },
    "subtitle": {
      "nl": "Zorgzame bezoeken aan huis in Edegem centrum, Molenveld, Elsdonk en Buizegem.",
      "en": "Caring home visits across Edegem center, Molenveld, Elsdonk, and Buizegem.",
      "fr": "Visites attentives à Edegem, Elsdonk, Molenveld et Buizegem.",
      "tr": "Edegem merkez, Elsdonk ve Molenveld mahallelerinde evde kedi-köpek bakımı."
    },
    "description": {
      "nl": "In Edegem (2650) biedt KattenHond professionele kattenoppas en hondenoppas aan huis. Ideaal voor medewerkers van het UZA of frequente reizigers.",
      "en": "In Edegem (2650), KattenHond offers certified in-home cat visits and dog walking with full HD video proof.",
      "fr": "À Edegem (2650), notre équipe veille sur vos chats et chiens avec dévouement.",
      "tr": "Edegem (2650) bölgesinde UZA çalışanları ve seyahate çıkanlar için güvenilir evde bakım."
    },
    "highlights": {
      "nl": [
        "Heel Edegem 2650 & Elsdonk",
        "Ervaring met medicijnen & insuline",
        "HD Bodycam verslag",
        "Gratis kennismaking aan huis"
      ],
      "en": [
        "Covers all Edegem 2650 & Elsdonk",
        "Medication and insulin expertise",
        "HD Bodycam reports",
        "Free in-home meet & greet"
      ],
      "fr": [
        "Tout Edegem 2650",
        "Gestion médicaments et soins",
        "Rapports vidéo HD",
        "Rencontre préalable gratuite"
      ],
      "tr": [
        "Tüm Edegem 2650 ve Elsdonk",
        "İlaç ve insülin uzmanlığı",
        "HD Video raporları",
        "Ücretsiz evde tanışma"
      ]
    },
    "image": "/images/cat_meds.png",
    "geo": {
      "latitude": 51.1567,
      "longitude": 4.4444
    },
    "keywords": {
      "nl": [
        "kattenoppas Edegem",
        "hondenoppas Edegem",
        "kattenoppas 2650",
        "hondenuitlaatservice Edegem"
      ],
      "en": [
        "cat sitter Edegem",
        "dog sitting Edegem 2650"
      ],
      "fr": [
        "garde chat Edegem 2650"
      ],
      "tr": [
        "Edegem kedi bakıcısı",
        "Edegem köpek bakıcısı"
      ]
    }
  },
  {
    "slug": "kontich",
    "postalCode": "2550",
    "name": {
      "nl": "Kontich & Waarloos",
      "en": "Kontich & Waarloos Area",
      "fr": "Kontich & Waarloos",
      "tr": "Kontich ve Waarloos Bölgesi"
    },
    "title": {
      "nl": "Kattenoppas & Hondenoppas aan Huis in Kontich (2550)",
      "en": "In-Home Cat Sitting & Dog Walking in Kontich (2550)",
      "fr": "Garde de Chat et Chien à Domicile à Kontich (2550)",
      "tr": "Kontich (2550) Bölgesinde Evde Kedi ve Köpek Bakımı"
    },
    "subtitle": {
      "nl": "Professionele thuisverzorging in Kontich centrum, Kontich-Kazerne en Waarloos.",
      "en": "Professional in-home care in Kontich center, Kontich-Kazerne, and Waarloos.",
      "fr": "Garde professionnelle à Kontich et Waarloos.",
      "tr": "Kontich merkez, Kazerne ve Waarloos bölgelerinde evde kedi-köpek bakımı."
    },
    "description": {
      "nl": "Woont u in Kontich (2550) of Waarloos? KattenHond verzorgt uw kat en hond tijdens vakanties of lange werkdagen. Met HD Bodycam en biologische kennis is uw dier in de allerbeste handen.",
      "en": "Living in Kontich (2550) or Waarloos? KattenHond cares for your pets with HD bodycam proof and biologist expertise.",
      "fr": "À Kontich (2550), KattenHond assure la garde de vos félins et canins à domicile.",
      "tr": "Kontich (2550) ve Waarloos bölgesinde güvenilir evde kedi-köpek bakımı ve yürüyüş hizmeti."
    },
    "highlights": {
      "nl": [
        "Postcode 2550 Kontich & Waarloos",
        "HD Bodycam opnames",
        "Wandelingen & Speeltijd",
        "Planten en post inbegrepen"
      ],
      "en": [
        "Postal code 2550 Kontich covered",
        "HD Bodycam videos",
        "Walks & playtime",
        "Plants and mail care included"
      ],
      "fr": [
        "Secteur 2550 Kontich",
        "Vidéos HD",
        "Promenades et jeux",
        "Plantes et courrier inclus"
      ],
      "tr": [
        "2550 Kontich ve Waarloos",
        "HD Kamera kayıtları",
        "Yürüyüş ve oyun",
        "Çiçek ve posta dahil"
      ]
    },
    "image": "/images/cat_playing.png",
    "geo": {
      "latitude": 51.1333,
      "longitude": 4.45
    },
    "keywords": {
      "nl": [
        "kattenoppas Kontich",
        "hondenoppas Kontich",
        "kattenoppas 2550",
        "hondenuitlater Kontich"
      ],
      "en": [
        "cat sitter Kontich",
        "dog sitting Kontich 2550"
      ],
      "fr": [
        "garde chat Kontich"
      ],
      "tr": [
        "Kontich kedi bakıcısı",
        "Kontich köpek bakıcısı"
      ]
    }
  },
  {
    "slug": "mortsel",
    "postalCode": "2640",
    "name": {
      "nl": "Mortsel & Fort 4",
      "en": "Mortsel & Fort 4 Area",
      "fr": "Mortsel & Fort 4",
      "tr": "Mortsel Bölgesi"
    },
    "title": {
      "nl": "Kattenoppas & Hondenoppas aan Huis in Mortsel (2640)",
      "en": "In-Home Cat Sitter & Dog Walker in Mortsel (2640)",
      "fr": "Garde de Chat et Chien à Domicile à Mortsel (2640)",
      "tr": "Mortsel (2640) Bölgesinde Evde Kedi ve Köpek Bakımı"
    },
    "subtitle": {
      "nl": "Betrouwbare huisbezoeken in Mortsel centrum, Oude-God, Fort 4 en Cantecroy.",
      "en": "Reliable pet visits across Mortsel, Oude-God, Fort 4, and Cantecroy.",
      "fr": "Visites fiables à Mortsel, Oude-God et Fort 4.",
      "tr": "Mortsel merkez, Oude-God ve Fort 4 civarında profesyonel evde bakım."
    },
    "description": {
      "nl": "In Mortsel (2640) is KattenHond de vertrouwde partner voor uw huisdieren. Dagelijkse bezoeken, verse maaltijden, wandelingen rond Fort 4 en HD Bodycam beelden.",
      "en": "In Mortsel (2640), KattenHond provides reliable pet care visits and scenic walks near Fort 4 with HD video transparency.",
      "fr": "À Mortsel (2640), confiez vos animaux à notre équipe passionnée pour des visites sécurisées.",
      "tr": "Mortsel (2640) bölgesinde Fort 4 yürüyüşleri ve evde kedi bakımı için uzman kadromuz yanınızda."
    },
    "highlights": {
      "nl": [
        "Postcode 2640 Mortsel",
        "Wandelingen rond Fort 4 & parken",
        "HD Bodycam beelden",
        "Biologische dierverzorging"
      ],
      "en": [
        "Postal code 2640 Mortsel",
        "Walks near Fort 4 & green parks",
        "HD Bodycam footage",
        "Biologist pet expertise"
      ],
      "fr": [
        "Secteur 2640 Mortsel",
        "Promenades au Fort 4",
        "Vidéos HD",
        "Soins par biologistes"
      ],
      "tr": [
        "2640 Mortsel geneli",
        "Fort 4 çevresinde yürüyüşler",
        "HD Kamera görüntüleri",
        "Biyolog uzmanlığı"
      ]
    },
    "image": "/images/cat_emergency.png",
    "geo": {
      "latitude": 51.1708,
      "longitude": 4.4561
    },
    "keywords": {
      "nl": [
        "kattenoppas Mortsel",
        "hondenoppas Mortsel",
        "hondenuitlaatservice Mortsel",
        "kattenoppas 2640"
      ],
      "en": [
        "cat sitter Mortsel",
        "dog sitting Mortsel 2640"
      ],
      "fr": [
        "garde chat Mortsel"
      ],
      "tr": [
        "Mortsel kedi bakıcısı",
        "Mortsel köpek gezdirme"
      ]
    }
  },
  {
    "slug": "hoboken",
    "postalCode": "2660",
    "name": {
      "nl": "Hoboken & Polder",
      "en": "Hoboken & Polder Area",
      "fr": "Hoboken & Polders",
      "tr": "Hoboken Bölgesi"
    },
    "title": {
      "nl": "Kattenoppas & Hondenoppas aan Huis in Hoboken (2660)",
      "en": "In-Home Cat Sitting & Dog Walking in Hoboken (2660)",
      "fr": "Garde de Chat et Chien à Domicile à Hoboken (2660)",
      "tr": "Hoboken (2660) Bölgesinde Evde Kedi ve Köpek Bakıcısı"
    },
    "subtitle": {
      "nl": "Persoonlijke verzorging in Hoboken centrum, Hertogvelden en nabij de Hobokense Polder.",
      "en": "Personal pet care in Hoboken center and near the Hobokense Polder.",
      "fr": "Soins personnalisés à Hoboken et près des Polders d'Hoboken.",
      "tr": "Hoboken merkez ve Polder doğa parkı yakınında evde kedi-köpek bakımı."
    },
    "description": {
      "nl": "Woont u in Hoboken (2660)? KattenHond bezoekt uw kat of hond thuis voor voeding, knuffels en energieke wandelingen in de Polder met HD Bodycam garantie.",
      "en": "Living in Hoboken (2660)? KattenHond visits your pets at home with feeding, cuddles, and Polder walks with HD bodycam proof.",
      "fr": "À Hoboken (2660), KattenHond offre des visites à domicile et des promenades dans les polders.",
      "tr": "Hoboken (2660) bölgesinde yaşayan evcil hayvan sahipleri için güvenli ve kameralı evde bakım."
    },
    "highlights": {
      "nl": [
        "Postcode 2660 Hoboken",
        "Wandelingen in de Hobokense Polder",
        "HD Bodycam garantie",
        "Planten en post verzorging"
      ],
      "en": [
        "Postal code 2660 Hoboken",
        "Scenic Hobokense Polder walks",
        "HD Bodycam guarantee",
        "Plant and mail care"
      ],
      "fr": [
        "Secteur 2660 Hoboken",
        "Balades aux polders",
        "Garantie Bodycam HD",
        "Plantes et courrier inclus"
      ],
      "tr": [
        "2660 Hoboken geneli",
        "Hobokense Polder yürüyüşleri",
        "HD Kamera garantisi",
        "Çiçek ve posta bakımı"
      ]
    },
    "image": "/images/cat_plants.png",
    "geo": {
      "latitude": 51.1764,
      "longitude": 4.3583
    },
    "keywords": {
      "nl": [
        "kattenoppas Hoboken",
        "hondenoppas Hoboken",
        "hondenuitlaatservice Hoboken",
        "kattenoppas 2660"
      ],
      "en": [
        "cat sitter Hoboken Antwerp",
        "dog sitting Hoboken 2660"
      ],
      "fr": [
        "garde chat Hoboken 2660"
      ],
      "tr": [
        "Hoboken kedi bakıcısı",
        "Hoboken köpek bakıcısı"
      ]
    }
  },
  {
    "slug": "borgerhout",
    "postalCode": "2140",
    "name": {
      "nl": "Borgerhout & Te Boelaer",
      "en": "Borgerhout & Te Boelaerpark",
      "fr": "Borgerhout & Te Boelaer",
      "tr": "Borgerhout Bölgesi"
    },
    "title": {
      "nl": "Kattenoppas & Hondenoppas aan Huis in Borgerhout (2140)",
      "en": "In-Home Cat Sitting & Dog Walking in Borgerhout (2140)",
      "fr": "Garde de Chat et Chien à Domicile à Borgerhout (2140)",
      "tr": "Borgerhout (2140) Bölgesinde Evde Kedi ve Köpek Bakımı"
    },
    "subtitle": {
      "nl": "Snelle service in Borgerhout Intra Muros, Extra Muros en nabij Te Boelaerpark.",
      "en": "Fast service across Borgerhout Intra/Extra Muros and Te Boelaerpark.",
      "fr": "Service rapide à Borgerhout et près du parc Te Boelaer.",
      "tr": "Borgerhout içi, dışı ve Te Boelaerpark civarında hızlı ve güvenli evde bakım."
    },
    "description": {
      "nl": "In Borgerhout (2140) verzorgt KattenHond uw katten en honden met veel liefde en toewijding. Wij komen aan huis voor maaltijden, kattenbakhygiëne, wandelingen en leveren HD videoverslag.",
      "en": "In Borgerhout (2140), KattenHond provides loving pet care, litter maintenance, and walks with HD video reporting.",
      "fr": "À Borgerhout (2140), nous prenons soin de vos animaux avec amour et rigueur.",
      "tr": "Borgerhout (2140) bölgesinde kedi ve köpekleriniz için eksiksiz evde bakım hizmeti."
    },
    "highlights": {
      "nl": [
        "Postcode 2140 Borgerhout",
        "Kattenoppas & Hondenuitlaatservice",
        "HD Bodycam beelden",
        "Ervaring met medicatie"
      ],
      "en": [
        "Postal code 2140 Borgerhout",
        "Cat sitting & dog walking",
        "HD Bodycam footage",
        "Medication experience"
      ],
      "fr": [
        "Secteur 2140 Borgerhout",
        "Garde chats et promenades chiens",
        "Vidéos HD",
        "Gestion médicaments"
      ],
      "tr": [
        "2140 Borgerhout geneli",
        "Kedi bakımı ve köpek gezdirme",
        "HD Kamera görüntüleri",
        "İlaç verme tecrübesi"
      ]
    },
    "image": "/images/cat_feeding.png",
    "geo": {
      "latitude": 51.2144,
      "longitude": 4.4372
    },
    "keywords": {
      "nl": [
        "kattenoppas Borgerhout",
        "hondenoppas Borgerhout",
        "kattenoppas 2140",
        "hondenuitlater Borgerhout"
      ],
      "en": [
        "cat sitter Borgerhout",
        "dog walking Borgerhout 2140"
      ],
      "fr": [
        "garde chat Borgerhout"
      ],
      "tr": [
        "Borgerhout kedi bakıcısı",
        "Borgerhout köpek gezdirme"
      ]
    }
  },
  {
    "slug": "aartselaar",
    "postalCode": "2630",
    "name": {
      "nl": "Aartselaar & Cleydael",
      "en": "Aartselaar & Cleydael Area",
      "fr": "Aartselaar & Cleydael",
      "tr": "Aartselaar Bölgesi"
    },
    "title": {
      "nl": "Kattenoppas & Hondenoppas aan Huis in Aartselaar (2630)",
      "en": "In-Home Cat & Dog Sitting in Aartselaar (2630)",
      "fr": "Garde de Chat et Chien à Domicile à Aartselaar (2630)",
      "tr": "Aartselaar (2630) Bölgesinde Evde Kedi ve Köpek Bakımı"
    },
    "subtitle": {
      "nl": "Professionele thuisverzorging in Aartselaar centrum, Cleydael en Lindenbos.",
      "en": "Professional in-home care in Aartselaar center, Cleydael, and Lindenbos.",
      "fr": "Soins professionnels à Aartselaar et ses quartiers résidentiels.",
      "tr": "Aartselaar merkez ve Cleydael civarında profesyonel evde bakım."
    },
    "description": {
      "nl": "In Aartselaar (2630) staat KattenHond garant voor betrouwbare huisbezoeken en wandelingen met 100% HD Bodycam videobewijs.",
      "en": "In Aartselaar (2630), KattenHond guarantees dependable home visits and dog walks with HD video proof.",
      "fr": "À Aartselaar (2630), vos compagnons reçoivent des soins exemplaires à domicile.",
      "tr": "Aartselaar (2630) bölgesinde evcil hayvanlarınız için en güvenli evde bakım."
    },
    "highlights": {
      "nl": [
        "Postcode 2630 Aartselaar",
        "HD Bodycam opnames",
        "Bioloog toezicht",
        "Gratis planten en post service"
      ],
      "en": [
        "Postal code 2630 Aartselaar",
        "HD Bodycam footage",
        "Biologist supervision",
        "Free plant and mail care"
      ],
      "fr": [
        "Secteur 2630 Aartselaar",
        "Vidéos HD Bodycam",
        "Supervision biologique",
        "Plantes et courrier inclus"
      ],
      "tr": [
        "2630 Aartselaar geneli",
        "HD Kamera kaydı",
        "Biyolog denetimi",
        "Ücretsiz çiçek ve posta hizmeti"
      ]
    },
    "image": "/images/cat_health.png",
    "geo": {
      "latitude": 51.1333,
      "longitude": 4.3833
    },
    "keywords": {
      "nl": [
        "kattenoppas Aartselaar",
        "hondenoppas Aartselaar",
        "kattenoppas 2630",
        "hondenuitlaatservice Aartselaar"
      ],
      "en": [
        "cat sitter Aartselaar",
        "dog sitting Aartselaar 2630"
      ],
      "fr": [
        "garde chat Aartselaar"
      ],
      "tr": [
        "Aartselaar kedi bakıcısı",
        "Aartselaar köpek bakıcısı"
      ]
    }
  },
  {
    "slug": "zwijndrecht",
    "postalCode": "2050 & 3330",
    "name": {
      "nl": "Zwijndrecht & Linkeroever",
      "en": "Zwijndrecht & Left Bank",
      "fr": "Zwijndrecht & Rive Gauche",
      "tr": "Zwijndrecht ve Linkeroever"
    },
    "title": {
      "nl": "Kattenoppas & Hondenoppas aan Huis in Zwijndrecht & Linkeroever",
      "en": "In-Home Pet Sitting & Dog Walking in Zwijndrecht & Linkeroever",
      "fr": "Garde de Chat et Chien à Zwijndrecht & Rive Gauche Anvers",
      "tr": "Zwijndrecht ve Linkeroever Bölgesinde Evde Kedi ve Köpek Bakımı"
    },
    "subtitle": {
      "nl": "Verzorging aan huis in Linkeroever (2050), Zwijndrecht, Burcht en Sint-Anneke.",
      "en": "In-home pet care across Linkeroever (2050), Zwijndrecht, Burcht, and Sint-Anneke.",
      "fr": "Garde à domicile à Linkeroever (2050), Zwijndrecht et Burcht.",
      "tr": "Linkeroever (2050), Zwijndrecht, Burcht ve Sint-Anneke bölgesinde evde bakım."
    },
    "description": {
      "nl": "Woont u op Linkeroever of in Zwijndrecht/Burcht? KattenHond verzorgt uw katten en honden aan huis met wandelingen langs het Galgenweel en HD Bodycam beelden.",
      "en": "Living on Linkeroever or in Zwijndrecht? KattenHond cares for your pets at home with scenic walks around Galgenweel and HD video proof.",
      "fr": "Sur la Rive Gauche ou à Zwijndrecht, confiez vos animaux à KattenHond pour des visites et promenades sécurisées.",
      "tr": "Linkeroever ve Zwijndrecht bölgesinde Galgenweel yürüyüşleri ve evde kedi-köpek bakımı."
    },
    "highlights": {
      "nl": [
        "Linkeroever (2050), Zwijndrecht & Burcht",
        "Wandelingen rond Galgenweel & Sint-Anneke",
        "HD Bodycam videobewijs",
        "Ervaring met katten en honden"
      ],
      "en": [
        "Linkeroever (2050), Zwijndrecht & Burcht",
        "Walks around Galgenweel lake",
        "HD Bodycam proof",
        "Expertise with cats & dogs"
      ],
      "fr": [
        "Linkeroever 2050 et Zwijndrecht",
        "Promenades au lac Galgenweel",
        "Vidéos HD",
        "Soins félins et canins"
      ],
      "tr": [
        "Linkeroever (2050) ve Zwijndrecht",
        "Galgenweel gölü çevresinde yürüyüş",
        "HD Kamera kaydı",
        "Kedi ve köpek uzmanlığı"
      ]
    },
    "image": "/images/cat_playing.png",
    "geo": {
      "latitude": 51.2167,
      "longitude": 4.3333
    },
    "keywords": {
      "nl": [
        "kattenoppas Linkeroever",
        "kattenoppas Zwijndrecht",
        "hondenoppas Linkeroever",
        "kattenoppas 2050",
        "hondenuitlaatservice Zwijndrecht"
      ],
      "en": [
        "cat sitter Linkeroever",
        "dog sitting Zwijndrecht 2050"
      ],
      "fr": [
        "garde chat Linkeroever Anvers",
        "garde chien Zwijndrecht"
      ],
      "tr": [
        "Linkeroever kedi bakıcısı",
        "Zwijndrecht köpek bakıcısı"
      ]
    }
  },
  {
    "slug": "lier",
    "postalCode": "2500",
    "name": {
      "nl": "Lier & Zimmertoren",
      "en": "Lier & Nete Area",
      "fr": "Lierre & Environs",
      "tr": "Lier Bölgesi"
    },
    "title": {
      "nl": "Kattenoppas & Hondenoppas aan Huis in Lier (2500)",
      "en": "In-Home Cat Sitting & Dog Walking in Lier (2500)",
      "fr": "Garde de Chat et Chien à Domicile à Lierre (2500)",
      "tr": "Lier (2500) Bölgesinde Evde Kedi ve Köpek Bakımı"
    },
    "subtitle": {
      "nl": "Professionele verzorging aan huis in Lier centrum, Koningshooikt en langs de Nete.",
      "en": "Professional pet sitting in Lier center, Koningshooikt, and along the Nete river.",
      "fr": "Garde d'animaux professionnelle à Lierre et Koningshooikt.",
      "tr": "Lier merkez, Koningshooikt ve Nete nehri boyunda profesyonel evde bakım."
    },
    "description": {
      "nl": "In de Pallieterstad Lier (2500) biedt KattenHond professionele kattenoppas en hondenoppas aan huis. Rust in uw vertrouwde woning met 100% HD Bodycam opnames.",
      "en": "In Lier (2500), KattenHond delivers trusted in-home pet visits and dog walks with 100% HD video reporting.",
      "fr": "À Lierre (2500), vos animaux profitent de soins attentionnés directement chez vous.",
      "tr": "Lier (2500) bölgesinde tatiliniz süresince kedi ve köpeklerinize evinizde en iyi bakımı sağlıyoruz."
    },
    "highlights": {
      "nl": [
        "Postcode 2500 Lier & Koningshooikt",
        "HD Bodycam garantie",
        "Wandelingen langs de Nete",
        "Planten en post service"
      ],
      "en": [
        "Postal code 2500 Lier covered",
        "HD Bodycam guarantee",
        "Nete river walks",
        "Plant and mail care"
      ],
      "fr": [
        "Secteur 2500 Lierre",
        "Garantie Bodycam HD",
        "Promenades au bord de la Nèthe",
        "Plantes et courrier inclus"
      ],
      "tr": [
        "2500 Lier ve Koningshooikt",
        "HD Kamera garantisi",
        "Nete nehri kenarında yürüyüş",
        "Çiçek ve posta bakımı"
      ]
    },
    "image": "/images/cat_emergency.png",
    "geo": {
      "latitude": 51.1311,
      "longitude": 4.5703
    },
    "keywords": {
      "nl": [
        "kattenoppas Lier",
        "hondenoppas Lier",
        "kattenoppas 2500",
        "hondenuitlaatservice Lier"
      ],
      "en": [
        "cat sitter Lier Belgium",
        "dog sitting Lier 2500"
      ],
      "fr": [
        "garde chat Lierre 2500"
      ],
      "tr": [
        "Lier kedi bakıcısı",
        "Lier köpek bakıcısı"
      ]
    }
  },
  {
    "slug": "beveren",
    "postalCode": "9120",
    "name": {
      "nl": "Beveren & Waasland",
      "en": "Beveren & Waasland",
      "fr": "Beveren & Pays de Waes",
      "tr": "Beveren ve Waasland"
    },
    "title": {
      "nl": "Kattenoppas & Hondenoppas aan Huis in Beveren (9120)",
      "en": "In-Home Pet Sitting in Beveren & Waasland (9120)",
      "fr": "Garde de Chat et Chien à Domicile à Beveren (9120)",
      "tr": "Beveren (9120) ve Waasland Bölgesinde Evde Kedi ve Köpek Bakımı"
    },
    "subtitle": {
      "nl": "Thuiszorg in Beveren, Melsele, Haasdonk, Kallo en Vrasene.",
      "en": "In-home care in Beveren, Melsele, Haasdonk, Kallo, and Vrasene.",
      "fr": "Garde à domicile à Beveren, Melsele et Haasdonk.",
      "tr": "Beveren, Melsele, Haasdonk ve Kallo'da evde kedi-köpek bakımı."
    },
    "description": {
      "nl": "In Beveren (9120) en het Waasland verzorgt KattenHond uw katten en honden met dagelijkse bezoeken, wandelingen en HD Bodycam beelden.",
      "en": "In Beveren (9120) and the Waasland area, KattenHond provides certified in-home pet sitting and dog walks.",
      "fr": "À Beveren (9120), nous assurons des visites à domicile avec enregistrement vidéo HD.",
      "tr": "Beveren (9120) bölgesinde güvenilir evde kedi ve köpek bakımı hizmetleri."
    },
    "highlights": {
      "nl": [
        "Postcode 9120 Beveren & Melsele",
        "HD Bodycam videobewijs",
        "Wandelingen & Kattenzorg",
        "Biologische expertise"
      ],
      "en": [
        "Postcode 9120 Beveren covered",
        "HD Bodycam video proof",
        "Dog walks & cat care",
        "Biologist expertise"
      ],
      "fr": [
        "Secteur 9120 Beveren",
        "Vidéos HD Bodycam",
        "Promenades et soins",
        "Expertise biologique"
      ],
      "tr": [
        "9120 Beveren ve Melsele",
        "HD Kamera video kaydı",
        "Köpek gezdirme ve kedi bakımı",
        "Biyolog uzmanlığı"
      ]
    },
    "image": "/images/cat_feeding.png",
    "geo": {
      "latitude": 51.2133,
      "longitude": 4.2564
    },
    "keywords": {
      "nl": [
        "kattenoppas Beveren",
        "hondenoppas Beveren",
        "kattenoppas 9120",
        "dierenoppas Waasland"
      ],
      "en": [
        "cat sitter Beveren",
        "dog sitting Beveren 9120"
      ],
      "fr": [
        "garde chat Beveren"
      ],
      "tr": [
        "Beveren kedi bakıcısı",
        "Beveren köpek bakıcısı"
      ]
    }
  },
  {
    "slug": "sint-niklaas",
    "postalCode": "9100",
    "name": {
      "nl": "Sint-Niklaas & Waas",
      "en": "Sint-Niklaas City",
      "fr": "Saint-Nicolas & Waes",
      "tr": "Sint-Niklaas Bölgesi"
    },
    "title": {
      "nl": "Kattenoppas & Hondenoppas aan Huis in Sint-Niklaas (9100)",
      "en": "In-Home Cat Sitting & Dog Walking in Sint-Niklaas (9100)",
      "fr": "Garde de Chat et Chien à Domicile à Saint-Nicolas (9100)",
      "tr": "Sint-Niklaas (9100) Bölgesinde Evde Kedi ve Köpek Bakımı"
    },
    "subtitle": {
      "nl": "Betrouwbare thuiszorg in Sint-Niklaas, Belsele, Nieuwkerken en Sinaai.",
      "en": "Reliable pet sitting across Sint-Niklaas, Belsele, and Nieuwkerken.",
      "fr": "Garde professionnelle à Saint-Nicolas, Belsele et Sinaai.",
      "tr": "Sint-Niklaas, Belsele ve Sinaai bölgesinde profesyonel evde bakım."
    },
    "description": {
      "nl": "In Sint-Niklaas (9100) biedt KattenHond eersteklas katten- en hondenoppas aan huis. Volledig transparant met HD Bodycam beelden.",
      "en": "In Sint-Niklaas (9100), KattenHond delivers first-class in-home cat and dog sitting with HD video transparency.",
      "fr": "À Saint-Nicolas (9100), confiez vos animaux à KattenHond pour des soins de premier choix.",
      "tr": "Sint-Niklaas (9100) bölgesinde evcil hayvanlarınız için yüksek standartlı evde bakım."
    },
    "highlights": {
      "nl": [
        "Postcode 9100 Sint-Niklaas",
        "HD Bodycam garantie",
        "Medicatie en dieet opvolging",
        "Gratis plantenservice"
      ],
      "en": [
        "Postal code 9100 Sint-Niklaas",
        "HD Bodycam guarantee",
        "Medication and diet monitoring",
        "Free plant care"
      ],
      "fr": [
        "Secteur 9100 Saint-Nicolas",
        "Garantie Bodycam HD",
        "Suivi médical et alimentaire",
        "Arrosage gratuit"
      ],
      "tr": [
        "9100 Sint-Niklaas geneli",
        "HD Kamera garantisi",
        "İlaç ve beslenme takibi",
        "Ücretsiz bitki sulama"
      ]
    },
    "image": "/images/cat_health.png",
    "geo": {
      "latitude": 51.1644,
      "longitude": 4.1436
    },
    "keywords": {
      "nl": [
        "kattenoppas Sint-Niklaas",
        "hondenoppas Sint-Niklaas",
        "kattenoppas 9100",
        "hondenuitlater Sint-Niklaas"
      ],
      "en": [
        "cat sitter Sint-Niklaas",
        "dog sitting Sint-Niklaas 9100"
      ],
      "fr": [
        "garde chat Saint-Nicolas 9100"
      ],
      "tr": [
        "Sint-Niklaas kedi bakıcısı",
        "Sint-Niklaas köpek bakıcısı"
      ]
    }
  },
  {
    "slug": "gent",
    "postalCode": "9000",
    "name": {
      "nl": "Gent & Omgeving",
      "en": "Ghent City & Area",
      "fr": "Gand & Environs",
      "tr": "Gent ve Çevresi"
    },
    "title": {
      "nl": "Professionele Kattenoppas & Hondenoppas aan Huis in Gent (9000)",
      "en": "Professional In-Home Cat & Dog Sitting in Ghent (9000)",
      "fr": "Garde Professionnelle de Chat et Chien à Domicile à Gand (9000)",
      "tr": "Gent (9000) Bölgesinde Profesyonel Evde Kedi ve Köpek Bakımı"
    },
    "subtitle": {
      "nl": "Zorgeloze thuisopvang in Gent centrum, Ledeberg, Sint-Amandsberg, Wondelgem en Gentbrugge.",
      "en": "Carefree home pet visits in Ghent center, Ledeberg, Sint-Amandsberg, and Gentbrugge.",
      "fr": "Garde à domicile à Gand centre, Ledeberg, Sint-Amandsberg et Gentbrugge.",
      "tr": "Gent merkez, Ledeberg, Sint-Amandsberg ve Gentbrugge'de evde bakım."
    },
    "description": {
      "nl": "In de bruisende stad Gent (9000, 9040, 9050) biedt KattenHond professionele kattenoppas en hondenoppas aan huis. Uw huisdier blijft ontspannen in zijn eigen huis met 100% HD Bodycam videobewijs.",
      "en": "In historic Ghent (9000), KattenHond delivers trusted in-home pet visits and dog walks with complete video transparency.",
      "fr": "À Gand (9000), bénéficiez d'une garde féline et canine d'excellence à votre domicile.",
      "tr": "Gent (9000) bölgesinde kedi ve köpekleriniz için konforlu, kameralı evde bakım hizmeti."
    },
    "highlights": {
      "nl": [
        "Postcode 9000 Gent & deelgemeenten",
        "Biologische expertise voor katten & honden",
        "HD Bodycam opnames bij elk bezoek",
        "Inclusief planten en post service"
      ],
      "en": [
        "Postal code 9000 Ghent & suburbs",
        "Biologist pet expertise",
        "HD Bodycam recordings",
        "Plants and mail care included"
      ],
      "fr": [
        "Secteur 9000 Gand et communes",
        "Expertise biologique",
        "Enregistrement Bodycam HD",
        "Plantes et courrier inclus"
      ],
      "tr": [
        "9000 Gent ve tüm mahalleler",
        "Biyolog onaylı kedi-köpek bakımı",
        "Her ziyarette HD kamera kaydı",
        "Çiçek ve posta bakımı dahil"
      ]
    },
    "image": "/images/cat_playing.png",
    "geo": {
      "latitude": 51.0543,
      "longitude": 3.7174
    },
    "keywords": {
      "nl": [
        "kattenoppas Gent",
        "hondenoppas Gent",
        "hondenuitlaatservice Gent",
        "kattenoppas 9000",
        "dierenoppas Gent"
      ],
      "en": [
        "cat sitter Ghent",
        "dog walking Ghent 9000",
        "pet sitter Ghent Belgium"
      ],
      "fr": [
        "garde chat Gand",
        "garde chien Gand 9000"
      ],
      "tr": [
        "Gent kedi bakıcısı",
        "Gent köpek bakıcısı",
        "Gent pet sitter"
      ]
    }
  },
  {
    "slug": "brussel",
    "postalCode": "1000",
    "name": {
      "nl": "Brussel / Bruxelles",
      "en": "Brussels Capital Region",
      "fr": "Bruxelles Capitale",
      "tr": "Brüksel Başkent Bölgesi"
    },
    "title": {
      "nl": "Meertalige Kattenoppas & Hondenoppas aan Huis in Brussel (1000)",
      "en": "Multilingual In-Home Cat & Dog Sitting in Brussels (1000)",
      "fr": "Garde Multilingue de Chat et Chien à Domicile à Bruxelles (1000)",
      "tr": "Brüksel (1000) Bölgesinde Çok Dilli Evde Kedi ve Köpek Bakımı"
    },
    "subtitle": {
      "nl": "Professionele service in Brussel centrum, Elsene, Ukkel, Etterbeek en Schaarbeek.",
      "en": "Professional service in Brussels center, Ixelles, Uccle, Etterbeek, and Schaerbeek.",
      "fr": "Service professionnel à Bruxelles centre, Ixelles, Uccle et Etterbeek.",
      "tr": "Brüksel merkez, Ixelles, Uccle, Etterbeek ve Schaerbeek'te diplomatik ve expat standardında evde bakım."
    },
    "description": {
      "nl": "In de Europese hoofdstad Brussel (1000, 1050, 1180) biedt KattenHond meertalige (Nederlands, Engels, Frans, Turks) kattenoppas en hondenoppas aan huis met 100% HD Bodycam opnames.",
      "en": "In Brussels (1000), KattenHond offers multilingual (Dutch, English, French, Turkish) in-home pet sitting and dog walks with full video transparency.",
      "fr": "À Bruxelles (1000), KattenHond propose des services multilingues de garde de chats et chiens à domicile avec caméras corporelles HD.",
      "tr": "Brüksel (1000) bölgesinde expatlar ve yerleşikler için 4 dilde (Felemenkçe, İngilizce, Fransızca, Türkçe) güvenilir ve kameralı evde kedi-köpek bakımı."
    },
    "highlights": {
      "nl": [
        "Meertalig team (NL, EN, FR, TR)",
        "Brussel 1000, Elsene, Ukkel & Etterbeek",
        "HD Bodycam beelden na elk bezoek",
        "Ervaring met internationale klanten & expats"
      ],
      "en": [
        "Multilingual sitters (NL, EN, FR, TR)",
        "Brussels 1000, Ixelles, Uccle & Etterbeek",
        "HD Bodycam footage per visit",
        "Trusted by expats & diplomats"
      ],
      "fr": [
        "Équipe multilingue (NL, EN, FR, TR)",
        "Bruxelles 1000, Ixelles, Uccle, Etterbeek",
        "Vidéos HD Bodycam",
        "Idéal pour expats et diplomates"
      ],
      "tr": [
        "4 dilde hizmet veren ekip (NL, EN, FR, TR)",
        "Brüksel 1000, Ixelles, Uccle ve Etterbeek",
        "Her ziyarette HD kamera kaydı",
        "Expatlar ve uluslararası çalışanlar için ideal"
      ]
    },
    "image": "/images/cat_bodycam.png",
    "geo": {
      "latitude": 50.8503,
      "longitude": 4.3517
    },
    "keywords": {
      "nl": [
        "kattenoppas Brussel",
        "hondenoppas Brussel",
        "cat sitter Brussels",
        "garde chat Bruxelles",
        "hondenuitlaatservice Brussel"
      ],
      "en": [
        "cat sitter Brussels",
        "dog walking Brussels 1000",
        "expat pet sitting Brussels"
      ],
      "fr": [
        "garde chat Bruxelles",
        "garde chien Bruxelles 1000",
        "dog sitting Bruxelles"
      ],
      "tr": [
        "Brüksel kedi bakıcısı",
        "Brüksel köpek bakıcısı",
        "Brüksel pet sitter"
      ]
    }
  },
  {
    "slug": "antwerpen-zuid",
    "postalCode": "2000 & 2018",
    "name": {
      "nl": "Antwerpen Zuid & Centrum",
      "en": "Antwerp South & Center",
      "fr": "Anvers Sud & Centre",
      "tr": "Anvers Güney ve Merkez"
    },
    "title": {
      "nl": "Kattenoppas & Hondenoppas aan Huis in Antwerpen Zuid & Centrum",
      "en": "In-Home Cat Sitting & Dog Walking in Antwerp South & Center",
      "fr": "Garde de Chat et Chien à Domicile à Anvers Sud & Centre",
      "tr": "Anvers Güney ve Merkezde Evde Kedi ve Köpek Bakımı"
    },
    "subtitle": {
      "nl": "Betrouwbare thuisverzorging in het Zuid, Eilandje, Historisch Centrum en Markgrave.",
      "en": "Trusted pet sitting in the South, Eilandje, Historic Center, and Markgrave.",
      "fr": "Garde de confiance au Zuid, Eilandje et Centre Historique.",
      "tr": "Zuid, Eilandje ve Tarihi Merkezde profesyonel evde bakım."
    },
    "description": {
      "nl": "Woont u op het hippe Zuid (postcode 2000 of 2018) of in het centrum van Antwerpen? KattenHond biedt professionele kattenoppas en hondenoppas aan huis. Onder leiding van een bioloog krijgt uw huisdier de allerbeste zorg met 100% HD Bodycam garantie.",
      "en": "Living in Antwerp South (postal code 2000 or 2018) or downtown? KattenHond provides verified in-home cat visits and dog walking with HD bodycam proof.",
      "fr": "Vous résidez à Anvers Sud (2000, 2018) ou au centre-ville ? KattenHond assure la garde de vos chats et chiens avec expertise biologique.",
      "tr": "Anvers Zuid (2000, 2018) veya merkezde mi yaşıyorsunuz? KattenHond ile evinizde kedi ve köpeklerinize sevgi dolu, kameralı bakım."
    },
    "highlights": {
      "nl": [
        "Binnen 15 minuten ter plaatse op het Zuid & Centrum",
        "Biologische expertise voor katten en honden",
        "HD Bodycam videobewijs na elk bezoek",
        "Planten water geven en postbus legen inbegrepen"
      ],
      "en": [
        "Quick 15-min arrival across South & Center",
        "Biologist expertise in feline & canine care",
        "HD Bodycam video proof after every visit",
        "Complimentary plant watering & mail retrieval"
      ],
      "fr": [
        "Intervention rapide au Zuid & Centre",
        "Expertise biologique féline et canine",
        "Preuve vidéo Bodycam HD après chaque visite",
        "Arrosage des plantes et courrier inclus"
      ],
      "tr": [
        "Zuid ve Merkezde 15 dakikada hızlı ziyaret",
        "Kedi ve köpeklerde biyolog uzmanlığı",
        "Her ziyarette HD Yaka Kamerası kaydı",
        "Çiçek sulama ve posta toplama ücretsiz"
      ]
    },
    "image": "/images/cat_playing.png",
    "geo": {
      "latitude": 51.21,
      "longitude": 4.39
    },
    "keywords": {
      "nl": [
        "kattenoppas Antwerpen Zuid",
        "kattenoppas 2000",
        "kattenoppas 2018",
        "hondenoppas Antwerpen Zuid",
        "hondenuitlaatservice 2000"
      ],
      "en": [
        "cat sitter Antwerp South",
        "pet sitter Antwerp 2000",
        "dog walker Antwerp center"
      ],
      "fr": [
        "garde chat Anvers Sud",
        "garde chien Anvers 2000"
      ],
      "tr": [
        "Anvers güney kedi bakıcısı",
        "Anvers merkez köpek bakıcısı"
      ]
    }
  },
  {
    "slug": "berchem",
    "postalCode": "2600",
    "name": {
      "nl": "Berchem & Zurenborg",
      "en": "Berchem & Zurenborg",
      "fr": "Berchem & Zurenborg",
      "tr": "Berchem ve Zurenborg"
    },
    "title": {
      "nl": "Kattenoppas & Hondenoppas aan Huis in Berchem & Zurenborg (2600)",
      "en": "In-Home Cat & Dog Sitting in Berchem & Zurenborg (2600)",
      "fr": "Garde de Chat et Chien à Domicile à Berchem (2600)",
      "tr": "Berchem ve Zurenborg (2600) Bölgesinde Evde Kedi ve Köpek Bakımı"
    },
    "subtitle": {
      "nl": "Zorgeloze thuisverzorging in Zurenborg, Oud-Berchem, Groenenhoek en Pulhof.",
      "en": "Carefree home pet care in Zurenborg, Old Berchem, Groenenhoek, and Pulhof.",
      "fr": "Soins sans stress à Zurenborg, Vieux-Berchem et Pulhof.",
      "tr": "Zurenborg, Eski Berchem ve Pulhof mahallelerinde evde kedi-köpek bakımı."
    },
    "description": {
      "nl": "Woont u in Berchem (postcode 2600) of de prachtige wijk Zurenborg? KattenHond biedt persoonlijke katten- en hondenzorg aan huis met HD Bodycam videobewijs.",
      "en": "Living in Berchem (postal code 2600) or Zurenborg? KattenHond delivers trusted in-home pet visits and dog walks with full video transparency.",
      "fr": "À Berchem (2600) ou Zurenborg, confiez vos animaux à KattenHond pour des soins de premier choix.",
      "tr": "Berchem (2600) ve Zurenborg bölgesinde kedi ve köpekleriniz için en güvenilir evde bakım hizmeti."
    },
    "highlights": {
      "nl": [
        "Volledige dekking in Berchem 2600 & Zurenborg",
        "HD Bodycam videobewijs",
        "Wandelingen in Zurenborg en parken",
        "Planten en post gratis verzorgd"
      ],
      "en": [
        "Full coverage in 2600 Berchem & Zurenborg",
        "HD Bodycam video proof",
        "Walks in local green parks",
        "Plants & mail included free"
      ],
      "fr": [
        "Couverture totale Berchem 2600",
        "Vidéos HD Bodycam",
        "Promenades et jeux",
        "Plantes et courrier inclus"
      ],
      "tr": [
        "Tüm Berchem 2600 ve Zurenborg genelinde",
        "HD Kamera video kaydı",
        "Parklarda köpek gezdirme",
        "Çiçek ve posta ücretsiz"
      ]
    },
    "image": "/images/cat_feeding.png",
    "geo": {
      "latitude": 51.19,
      "longitude": 4.43
    },
    "keywords": {
      "nl": [
        "kattenoppas Berchem",
        "kattenoppas Zurenborg",
        "hondenoppas Berchem",
        "kattenoppas 2600",
        "hondenuitlaatservice Berchem"
      ],
      "en": [
        "cat sitter Berchem",
        "dog walking Berchem 2600"
      ],
      "fr": [
        "garde chat Berchem 2600"
      ],
      "tr": [
        "Berchem kedi bakıcısı",
        "Zurenborg köpek bakıcısı"
      ]
    }
  },
  {
    "slug": "deurne",
    "postalCode": "2100",
    "name": {
      "nl": "Deurne & Rivierenhof",
      "en": "Deurne & Rivierenhof",
      "fr": "Deurne & Rivierenhof",
      "tr": "Deurne ve Rivierenhof"
    },
    "title": {
      "nl": "Kattenoppas & Hondenoppas aan Huis in Deurne & Rivierenhof (2100)",
      "en": "In-Home Cat & Dog Sitting in Deurne & Rivierenhof (2100)",
      "fr": "Garde de Chat et Chien à Domicile à Deurne (2100)",
      "tr": "Deurne ve Rivierenhof (2100) Bölgesinde Evde Kedi ve Köpek Bakımı"
    },
    "subtitle": {
      "nl": "Thuisverzorging in Deurne Noord, Deurne Zuid, Bosuil en nabij het Rivierenhof.",
      "en": "In-home care in Deurne North, Deurne South, Bosuil, and near Rivierenhof.",
      "fr": "Garde à domicile à Deurne Nord, Sud et près du Rivierenhof.",
      "tr": "Deurne Kuzey, Güney, Bosuil ve Rivierenhof parkı civarında evde bakım."
    },
    "description": {
      "nl": "In Deurne (postcode 2100) verzorgt KattenHond uw katten en honden aan huis. Met wandelingen in het prachtige Rivierenhof park en HD Bodycam beelden.",
      "en": "In Deurne (2100), KattenHond provides certified in-home cat visits and scenic Rivierenhof dog walks with HD video proof.",
      "fr": "À Deurne (2100), vos animaux profitent de visites à domicile et de balades au Rivierenhof.",
      "tr": "Deurne (2100) bölgesinde Rivierenhof parkı yürüyüşleri ve evde kedi-köpek bakımı."
    },
    "highlights": {
      "nl": [
        "Postcode 2100 Deurne & Bosuil",
        "Wandelingen in park Rivierenhof",
        "100% HD Bodycam garantie",
        "Medicatie en dieet toediening"
      ],
      "en": [
        "Postal code 2100 Deurne covered",
        "Rivierenhof park walking sessions",
        "100% HD Bodycam guarantee",
        "Medication & diet administration"
      ],
      "fr": [
        "Secteur 2100 Deurne",
        "Balades au parc Rivierenhof",
        "Garantie Bodycam HD",
        "Gestion médicaments"
      ],
      "tr": [
        "2100 Deurne ve Bosuil",
        "Rivierenhof parkında yürüyüşler",
        "100% HD Kamera garantisi",
        "İlaç ve beslenme takibi"
      ]
    },
    "image": "/images/cat_emergency.png",
    "geo": {
      "latitude": 51.22,
      "longitude": 4.46
    },
    "keywords": {
      "nl": [
        "kattenoppas Deurne",
        "kattenoppas Rivierenhof",
        "hondenoppas Deurne",
        "kattenoppas 2100",
        "hondenuitlaatservice Deurne"
      ],
      "en": [
        "cat sitter Deurne Antwerp",
        "dog walking Deurne 2100"
      ],
      "fr": [
        "garde chat Deurne 2100"
      ],
      "tr": [
        "Deurne kedi bakıcısı",
        "Deurne köpek gezdirme"
      ]
    }
  },
  {
    "slug": "merksem",
    "postalCode": "2170",
    "name": {
      "nl": "Merksem & Bouckenborgh",
      "en": "Merksem & Bouckenborgh",
      "fr": "Merksem & Bouckenborgh",
      "tr": "Merksem Bölgesi"
    },
    "title": {
      "nl": "Kattenoppas & Hondenoppas aan Huis in Merksem (2170)",
      "en": "In-Home Cat & Dog Sitting in Merksem (2170)",
      "fr": "Garde de Chat et Chien à Domicile à Merksem (2170)",
      "tr": "Merksem (2170) Bölgesinde Evde Kedi ve Köpek Bakımı"
    },
    "subtitle": {
      "nl": "Professionele thuiszorg in Merksem centrum, Bredabaan, Rerum Novarum en park Bouckenborgh.",
      "en": "Professional pet care in Merksem center, Bredabaan, and Bouckenborgh park.",
      "fr": "Soins professionnels à Merksem, Bredabaan et parc Bouckenborgh.",
      "tr": "Merksem merkez, Bredabaan ve Bouckenborgh parkı civarında evde bakım."
    },
    "description": {
      "nl": "Woont u in Merksem (postcode 2170)? KattenHond verzorgt uw katten en honden aan huis met de hoogste standaarden en 100% HD Bodycam videobewijs.",
      "en": "Living in Merksem (2170)? KattenHond provides loving in-home cat sitting and dog walks with full video transparency.",
      "fr": "À Merksem (2170), nous assurons des visites et promenades sécurisées à votre domicile.",
      "tr": "Merksem (2170) bölgesinde yaşayan hayvanseverler için güvenilir evde kedi-köpek bakımı."
    },
    "highlights": {
      "nl": [
        "Dekking in heel Merksem 2170",
        "HD Bodycam opname bij elk bezoek",
        "Ervaring met jonge en oudere dieren",
        "Plantenverzorging en postbusservice"
      ],
      "en": [
        "Covers all Merksem 2170",
        "HD Bodycam video per visit",
        "Experienced with young & senior pets",
        "Plant watering & mail service"
      ],
      "fr": [
        "Tout Merksem 2170",
        "Vidéos HD à chaque visite",
        "Soins pour chiots, chatons et seniors",
        "Plantes et courrier inclus"
      ],
      "tr": [
        "Tüm Merksem 2170 genelinde",
        "Her ziyarette HD kamera kaydı",
        "Yavru ve yaşlı hayvan tecrübesi",
        "Çiçek sulama ve posta toplama"
      ]
    },
    "image": "/images/cat_health.png",
    "geo": {
      "latitude": 51.24,
      "longitude": 4.44
    },
    "keywords": {
      "nl": [
        "kattenoppas Merksem",
        "hondenoppas Merksem",
        "kattenoppas 2170",
        "hondenuitlaatservice Merksem"
      ],
      "en": [
        "cat sitter Merksem",
        "dog sitting Merksem 2170"
      ],
      "fr": [
        "garde chat Merksem 2170"
      ],
      "tr": [
        "Merksem kedi bakıcısı",
        "Merksem köpek bakıcısı"
      ]
    }
  },
  {
    "slug": "wilrijk",
    "postalCode": "2610",
    "name": {
      "nl": "Wilrijk & Park van Eden",
      "en": "Wilrijk & Park van Eden",
      "fr": "Wilrijk & Parc d'Eden",
      "tr": "Wilrijk Bölgesi"
    },
    "title": {
      "nl": "Kattenoppas & Hondenoppas aan Huis in Wilrijk (2610)",
      "en": "In-Home Cat Sitting & Dog Walking in Wilrijk (2610)",
      "fr": "Garde de Chat et Chien à Domicile à Wilrijk (2610)",
      "tr": "Wilrijk (2610) Bölgesinde Evde Kedi ve Köpek Bakımı"
    },
    "subtitle": {
      "nl": "Thuisverzorging in Wilrijk centrum, Oosterveld, Valaar, Neerland en Park van Eden.",
      "en": "In-home pet visits across Wilrijk center, Oosterveld, Valaar, and Neerland.",
      "fr": "Visites à domicile à Wilrijk centre, Oosterveld, Valaar et Neerland.",
      "tr": "Wilrijk merkez, Oosterveld, Valaar ve Park van Eden civarında evde bakım."
    },
    "description": {
      "nl": "In Wilrijk (postcode 2610) staat KattenHond garant voor deskundige katten- en hondenzorg aan huis. Van medicatie en insulinespuitjes tot actieve wandelingen met HD Bodycam garantie.",
      "en": "In Wilrijk (2610), KattenHond provides expert in-home cat care and dog walking with HD bodycam video proof.",
      "fr": "À Wilrijk (2610), notre équipe veille sur vos animaux avec rigueur et bienveillance.",
      "tr": "Wilrijk (2610) bölgesinde ilaç uygulaması, köpek yürüyüşü ve evde kedi bakımı."
    },
    "highlights": {
      "nl": [
        "Heel Wilrijk 2610 & Oosterveld",
        "Ervaring met medicatie & injecties",
        "HD Bodycam videobewijs",
        "Gratis planten en post service"
      ],
      "en": [
        "Covers all Wilrijk 2610 & Oosterveld",
        "Medication & injection expertise",
        "HD Bodycam video proof",
        "Free plant & mail service"
      ],
      "fr": [
        "Tout Wilrijk 2610",
        "Expérience médicale et piqûres",
        "Preuve vidéo HD",
        "Plantes et courrier inclus"
      ],
      "tr": [
        "Tüm Wilrijk 2610 ve Oosterveld",
        "İlaç ve iğne tecrübesi",
        "HD Kamera video kaydı",
        "Ücretsiz çiçek ve posta"
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
        "hondenoppas Wilrijk",
        "kattenoppas 2610",
        "hondenuitlaatservice Wilrijk",
        "dierenoppas Oosterveld"
      ],
      "en": [
        "cat sitter Wilrijk",
        "dog walking Wilrijk 2610"
      ],
      "fr": [
        "garde chat Wilrijk 2610"
      ],
      "tr": [
        "Wilrijk kedi bakıcısı",
        "Wilrijk köpek bakıcısı"
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
