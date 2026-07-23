const fs = require('fs');

const newPosts = [
  // TOPIC 21: Outer Districts of Antwerp (Merksem, Ekeren, Wilrijk, Hoboken)
  {
    id: "21-nl",
    slug: "kattenoppas-merksem-ekeren-wilrijk-hoboken-aan-huis",
    title: "Kattenoppas aan huis in Merksem, Ekeren, Wilrijk & Hoboken",
    excerpt: "Zoekt u een betrouwbare oppas in Merksem, Ekeren, Wilrijk of Hoboken? Ontdek onze dagelijkse huisbezoeken met HD bodycam.",
    content: `## Betrouwbare kattenoppas in Merksem, Ekeren, Wilrijk & Hoboken

Niet alleen in het centrum van Antwerpen, maar ook in de omliggende districten **Merksem**, **Ekeren**, **Wilrijk** en **Hoboken** is **Katten** uw vaste partner voor professionele kattenoppas aan huis.

### Waarom wijkbewoners in Merksem & Wilrijk voor ons kiezen:

- **Geen reiskostentoeslag:** Duidelijke tarieven zonder verrassingen achteraf.
- **HD Bodycam Veiligheid:** U krijgt na elk bezoek video-bewijs van de verzorging.
- **Biologische Expertise:** Onze gediplomeerde bioloog ziet snel of uw kat gezond en stressvrij is.

Wilt u een oppas reserveren in Merksem, Ekeren, Wilrijk of Hoboken? Bekijk onze [Diensten](/nl/diensten) of neem [Contact](/nl/contact) op!`,
    date: "2026-07-23",
    readTime: "3 min",
    author: "Katten Team",
    image: "/images/cat_security.png",
    seoTitle: "Kattenoppas Merksem, Ekeren, Wilrijk & Hoboken | Katten",
    seoDescription: "Zoekt u een professionele kattenoppas aan huis in Merksem, Ekeren, Wilrijk of Hoboken? Dagelijkse bezoeken met HD bodycam videobewijs.",
    locale: "nl",
    keywords: ["kattenoppas Merksem", "kattenoppas Ekeren", "kattenoppas Wilrijk", "kattenoppas Hoboken", "thuisoppas kat Antwerpen districten"]
  },
  {
    id: "21-en",
    slug: "cat-sitter-merksem-ekeren-wilrijk-hoboken-antwerp",
    title: "In-home Cat Sitter in Merksem, Ekeren, Wilrijk & Hoboken",
    excerpt: "Looking for a trusted cat sitter in Merksem, Ekeren, Wilrijk, or Hoboken? Daily home visits with HD bodycam proof.",
    content: `## Reliable cat sitting across Merksem, Ekeren, Wilrijk & Hoboken

Beyond Antwerp city centre, **Katten** offers dedicated in-home cat sitting in **Merksem**, **Ekeren**, **Wilrijk**, and **Hoboken**.

### Why district residents trust Katten:

- **No Travel Surcharges:** Transparent pricing without hidden travel fees.
- **HD Bodycam Proof:** Watch video updates of your cat after every visit.
- **Biological Standards:** Professional assessment of your cat's mood and health.

Book your district cat sitter today! Check our [Services](/en/diensten) or [Contact](/en/contact) us!`,
    date: "2026-07-23",
    readTime: "3 min",
    author: "Katten Team",
    image: "/images/cat_security.png",
    seoTitle: "Cat Sitter Merksem, Ekeren, Wilrijk & Hoboken | Katten Antwerp",
    seoDescription: "Need an in-home cat sitter in Merksem, Ekeren, Wilrijk, or Hoboken? Professional daily care with bodycam video updates.",
    locale: "en",
    keywords: ["cat sitter Merksem", "cat sitter Ekeren", "cat sitter Wilrijk", "cat sitter Hoboken Antwerp"]
  },
  {
    id: "21-fr",
    slug: "garde-de-chat-merksem-ekeren-wilrijk-hoboken-anvers",
    title: "Garde de chat à domicile à Merksem, Ekeren, Wilrijk & Hoboken",
    excerpt: "Vous cherchez un garde de chat à Merksem, Ekeren, Wilrijk ou Hoboken? Découvez nos visites quotidiennes avec caméra vidéo.",
    content: `## Garde de chat professionnelle à Merksem, Ekeren, Wilrijk et Hoboken

**Katten** intervient à **Merksem**, **Ekeren**, **Wilrijk** et **Hoboken** pour garder votre chat à domicile.

- **Vidéo Bodycam après chaque visite.**
- **Soins personnalisés par une biologiste.**

Découvrez nos [Tarifs](/fr/diensten)!`,
    date: "2026-07-23",
    readTime: "3 min",
    author: "Katten Team",
    image: "/images/cat_security.png",
    seoTitle: "Garde de Chat Merksem, Ekeren, Wilrijk & Hoboken | Katten",
    seoDescription: "Garde de chat à domicile à Merksem, Ekeren, Wilrijk et Hoboken. Visites quotidiennes sécurisées par caméra vidéo.",
    locale: "fr",
    keywords: ["garde chat Merksem", "cat sitter Ekeren", "garde chat Wilrijk Anvers"]
  },
  {
    id: "21-tr",
    slug: "merksem-ekeren-wilrijk-hoboken-kedi-bakicisi-anvers",
    title: "Merksem, Ekeren, Wilrijk & Hoboken Bölgelerinde Evde Kedi Bakıcısı",
    excerpt: "Merksem, Ekeren, Wilrijk veya Hoboken'da güvenilir kedi bakıcısı mı arıyorsunuz? Yaka kamerası garantili ziyaretler.",
    content: `## Merksem, Ekeren, Wilrijk ve Hoboken bölgelerinde kedi bakımı

Anvers merkez dışında **Merksem**, **Ekeren**, **Wilrijk** ve **Hoboken** bölgelerinde de **Katten** evinize kadar gelerek kedi bakımı sağlar.

- **Her ziyarette HD Bodycam video kaydı.**
- **Biyolog güvencesiyle sağlık ve yemek takibi.**

[Hizmetlerimizi](/tr/diensten) inceleyin!`,
    date: "2026-07-23",
    readTime: "3 min",
    author: "Katten Team",
    image: "/images/cat_security.png",
    seoTitle: "Merksem, Ekeren, Wilrijk & Hoboken Kedi Bakıcısı | Katten",
    seoDescription: "Merksem, Ekeren, Wilrijk ve Hoboken bölgelerinde evde kedi bakıcısı hizmeti. Yaka kameralı güvenli bakım.",
    locale: "tr",
    keywords: ["Merksem kedi bakıcısı", "Ekeren kedi bakıcısı", "Wilrijk kedi bakıcısı", "Hoboken kedi bakıcı Anvers"]
  },

  // TOPIC 22: Twice a day cat sitting (2 keer per dag)
  {
    id: "22-nl",
    slug: "kattenoppas-2-keer-per-dag-aan-huis-antwerpen",
    title: "Kattenoppas 2 keer per dag aan huis in Antwerpen: Voor wie is dit nodig?",
    excerpt: "Heeft uw kitten, seniorkat of kat met medische behoefte 2 bezoeken per dag nodig? Lees wanneer dubbele zorg essentieel is.",
    content: `## Waarom kiezen voor 2 kattenoppas bezoeken per dag in Antwerpen?

Voor sommige katten is één bezoek per dag niet voldoende. **Katten** biedt een speciaal 2-dagelijks bezoekpakket in Antwerpen.

### Wie heeft 2 bezoeken per dag nodig?

1. **Kittens:** Kittens hebben veel energie en kleinere maagjes; ze moeten meerdere keren per dag eten en spelen.
2. **Diabetische Katten:** Insuline moet stipt om de 12 uur worden toegediend.
3. **Seniorkatten:** Oudere katten hebben frequente hydratatie en gezelschap nodig.
4. **Katten met Scheidingsangst:** 2 bezoeken per dag halveren de eenzame uren.

Wilt u 2 bezoeken per dag inroosteren? Bekijk ons [Premium Pakket](/nl/diensten) of neem [Contact](/nl/contact) op!`,
    date: "2026-07-23",
    readTime: "3 min",
    author: "Dr. Katten - Bioloog",
    image: "/images/cat_meds.png",
    seoTitle: "Kattenoppas 2 Keer Per Dag Antwerpen | Premium Zorg | Katten",
    seoDescription: "Kattenoppas 2 keer per dag aan huis in Antwerpen voor kittens, diabetische katten en senioren. Dubbele verzorging met bodycam.",
    locale: "nl",
    keywords: ["kattenoppas 2 keer per dag Antwerpen", "twee bezoeken per dag kattenoppas", "diabetische kat 2 bezoeken Antwerpen"]
  },
  {
    id: "22-en",
    slug: "cat-sitter-twice-a-day-antwerp-in-home-care",
    title: "Cat sitter twice a day in Antwerp: Who needs double daily visits?",
    excerpt: "Does your kitten, senior cat, or diabetic feline require 2 daily visits? Learn when twice-a-day care is necessary in Antwerp.",
    content: `## Why choose twice-daily cat sitting in Antwerp?

For certain cats, a single daily visit isn't enough. **Katten** offers a dedicated 2-visit daily package across Antwerp.

### When are 2 visits per day required?

1. **Kittens:** High energy and small stomach capacity require frequent feeding and play.
2. **Diabetic Cats:** Insulin injections must be given strictly 12 hours apart.
3. **Senior Cats:** Require frequent hydration checks and companionship.
4. **Anxious Cats:** Two visits cut loneliness in half.

Schedule twice-daily visits in Antwerp! Check our [Premium Plan](/en/diensten)!`,
    date: "2026-07-23",
    readTime: "3 min",
    author: "Dr. Katten - Biologist",
    image: "/images/cat_meds.png",
    seoTitle: "Cat Sitter Twice a Day Antwerp | Double Daily Visits | Katten",
    seoDescription: "Need a cat sitter twice a day in Antwerp? In-home care for kittens, diabetic, and senior cats with HD video updates.",
    locale: "en",
    keywords: ["cat sitter twice a day Antwerp", "two visits a day pet sitter Antwerp", "diabetic cat care Antwerp"]
  },
  {
    id: "22-fr",
    slug: "garde-de-chat-2-fois-par-jour-anvers-soins-renforces",
    title: "Garde de chat 2 fois par jour à Anvers: Quand est-ce nécessaire?",
    excerpt: "Votre chaton ou votre chat âgé a-t-il besoin de 2 visites par jour? Découvrez notre forfait double visite à Anvers.",
    content: `## Service de garde de chat 2 fois par jour à Anvers

Pour les chatons, les chats âgés ou sous insuline, une seule visite ne suffit pas. **Katten** propose 2 visites par jour.

- **Respect strict des horaires d'insuline (toutes les 12h).**
- **Double présence et jeux quotidiens.**

Consultez notre [Forfait Premium](/fr/diensten)!`,
    date: "2026-07-23",
    readTime: "3 min",
    author: "Dr. Katten - Biologiste",
    image: "/images/cat_meds.png",
    seoTitle: "Garde de Chat 2 Fois par Jour Anvers | Katten",
    seoDescription: "Garde de chat 2 fois par jour à domicile à Anvers. Idéal pour chatons, chats âgés et diabétiques.",
    locale: "fr",
    keywords: ["garde chat 2 fois par jour Anvers", "visite chat matin et soir Anvers"]
  },
  {
    id: "22-tr",
    slug: "gunde-2-defa-kedi-bakicisi-anvers-cift-ziyaret",
    title: "Anvers'te Günde 2 Defa Kedi Bakıcısı: Kimler İçin Gereklidir?",
    excerpt: "Yavru kediniz, yaşlı kediniz veya şeker hastası kediniz günde 2 ziyarete mi ihtiyaç duyuyor? Çift ziyaret paketimizi keşfedin.",
    content: `## Anvers'te günde 2 defa kedi bakımı neden gereklidir?

Bazı kediler için günde tek ziyaret yeterli değildir. **Katten** Anvers'te günde 2 ziyaret seçeneği sunar.

### Kimlerin günde 2 ziyarete ihtiyacı var?
1. **Yavru Kediler (Kitten):** Sık acıkırlar ve oyun enerjisi yüksektir.
2. **Diyabetli Kediler:** İnsülin iğnesi tam 12 saatte bir yapılmalıdır.
3. **Yaşlı Kediler:** Sık su değişimi ve ilgi isterler.

[Premium Paketimizi](/tr/diensten) inceleyin!`,
    date: "2026-07-23",
    readTime: "3 min",
    author: "Dr. Katten - Biyolog",
    image: "/images/cat_meds.png",
    seoTitle: "Günde 2 Defa Kedi Bakıcısı Anvers | Çift Ziyaret | Katten",
    seoDescription: "Anvers'te günde 2 defa evde kedi bakıcısı. Yavru, yaşlı ve diyabetli kediler için sabah ve akşam bakımı.",
    locale: "tr",
    keywords: ["günde 2 defa kedi bakıcısı Anvers", "sabah akşam kedi bakıcısı Anvers", "diyabetli kedi bakımı Anvers"]
  },

  // TOPIC 23: Plant watering and home duties included
  {
    id: "23-nl",
    slug: "kattenoppas-inclusief-planten-water-geven-brievenbus-antwerpen",
    title: "Kattenoppas inclusief planten water geven en brievenbus leegmaken in Antwerpen",
    excerpt: "Zoekt u een oppas die ook uw kamerplanten verzorgt en de post ophaalt? Ontdek onze complete woning- en kattenverzorging.",
    content: `## Kattenzorg én woningzorg in één pakket in Antwerpen

Als u op vakantie bent, wilt u niet alleen dat uw kat vrolijk is, maar ook dat uw kamerplanten overleven en uw brievenbus niet uitpuilt.

### Extra diensten inbegrepen bij Katten:

- **Planten Water Geven:** Kamerplanten en tuinplanten krijgen precies genoeg water.
- **Brievenbus Leegmaken:** Post en folders worden netjes uit het zicht gelegd.
- **Gordijnen & Verlichting:** Regelmatig openen/sluiten om inbraak af te schrikken.
- **Afvalcontainers Buitenzetten:** Op de juiste ophaaldag in Antwerpen.

Vraag uw complete oppaspakket aan via [Contact](/nl/contact)!`,
    date: "2026-07-23",
    readTime: "2 min",
    author: "Katten Team",
    image: "/images/cat_plants.png",
    seoTitle: "Kattenoppas met Planten Water Geven Antwerpen | Katten",
    seoDescription: "Professionele kattenoppas in Antwerpen die ook uw planten water geeft en de brievenbus leegmaakt. Complete zorg tijdens uw vakantie.",
    locale: "nl",
    keywords: ["kattenoppas planten water geven Antwerpen", "huisoppas post ophalen Antwerpen", "kattenoppas kamerplanten"]
  },
  {
    id: "23-en",
    slug: "cat-sitter-includes-plant-watering-mail-collection-antwerp",
    title: "Cat sitter including plant watering and mail collection in Antwerp",
    excerpt: "Looking for a pet sitter who also waters your house plants and collects mail? Discover our complete home and cat care service.",
    content: `## Cat care and house sitting combined in Antwerp

When traveling, you want your cat cared for AND your indoor plants watered and mail collected.

### Extra services included with Katten:

- **Plant Watering:** Houseplants and garden greens watered according to instructions.
- **Mail Retrieval:** Mail and packages moved safely out of view.
- **Burglary Deterrence:** Adjusting blinds and lights to maintain a lived-in look.
- **Trash Can Management:** Putting bins out on Antwerp collection days.

Book complete home & cat care via our [Contact Form](/en/contact)!`,
    date: "2026-07-23",
    readTime: "2 min",
    author: "Katten Team",
    image: "/images/cat_plants.png",
    seoTitle: "Cat Sitter Plant Watering & Mail Collection Antwerp | Katten",
    seoDescription: "In-home cat sitting in Antwerp including plant watering, mail collection, and house checks. Total peace of mind while away.",
    locale: "en",
    keywords: ["cat sitter plant watering Antwerp", "pet sitter collect mail Antwerp", "house sitting cat care Antwerp"]
  },
  {
    id: "23-fr",
    slug: "garde-de-chat-arrosage-des-plantes-et-courrier-anvers",
    title: "Garde de chat avec arrosage des plantes et relève du courrier à Anvers",
    excerpt: "Besoin d'un garde de chat qui arrose aussi vos plantes et relève le courrier? Service complet à Anvers.",
    content: `## Garde de chat et entretien du domicile à Anvers

Pendant vos vacances, nous veillons sur votre chat ET sur votre logement à Anvers.

- **Arrosage des plantes d'intérieur et du jardin.**
- **Relève du courrier et des colis.**
- **Ouverture/fermeture des volets.**

Réservez via notre [Formulaire de Contact](/fr/contact)!`,
    date: "2026-07-23",
    readTime: "2 min",
    author: "Katten Team",
    image: "/images/cat_plants.png",
    seoTitle: "Garde Chat Arrosage Plantes & Courrier Anvers | Katten",
    seoDescription: "Garde de chat à domicile à Anvers incluant l'arrosage des plantes et la relève du courrier. Tranquillité assurée.",
    locale: "fr",
    keywords: ["garde chat arrosage plantes Anvers", "cat sitter releve courrier Anvers"]
  },
  {
    id: "23-tr",
    slug: "bitki-sulama-ve-posta-toplama-dahil-kedi-bakicisi-anvers",
    title: "Anvers'te Çiçek Sulama ve Posta Toplama Dahil Kedi Bakıcısı Hizmeti",
    excerpt: "Kedinizin yanı sıra evdeki çiçeklerinizi de sulayan ve postalarınızı toplayan kedi bakıcısı mı arıyorsunuz?",
    content: `## Anvers'te kedi bakımı ve ev hizmetleri bir arada

Tatile çıktığınızda sadece kedinizin değil, evdeki çiçeklerinizin ve postalarınızın da güvende olmasını istersiniz.

### Katten Ekstra Ev Hizmetleri:
- **Çiçek ve Bahçe Sulama:** Evdeki tüm saksı çiçekleri düzenli sulanır.
- **Posta Toplama:** Posta kutusu boşaltılarak evde biri var izlenimi verilir.
- **Çöp Kutuları:** Anvers çöp toplama gününde kutular dışarı çıkarılır.

[İletişim sayfamızdan](/tr/iletisim) hemen randevu alın!`,
    date: "2026-07-23",
    readTime: "2 min",
    author: "Katten Team",
    image: "/images/cat_plants.png",
    seoTitle: "Çiçek Sulama & Posta Toplama Dahil Kedi Bakıcısı Anvers | Katten",
    seoDescription: "Anvers'te kedi bakımıyla birlikte saksı çiçeği sulama ve posta toplama hizmeti. Eviniz ve kediniz güvende.",
    locale: "tr",
    keywords: ["Anvers çiçek sulayan kedi bakıcısı", "Anvers kedi bakımı ev hizmeti", "Anvers posta toplayan bakıcı"]
  },

  // TOPIC 24: Weekend getaway cat sitting
  {
    id: "24-nl",
    slug: "kattenoppas-voor-een-weekendje-weg-antwerpen",
    title: "Kattenoppas voor een weekendje weg in Antwerpen: Snel en flexibel",
    excerpt: "Gaat u een weekendje naar zee, de Ardennen of een stedentrip? Boek een flexibele kattenoppas aan huis in Antwerpen.",
    content: `## Snel en flexibel een kattenoppas boeken voor een weekendje weg

Gaat u een weekendje weg naar de Ardennen, de Belgische kust of een stedentrip? Ook voor korte verblijven staat **Katten** klaar in Antwerpen.

### Waarom een oppas inschakelen voor een weekend?

- **Geen buren belasten:** U hoeft uw buren niet elke keer te vragen.
- **Continuïteit:** Uw kat houdt zijn exacte eet- en speelschema aan.
- **HD Bodycam:** Zelfs voor 2 dagen ontvangt u videobewijs van het bezoek.

Plan uw weekendje weg met een gerust hart! Bekijk onze [Diensten](/nl/diensten)!`,
    date: "2026-07-23",
    readTime: "2 min",
    author: "Katten Team",
    image: "/images/cat_playing.png",
    seoTitle: "Kattenoppas Weekendje Weg Antwerpen | Flexibele Zorg",
    seoDescription: "Gaat u een weekendje weg in Antwerpen? Boek een flexibele kattenoppas aan huis voor 1 of 2 dagen met bodycam videobewijs.",
    locale: "nl",
    keywords: ["kattenoppas weekendje weg Antwerpen", "korte vakantie kattenoppas Antwerpen", "weekend oppas kat Antwerpen"]
  },
  {
    id: "24-en",
    slug: "cat-sitter-for-weekend-getaway-antwerp",
    title: "Cat sitter for a weekend getaway in Antwerp: Fast & flexible",
    excerpt: "Heading away for a weekend city trip or coast getaway? Book flexible in-home cat sitting in Antwerp.",
    content: `## Flexible cat sitting for weekend trips in Antwerp

Planning a short weekend trip to the Ardennes, Belgian coast, or abroad? **Katten** offers flexible 1 or 2 day in-home sitting across Antwerp.

### Benefits of weekend cat sitting:
- **No Neighbor Hassle:** Stop burdening neighbors with last-minute keys.
- **Routine Maintenance:** Your cat keeps their exact feeding times.
- **HD Video Proof:** Receive bodycam updates even for short 48-hour trips.

Book your weekend cat care via our [Services](/en/diensten)!`,
    date: "2026-07-23",
    readTime: "2 min",
    author: "Katten Team",
    image: "/images/cat_playing.png",
    seoTitle: "Cat Sitter Weekend Getaway Antwerp | Flexible Pet Care",
    seoDescription: "Going away for a weekend trip? Book a flexible in-home cat sitter in Antwerp for short weekend stays with HD video updates.",
    locale: "en",
    keywords: ["cat sitter weekend getaway Antwerp", "short stay cat sitter Antwerp", "weekend pet sitting Antwerp"]
  },
  {
    id: "24-fr",
    slug: "garde-de-chat-pour-un-week-end-anvers",
    title: "Garde de chat pour un week-end à Anvers: Rapide et flexible",
    excerpt: "Vous partez en week-end à la mer ou en citytrip? Réservez un garde de chat à domicile flexible à Anvers.",
    content: `## Garde de chat à domicile pour vos week-ends à Anvers

Vous partez 2 ou 3 jours en week-end? **Katten** garde votre chat à Anvers avec preuve vidéo Bodycam.

Réservez sur notre page [Services](/fr/diensten)!`,
    date: "2026-07-23",
    readTime: "2 min",
    author: "Katten Team",
    image: "/images/cat_playing.png",
    seoTitle: "Garde de Chat Week-end Anvers | Katten",
    seoDescription: "Garde de chat à domicile à Anvers pour un week-end. Service rapide et flexible avec vidéo bodycam.",
    locale: "fr",
    keywords: ["garde chat week end Anvers", "cat sitter court sejour Anvers"]
  },
  {
    id: "24-tr",
    slug: "hafta-sonu-kaamaklari-icin-kedi-bakicisi-anvers",
    title: "Hafta Sonu Kaçamakları İçin Anvers'te Kedi Bakıcısı Hizmeti",
    excerpt: "Hafta sonu deniz kenarına veya şehir dışına mı gidiyorsunuz? Anvers'te esnek 1-2 günlük evde kedi bakıcısı ayırtın.",
    content: `## Hafta sonu seyahatleri için esnek kedi bakıcısı

Hafta sonu 2 günlük bir kaçamak planladığınızda **Katten** Anvers'te yanınızda.

- Komşuları rahatsız etmeden profesyonel bakım.
- 2 günlük seyahatlerde bile HD yaka kamerası video kaydı.

[Hizmetlerimizi](/tr/diensten) inceleyin!`,
    date: "2026-07-23",
    readTime: "2 min",
    author: "Katten Team",
    image: "/images/cat_playing.png",
    seoTitle: "Hafta Sonu Kedi Bakıcısı Anvers | Esnek Bakım | Katten",
    seoDescription: "Hafta sonu seyahatleri için Anvers'te evde kedi bakıcısı. 1-2 günlük esnek kedi bakımı ve video kaydı.",
    locale: "tr",
    keywords: ["Anvers hafta sonu kedi bakıcısı", "Anvers kısa süreli kedi bakımı", "Anvers 2 günlük kedi bakıcı"]
  },

  // TOPIC 25: Specialized Medicated Cat Sitting (Insulin / Pills)
  {
    id: "25-nl",
    slug: "kattenoppas-met-ervaring-in-medicatie-en-spuitjes-antwerpen",
    title: "Kattenoppas met ervaring in medicatie en spuitjes toedienen in Antwerpen",
    excerpt: "Moet uw kat pillen slikken of insuline gespoten krijgen? Onze bioloog heeft ervaring met medische kattenzorg in Antwerpen.",
    content: `## Ervaren medische kattenoppas in Antwerpen: Pillen en insuline injecties

Wanneer een kat dagelijks medicatie nodig heeft, durven de meeste vrienden of buren het niet aan om op te passen. **Katten** biedt deskundige medische verzorging in Antwerpen onder biologisch toezicht.

### Waarin wij gespecialiseerd zijn:
- **Insuline-injecties:** Exact op tijd voor diabetische katten.
- **Pillen toedienen:** Zonder stress of dwang voor uw kat.
- **Oog- en oorzalven:** Zachte en hygiënische toepassing.
- **HD Bodycam Bewijs:** U ziet op de videobeelden precies hoe de medicatie is gegeven.

Geef uw zorgkat de beste medische aandacht in Antwerpen! Neem direct [Contact](/nl/contact) met ons op!`,
    date: "2026-07-23",
    readTime: "3 min",
    author: "Dr. Katten - Bioloog",
    image: "/images/cat_meds.png",
    seoTitle: "Kattenoppas Medicatie & Insuline Antwerpen | Katten",
    seoDescription: "Zoekt u een kattenoppas in Antwerpen die pillen en insuline-injecties kan toedienen? Ervaren medische zorg aan huis met videobewijs.",
    locale: "nl",
    keywords: ["kat medicatie toedienen oppas Antwerpen", "insuline spuiten kat oppas Antwerpen", "medische kattenoppas Antwerpen"]
  },
  {
    id: "25-en",
    slug: "cat-sitter-experienced-in-medication-and-injections-antwerp",
    title: "Cat sitter experienced in medication and insulin injections in Antwerp",
    excerpt: "Does your cat require daily pills or insulin shots? Our biologist-led service provides safe, stress-free medical pet care in Antwerp.",
    content: `## Experienced medical cat sitting in Antwerp: Pills & Insulin Shots

When a cat requires mandatory daily medication, standard sitters often refuse. **Katten** delivers certified biological pet care across Antwerp.

### What we specialize in:
- **Insulin Injections:** Precise timing for feline diabetes patients.
- **Pill Administration:** Gentle techniques without causing trauma.
- **Eye & Ear Drops:** Clean, stress-free application.
- **HD Bodycam Proof:** Watch exact video footage of medication delivery.

Contact Antwerp's trusted medical cat sitter via our [Contact Form](/en/contact)!`,
    date: "2026-07-23",
    readTime: "3 min",
    author: "Dr. Katten - Biologist",
    image: "/images/cat_meds.png",
    seoTitle: "Medication & Insulin Cat Sitter Antwerp | Katten",
    seoDescription: "Expert cat sitting in Antwerp for cats needing daily medication or insulin shots. Biologist-led care with HD bodycam proof.",
    locale: "en",
    keywords: ["cat medication sitter Antwerp", "cat insulin injection sitter Antwerp", "special care pet sitter Antwerp"]
  },
  {
    id: "25-fr",
    slug: "garde-de-chat-experimentee-en-medicaments-et-injections-anvers",
    title: "Garde de chat expérimentée en médicaments et injections à Anvers",
    excerpt: "Votre chat a-t-il besoin de pilules ou d'injections d'insuline? Notre biologiste assure une garde médicale sécurisée à Anvers.",
    content: `## Garde médicale féline spécialisée à Anvers: Pilules et Insuline

Donner des médicaments à un chat demande du savoir-faire. **Katten** assure les soins médicaux à Anvers.

- **Injections d'insuline à heures fixes.**
- **Administration douce de comprimés.**
- **Preuve vidéo HD Bodycam.**

[Contactez-nous](/fr/contact) pour vos chats nécessitant des soins!`,
    date: "2026-07-23",
    readTime: "3 min",
    author: "Dr. Katten - Biologiste",
    image: "/images/cat_meds.png",
    seoTitle: "Garde Chat Médicaments & Insuline Anvers | Katten",
    seoDescription: "Garde de chat à domicile à Anvers expérimentée dans l'administration de médicaments et d'insuline. Preuve vidéo à l'appui.",
    locale: "fr",
    keywords: ["donner medicament chat garde Anvers", "insuline chat cat sitter Anvers"]
  },
  {
    id: "25-tr",
    slug: "ila-ve-insulin-ignesinde-uzman-kedi-bakicisi-anvers",
    title: "Anvers'te İlaç ve İnsülin İğnesi Uygulamasında Uzman Kedi Bakıcısı",
    excerpt: "Kedinizin günlük hap veya insülin iğnesi vurulması mı gerekiyor? Biyolog bakıcımızla Anvers'te güvenli tıbbi bakım sunuyoruz.",
    content: `## Anvers'te medikal kedi bakımı: Hap ve insülin iğnesi uygulamaları

Kedisi düzenli ilaç kullanan kedi sahipleri komşularına emanet etmekte zorlanır. **Katten** Anvers'te biyolog güvencesiyle medikal bakım verir.

- **Diyabetik Kediler İçin İnsülin İğnesi:** Tam saatinde uygulama.
- **Hap Verilmesi:** Kediyi strese sokmadan nazik yaklaşım.
- **Bodycam Videosu:** İlacın verildiği anın HD video kaydı.

[İletişim Formumuzdan](/tr/iletisim) hemen randevu alın!`,
    date: "2026-07-23",
    readTime: "3 min",
    author: "Dr. Katten - Biyolog",
    image: "/images/cat_meds.png",
    seoTitle: "İlaç ve İnsülin İğnesi Yapan Kedi Bakıcısı Anvers | Katten",
    seoDescription: "Anvers'te kediye ilaç ve insülin iğnesi yapan profesyonel bakıcı. Biyolog onaylı ve yaka kameralı medikal kedi bakımı.",
    locale: "tr",
    keywords: ["Anvers kedi ilaç verme bakıcısı", "Anvers kedi insülin iğnesi bakıcı", "Anvers medikal kedi bakımı"]
  }
];

const file = 'src/lib/blog-data.ts';
let content = fs.readFileSync(file, 'utf8');

// Clean any previous formatting issues
content = content.replace(/\},\s*,\s*\{/g, '},\n  {');

const insertIndex = content.lastIndexOf('];');
if (insertIndex !== -1) {
  const formattedNewPosts = newPosts.map(p => `  ${JSON.stringify(p, null, 4)}`).join(',\n');
  const updatedContent = content.slice(0, insertIndex) + ',\n' + formattedNewPosts + '\n' + content.slice(insertIndex);
  fs.writeFileSync(file, updatedContent, 'utf8');
  console.log(`Successfully added ${newPosts.length} exact long-tail keyword blog posts! Total articles now 100!`);
} else {
  console.error('Could not find insert index ];');
}
