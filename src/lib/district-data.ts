export interface DistrictInfo {
  slug: string;
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
    slug: 'antwerpen-zuid',
    postalCode: '2000 & 2018',
    name: {
      nl: 'Antwerpen Zuid & Centrum',
      en: 'Antwerp South & Centre',
      fr: 'Anvers Sud & Centre',
      tr: 'Anvers Güney & Merkez'
    },
    title: {
      nl: 'Professionele Kattenoppas aan Huis in Antwerpen Zuid & Het Eilandje',
      en: 'Professional In-Home Cat Sitting in Antwerp South & Eilandje',
      fr: 'Garde de Chat Professionnelle à Domicile à Anvers Sud & Eilandje',
      tr: 'Anvers Güney ve Merkez Bölgelerinde Profesyonel Evde Kedi Bakıcısı'
    },
    subtitle: {
      nl: 'Exclusieve kedi bakımı met HD Bodycam garantie in Het Zuid, Zurenborg en Het Eilandje.',
      en: 'Exclusive cat care with HD Bodycam verification in Het Zuid, Zurenborg, and Het Eilandje.',
      fr: 'Soins félins exclusifs avec garantie vidéo HD Bodycam au Zuid et à l\'Eilandje.',
      tr: 'Het Zuid, Zurenborg ve Het Eilandje bölgelerinde yaka kameralı özel kedi bakımı.'
    },
    description: {
      nl: 'Woont u in Het Zuid, Zurenborg, Het Eilandje of het historische centrum van Antwerpen? Katten biedt de meest hoogwaardige kattenoppas aan huis. Als biologen zorgen wij ervoor dat uw kat geen stress ervaart van een kattenhotel, maar heerlijk in zijn eigen vertrouwde appartement of woning blijft.',
      en: 'Living in Het Zuid, Zurenborg, Het Eilandje, or the historic centre of Antwerp? Katten delivers top-tier in-home cat care. As biologists, we ensure your cat experiences zero hotel stress, remaining comfortably in their own home.',
      fr: 'Vous habitez au Zuid, à Zurenborg, à l\'Eilandje ou dans le centre d\'Anvers? Katten offre une garde à domicile de haute qualité. En tant que biologistes, nous veillons à ce que votre chat ne subisse aucun stress.',
      tr: 'Anvers Güney (Het Zuid), Zurenborg, Het Eilandje veya tarihi merkezde mi yaşıyorsunuz? Katten en kaliteli evde kedi bakımını sunar. Biyolog ekibimizle kediniz otel stresi yaşamadan kendi evinde kalır.'
    },
    highlights: {
      nl: ['Snelle sleuteloverdracht in postcode 2000 & 2018', 'HD Bodycam videobewijs na elk bezoek', 'Biyolojik ve medikal uzmanlık', 'Planten water geven en post verzamelen inbegrepen'],
      en: ['Fast key pickup in postal codes 2000 & 2018', 'HD Bodycam video updates after every visit', 'Biological and medical cat care expertise', 'Plant watering and mail collection included'],
      fr: ['Remise de clé rapide code postal 2000 & 2018', 'Preuve vidéo HD Bodycam après chaque visite', 'Expertise biologique et médicale', 'Arrosage des plantes et relève du courrier inclus'],
      tr: ['2000 ve 2018 posta kodlarında hızlı anahtar teslimi', 'Her ziyarette HD Yaka Kamerası kaydı', 'Biyoloji eğitimi almış uzman bakım', 'Çiçek sulama ve posta toplama hizmeti dahil']
    },
    image: '/images/cat_security.png',
    geo: { latitude: 51.2100, longitude: 4.3950 },
    keywords: {
      nl: ['kattenoppas Antwerpen Zuid', 'kattenoppas 2000 Antwerpen', 'kattenoppas Het Eilandje', 'kattenoppas Zurenborg'],
      en: ['cat sitter Antwerp South', 'pet sitting 2018 Antwerp', 'cat care Eilandje Antwerp'],
      fr: ['garde de chat Anvers Sud', 'cat sitter 2000 Anvers'],
      tr: ['Anvers Güney kedi bakıcısı', 'Anvers merkez kedi bakımı']
    }
  },
  {
    slug: 'berchem',
    postalCode: '2600',
    name: {
      nl: 'Berchem',
      en: 'Berchem',
      fr: 'Berchem',
      tr: 'Berchem'
    },
    title: {
      nl: 'Betrouwbare Kattenoppas aan Huis in Berchem (2600)',
      en: 'Reliable In-Home Cat Sitting in Berchem (2600)',
      fr: 'Garde de Chat de Confiance à Domicile à Berchem (2600)',
      tr: 'Berchem Bölgesinde Güvenilir Evde Kedi Bakıcısı (2600)'
    },
    subtitle: {
      nl: 'Dagelijkse verzorging, speelsessies en medische controle voor katten in Berchem.',
      en: 'Daily care, play sessions, and medical monitoring for cats in Berchem.',
      fr: 'Soins quotidiens, sessions de jeu et suivi médical pour chats à Berchem.',
      tr: 'Berchem\'deki kediler için günlük bakım, oyun saatleri ve medikal takip.'
    },
    description: {
      nl: 'Bent u op zoek naar een ervaren kattenoppas in Berchem (postcode 2600)? Katten verzorgt uw kat in zijn vertrouwde omgeving. Onze bezoeken omvatten voeding, vers water, kattenbak reiniging, borstelen en HD Bodycam rapportage.',
      en: 'Searching for an experienced cat sitter in Berchem (postal code 2600)? Katten looks after your feline in their familiar home. Our visits include feeding, fresh water, litter cleaning, grooming, and HD Bodycam reports.',
      fr: 'Vous cherchez un garde de chat expérimenté à Berchem (code postal 2600)? Katten s\'occupe de votre chat dans son environnement habituel. Nos visites comprennent repas, eau fraîche, litière et vidéo HD.',
      tr: 'Berchem bölgesinde (posta kodu 2600) deneyimli bir kedi bakıcısı mı arıyorsunuz? Katten kedinize kendi evinde bakar. Ziyaretlerimizde mama, taze su, kum temizliği ve HD Bodycam kaydı yer alır.'
    },
    highlights: {
      nl: ['Lokaal actief in Berchem en Pulhof', 'Medische verzorging en insuline toedienen', 'Geen reiskosten binnen 2600', 'HD Bodycam videobewijs'],
      en: ['Locally active in Berchem and Pulhof', 'Medical care and insulin administration', 'No travel fees within 2600', 'HD Bodycam video proof'],
      fr: ['Service local à Berchem et Pulhof', 'Soins médicaux et insuline', 'Sans frais de déplacement à 2600', 'Preuve vidéo Bodycam'],
      tr: ['Berchem ve Pulhof bölgesinde lokal hizmet', 'İlaç ve insülin uygulaması uzmanlığı', '2600 bölgesinde ek yol ücreti yok', 'HD Yaka kamerası kaydı']
    },
    image: '/images/cat_health.png',
    geo: { latitude: 51.1920, longitude: 4.4320 },
    keywords: {
      nl: ['kattenoppas Berchem', 'kattenoppas 2600', 'oppas aan huis Berchem Antwerpen'],
      en: ['cat sitter Berchem Antwerp', 'pet sitting Berchem 2600'],
      fr: ['garde de chat Berchem Anvers'],
      tr: ['Berchem kedi bakıcısı', 'Anvers Berchem kedi bakımı']
    }
  },
  {
    slug: 'deurne',
    postalCode: '2100',
    name: {
      nl: 'Deurne',
      en: 'Deurne',
      fr: 'Deurne',
      tr: 'Deurne'
    },
    title: {
      nl: 'Professionele Kattenoppas aan Huis in Deurne (2100)',
      en: 'Professional In-Home Cat Sitter in Deurne (2100)',
      fr: 'Garde de Chat Professionnelle à Domicile à Deurne (2100)',
      tr: 'Deurne Bölgesinde Profesyonel Evde Kedi Bakıcısı (2100)'
    },
    subtitle: {
      nl: 'Zorgeloos op reis met onze deskundige kattenzorg in Deurne Noord & Zuid.',
      en: 'Travel worry-free with our expert cat care in Deurne North & South.',
      fr: 'Voyagez l\'esprit tranquille grâce à nos soins félins à Deurne.',
      tr: 'Deurne Kuzey ve Güney bölgelerinde kafa rahatlığı sağlayan kedi bakımı.'
    },
    description: {
      nl: 'Woont u in Deurne (postcode 2100)? Laat uw kat niet naar een pension gaan, maar kies voor de biologische kattenoppas aan huis van Katten. Wij komen 1 of 2 keer per dag langs voor liefdevolle verzorging en woningbeheer.',
      en: 'Living in Deurne (postal code 2100)? Skip the cattery and choose Katten’s biologist-led in-home sitting. We visit 1 or 2 times daily for loving care and home maintenance.',
      fr: 'Vous résidez à Deurne (code postal 2100)? Choisissez la garde à domicile de Katten. Nous intervenons 1 ou 2 fois par jour pour des soins attentionnés.',
      tr: 'Deurne bölgesinde (posta kodu 2100) mi yaşıyorsunuz? Kedinizi otele bırakmak yerine Katten evde bakım hizmetini seçin. Günde 1 veya 2 kez ziyaret ile sevgi dolu bakım sunuyoruz.'
    },
    highlights: {
      nl: ['Volledige dekking in Deurne Noord & Zuid', 'Bodycam videoupdates bij elk bezoek', 'Inclusief brievenbus en plantenservice', 'Vaste scherpe tarieven'],
      en: ['Full coverage in Deurne North & South', 'Bodycam video updates every visit', 'Includes mail and plant watering service', 'Fixed transparent rates'],
      fr: ['Couverture complète Deurne Nord & Sud', 'Vidéos Bodycam à chaque visite', 'Service courrier et plantes inclus', 'Tarifs transparents'],
      tr: ['Deurne Kuzey ve Güney tüm sokaklarda hizmet', 'Her ziyarette Bodycam video güncellemesi', 'Posta ve çiçek sulama dahil', 'Şeffaf sabit paket fiyatları']
    },
    image: '/images/cat_playing.png',
    geo: { latitude: 51.2200, longitude: 4.4600 },
    keywords: {
      nl: ['kattenoppas Deurne', 'kattenoppas 2100 Deurne', 'thuisoppas kat Deurne Antwerpen'],
      en: ['cat sitter Deurne Antwerp', 'pet sitting 2100 Deurne'],
      fr: ['garde de chat Deurne Anvers'],
      tr: ['Deurne kedi bakıcısı', 'Anvers Deurne kedi bakımı']
    }
  },
  {
    slug: 'merksem',
    postalCode: '2170',
    name: {
      nl: 'Merksem',
      en: 'Merksem',
      fr: 'Merksem',
      tr: 'Merksem'
    },
    title: {
      nl: 'Kattenoppas aan Huis in Merksem (2170)',
      en: 'In-Home Cat Sitter in Merksem (2170)',
      fr: 'Garde de Chat à Domicile à Merksem (2170)',
      tr: 'Merksem Bölgesinde Evde Kedi Bakıcısı (2170)'
    },
    subtitle: {
      nl: 'Liefdevolle en professionele verzorging voor uw kat in Merksem.',
      en: 'Loving and professional care for your cat in Merksem.',
      fr: 'Soins attentionnés et professionnels pour votre chat à Merksem.',
      tr: 'Merksem\'deki kediniz için sevgi dolu ve profesyonel evde bakım.'
    },
    description: {
      nl: 'In Merksem (postcode 2170) staat Katten voor u klaar. Wij bieden persoonlijke kattenoppas aan huis met biologische deskundigheid. Uw kat blijft ontspannen thuis en u krijgt dagelijks een HD Bodycam video toegestuurd.',
      en: 'In Merksem (postal code 2170), Katten is your trusted choice. We offer personalized in-home cat care grounded in biological science. Your cat stays relaxed at home while you get daily HD Bodycam videos.',
      fr: 'À Merksem (code postal 2170), Katten est votre partenaire de confiance. Votre chat reste serein chez vous et vous recevez des vidéos HD quotidiennes.',
      tr: 'Merksem (posta kodu 2170) bölgesinde Katten yanınızda. Biyolog eğitimiyle kişiselleştirilmiş evde kedi bakımı sunuyoruz. Kediniz evinde kalırken siz her gün HD Bodycam videolarını izleyin.'
    },
    highlights: {
      nl: ['Lokale dekking in heel Merksem', 'Biologische gedragscontrole', 'HD Bodycam garantie', 'Sleuteloverdracht bij u thuis'],
      en: ['Local coverage across Merksem', 'Biological behavioral monitoring', 'HD Bodycam guarantee', 'Key collection at your home'],
      fr: ['Service local à Merksem', 'Suivi comportemental biologique', 'Garantie Bodycam HD', 'Remise des clés à domicile'],
      tr: ['Tüm Merksem\'de lokal hizmet', 'Biyolojik davranış ve stres takibi', 'HD Bodycam garantisi', 'Evinizde kapıdan anahtar teslimi']
    },
    image: '/images/cat_feeding.png',
    geo: { latitude: 51.2450, longitude: 4.4450 },
    keywords: {
      nl: ['kattenoppas Merksem', 'kattenoppas 2170', 'huisdieroppas Merksem Antwerpen'],
      en: ['cat sitter Merksem Antwerp', 'pet sitting Merksem 2170'],
      fr: ['garde de chat Merksem Anvers'],
      tr: ['Merksem kedi bakıcısı', 'Anvers Merksem kedi bakımı']
    }
  },
  {
    slug: 'wilrijk',
    postalCode: '2610',
    name: {
      nl: 'Wilrijk',
      en: 'Wilrijk',
      fr: 'Wilrijk',
      tr: 'Wilrijk'
    },
    title: {
      nl: 'Kattenoppas aan Huis in Wilrijk & Edegem (2610)',
      en: 'In-Home Cat Sitter in Wilrijk & Edegem (2610)',
      fr: 'Garde de Chat à Domicile à Wilrijk & Edegem (2610)',
      tr: 'Wilrijk ve Edegem Bölgesinde Evde Kedi Bakıcısı (2610)'
    },
    subtitle: {
      nl: 'Medische en biologische kattenverzorging aan huis in Wilrijk.',
      en: 'Medical and biological in-home cat care in Wilrijk.',
      fr: 'Soins félins médicaux et biologiques à domicile à Wilrijk.',
      tr: 'Wilrijk bölgesinde medikal ve biyolojik evde kedi bakımı.'
    },
    description: {
      nl: 'Woont u in Wilrijk (postcode 2610) of nabij Edegem? Katten verzorgt uw huisdier met de hoogste precisie. Van insuline toedienen tot gezellige speelsessies, wij zorgen ervoor dat uw kat niets tekortkomt.',
      en: 'Living in Wilrijk (postal code 2610) or near Edegem? Katten cares for your pet with top precision. From insulin delivery to play sessions, we ensure your cat lacks nothing.',
      fr: 'Vous résidez à Wilrijk (code postal 2610) ou près d\'Edegem? Katten s\'occupe de votre animal avec précision. De l\'insuline aux jeux, votre chat ne manquera de rien.',
      tr: 'Wilrijk (posta kodu 2610) veya Edegem sınırında mı yaşıyorsunuz? Katten evcil hayvanınıza hassasiyetle bakar. İnsülin uygulamasından oyun saatlerine kadar her şey eksiksiz yapılır.'
    },
    highlights: {
      nl: ['Snel ter plaatse in Wilrijk & Edegem', 'Ervaring met medicatie & spuitjes', 'Inclusief planten en post service', 'HD Bodycam rapportage'],
      en: ['Prompt visits in Wilrijk & Edegem', 'Medication & injection expertise', 'Includes plant & mail service', 'HD Bodycam reporting'],
      fr: ['Interventions rapides à Wilrijk & Edegem', 'Expérience médicaments & piqûres', 'Service plantes et courrier inclus', 'Rapportage Bodycam HD'],
      tr: ['Wilrijk ve Edegem\'de hızlı ziyaret', 'İlaç ve insülin iğnesi tecrübesi', 'Çiçek sulama ve posta hizmeti dahil', 'HD Bodycam raporlaması']
    },
    image: '/images/cat_meds.png',
    geo: { latitude: 51.1700, longitude: 4.3900 },
    keywords: {
      nl: ['kattenoppas Wilrijk', 'kattenoppas 2610', 'kattenoppas Edegem', 'medische kattenoppas Wilrijk'],
      en: ['cat sitter Wilrijk Antwerp', 'pet sitter Wilrijk 2610'],
      fr: ['garde de chat Wilrijk Anvers'],
      tr: ['Wilrijk kedi bakıcısı', 'Anvers Wilrijk kedi bakımı']
    }
  }
];

export function getDistrictBySlug(slug: string): DistrictInfo | undefined {
  return districts.find((d) => d.slug === slug);
}

export function getAllDistricts(): DistrictInfo[] {
  return districts;
}
