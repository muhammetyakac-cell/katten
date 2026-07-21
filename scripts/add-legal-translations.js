const fs = require('fs');

const translations = {
  nl: {
    privacy: {
      pageTitle: "Privacybeleid",
      pageSubtitle: "Uw privacy is onze prioriteit",
      lastUpdated: "Laatst bijgewerkt: juli 2026",
      intro: "Bij Katten hechten wij grote waarde aan uw privacy. Dit privacybeleid beschrijft hoe wij uw persoonsgegevens verzamelen, gebruiken en beschermen wanneer u onze website bezoekt en onze kattensitservice in Antwerpen gebruikt.",
      sections: [
        { title: "Welke gegevens verzamelen wij?", content: "Wij verzamelen de volgende gegevens wanneer u onze diensten gebruikt: uw naam, e-mailadres, telefoonnummer, adres, informatie over uw katten inclusief medische gegevens, en beelden van onze bodycam-opnames tijdens bezoeken. Wij verzamelen ook automatisch technische gegevens zoals IP-adres, browsertype en bezochte paginas via cookies." },
        { title: "Hoe gebruiken wij uw gegevens?", content: "Uw persoonsgegevens worden uitsluitend gebruikt voor: het verlenen van onze kattenverzorgingsdiensten, communicatie over boekingen en bezoeken, het delen van bodycam-opnames en dagelijkse updates over uw kat, facturering en betalingsverwerking, en het verbeteren van onze dienstverlening." },
        { title: "Bodycam-opnames", content: "Onze verzorgers dragen een bodycam tijdens elk bezoek aan uw huis. Deze opnames worden veilig opgeslagen in de cloud en zijn uitsluitend toegankelijk voor u als klant. Opnames worden na 30 dagen automatisch verwijderd, tenzij u anders verzoekt. Wij delen bodycam-beelden nooit met derden." },
        { title: "Gegevensbeveiliging", content: "Wij nemen passende technische en organisatorische maatregelen om uw gegevens te beschermen tegen ongeoorloofde toegang, verlies of wijziging. Alle gegevens worden versleuteld opgeslagen en overgedragen via beveiligde verbindingen (SSL/TLS)." },
        { title: "Uw rechten", content: "Onder de Algemene Verordening Gegevensbescherming (AVG/GDPR) heeft u het recht op: inzage in uw persoonsgegevens, rectificatie van onjuiste gegevens, verwijdering van uw gegevens, beperking van de verwerking, overdraagbaarheid van uw gegevens, en bezwaar tegen de verwerking. U kunt deze rechten uitoefenen door contact met ons op te nemen." },
        { title: "Cookies", content: "Onze website maakt gebruik van cookies om uw ervaring te verbeteren. Zie ons apart cookiebeleid voor meer informatie over welke cookies wij gebruiken en hoe u deze kunt beheren." },
        { title: "Contact", content: "Voor vragen over dit privacybeleid of om uw rechten uit te oefenen, neem contact met ons op via info@katten.be of bezoek onze contactpagina." }
      ]
    },
    terms: {
      pageTitle: "Algemene Voorwaarden",
      pageSubtitle: "Onze servicevoorwaarden",
      lastUpdated: "Laatst bijgewerkt: juli 2026",
      intro: "Deze algemene voorwaarden zijn van toepassing op alle diensten die worden aangeboden door Katten Kattensitservice, gevestigd in Antwerpen, Belgie. Door gebruik te maken van onze diensten gaat u akkoord met deze voorwaarden.",
      sections: [
        { title: "Onze Diensten", content: "Katten biedt professionele kattenverzorging aan huis, inclusief dagelijkse bezoeken, voeding, schoonmaak van de kattenbak, speeltijd, medicatietoediening en bodycam-opnames. Onze diensten zijn beschikbaar in de regio Groot-Antwerpen." },
        { title: "Boekingen en Annuleringen", content: "Boekingen kunnen worden gemaakt via onze website of per telefoon. Wij vragen een minimale boekingsperiode van 2 dagen. Annuleringen zijn kosteloos tot 48 uur voor aanvang van de dienst. Bij latere annulering wordt 50% van het totaalbedrag in rekening gebracht." },
        { title: "Prijzen en Betaling", content: "Onze tarieven zijn: Basispakket 15 euro per bezoek, Standaardpakket 22 euro per bezoek, Premiumpakket 35 euro per bezoek. Alle prijzen zijn inclusief BTW. Betaling dient te geschieden voor aanvang van de dienst." },
        { title: "Sleuteloverdracht", content: "Voor toegang tot uw woning is een sleuteloverdracht nodig. Sleutels worden veilig bewaard en na afloop van de dienst teruggegeven. Wij accepteren ook het gebruik van een sleutelkluis." },
        { title: "Verantwoordelijkheid en Verzekering", content: "Katten is verzekerd tegen aansprakelijkheid tijdens het verlenen van onze diensten. Wij nemen de grootst mogelijke zorg in acht bij de verzorging van uw kat. Bij medische noodgevallen nemen wij onmiddellijk contact op met u en/of de opgegeven dierenarts." },
        { title: "Bodycam-voorwaarden", content: "Alle bezoeken worden opgenomen via bodycam voor uw gemoedsrust en de veiligheid van uw kat. Deze opnames vallen onder ons privacybeleid en worden uitsluitend met u gedeeld." },
        { title: "Overmacht", content: "Katten is niet aansprakelijk voor het niet nakomen van verplichtingen als gevolg van overmacht, waaronder natuurrampen, extreme weersomstandigheden, of overheidsmaatregelen." },
        { title: "Toepasselijk Recht", content: "Op deze voorwaarden is het Belgisch recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechtbank te Antwerpen." }
      ]
    },
    cookies: {
      pageTitle: "Cookiebeleid",
      pageSubtitle: "Hoe wij cookies gebruiken",
      lastUpdated: "Laatst bijgewerkt: juli 2026",
      intro: "Dit cookiebeleid legt uit welke cookies onze website gebruikt, waarom wij ze gebruiken en hoe u uw cookievoorkeuren kunt beheren.",
      sections: [
        { title: "Wat zijn cookies?", content: "Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen wanneer u een website bezoekt. Ze helpen de website om uw apparaat te herkennen en informatie over uw voorkeuren te onthouden." },
        { title: "Noodzakelijke cookies", content: "Deze cookies zijn essentieel voor het functioneren van onze website. Ze maken basisfunctionaliteiten mogelijk zoals paginanavigatie, taalvoorkeur en toegang tot beveiligde delen van de website." },
        { title: "Analytische cookies", content: "Wij gebruiken analytische cookies om te begrijpen hoe bezoekers onze website gebruiken. Deze informatie helpt ons om de website te verbeteren. Wij gebruiken hiervoor geanonimiseerde gegevens." },
        { title: "Functionele cookies", content: "Functionele cookies onthouden uw voorkeuren, zoals uw taalkeuze (Nederlands, Engels, Frans of Turks). Dit zorgt ervoor dat u bij een volgend bezoek automatisch de juiste taalversie ziet." },
        { title: "Uw cookievoorkeuren beheren", content: "U kunt uw cookievoorkeuren op elk moment wijzigen via uw browserinstellingen. Houd er rekening mee dat het uitschakelen van bepaalde cookies de functionaliteit van onze website kan beinvloeden." },
        { title: "Contact", content: "Als u vragen heeft over ons cookiebeleid, neem dan contact met ons op via info@katten.be." }
      ]
    }
  },
  en: {
    privacy: {
      pageTitle: "Privacy Policy",
      pageSubtitle: "Your privacy is our priority",
      lastUpdated: "Last updated: July 2026",
      intro: "At Katten, we value your privacy greatly. This privacy policy describes how we collect, use, and protect your personal data when you visit our website and use our cat sitting service in Antwerp.",
      sections: [
        { title: "What data do we collect?", content: "We collect the following data when you use our services: your name, email address, phone number, address, information about your cats including medical data, and footage from our bodycam recordings during visits. We also automatically collect technical data such as IP address, browser type, and visited pages through cookies." },
        { title: "How do we use your data?", content: "Your personal data is used exclusively for: providing our cat care services, communication about bookings and visits, sharing bodycam recordings and daily updates about your cat, billing and payment processing, and improving our services." },
        { title: "Bodycam recordings", content: "Our carers wear a bodycam during every visit to your home. These recordings are securely stored in the cloud and are exclusively accessible to you as a client. Recordings are automatically deleted after 30 days unless you request otherwise. We never share bodycam footage with third parties." },
        { title: "Data security", content: "We take appropriate technical and organisational measures to protect your data against unauthorised access, loss, or modification. All data is stored encrypted and transferred via secure connections (SSL/TLS)." },
        { title: "Your rights", content: "Under the General Data Protection Regulation (GDPR), you have the right to: access your personal data, rectification of inaccurate data, erasure of your data, restriction of processing, data portability, and objection to processing. You can exercise these rights by contacting us." },
        { title: "Cookies", content: "Our website uses cookies to improve your experience. See our separate cookie policy for more information about which cookies we use and how you can manage them." },
        { title: "Contact", content: "For questions about this privacy policy or to exercise your rights, contact us at info@katten.be or visit our contact page." }
      ]
    },
    terms: {
      pageTitle: "Terms and Conditions",
      pageSubtitle: "Our service terms",
      lastUpdated: "Last updated: July 2026",
      intro: "These terms and conditions apply to all services offered by Katten Cat Sitting Service, based in Antwerp, Belgium. By using our services, you agree to these terms.",
      sections: [
        { title: "Our Services", content: "Katten offers professional in-home cat care, including daily visits, feeding, litter cleaning, playtime, medication administration, and bodycam recordings. Our services are available in the greater Antwerp region." },
        { title: "Bookings and Cancellations", content: "Bookings can be made through our website or by phone. We require a minimum booking period of 2 days. Cancellations are free up to 48 hours before the start of service. Late cancellations will be charged 50% of the total amount." },
        { title: "Prices and Payment", content: "Our rates are: Basic package 15 euro per visit, Standard package 22 euro per visit, Premium package 35 euro per visit. All prices include VAT. Payment must be made before the start of service unless otherwise agreed." },
        { title: "Key Handover", content: "Access to your home requires a key handover. Keys are securely stored and returned after the service ends. We also accept the use of a key safe." },
        { title: "Liability and Insurance", content: "Katten is insured for liability during the provision of our services. We take the utmost care in looking after your cat. In case of medical emergencies, we immediately contact you and/or the designated veterinarian." },
        { title: "Bodycam Terms", content: "All visits are recorded via bodycam for your peace of mind and your cat safety. These recordings fall under our privacy policy and are shared exclusively with you." },
        { title: "Force Majeure", content: "Katten is not liable for failure to fulfil obligations due to force majeure, including natural disasters, extreme weather conditions, or government measures." },
        { title: "Applicable Law", content: "These terms are governed by Belgian law. Disputes shall be submitted to the competent court in Antwerp." }
      ]
    },
    cookies: {
      pageTitle: "Cookie Policy",
      pageSubtitle: "How we use cookies",
      lastUpdated: "Last updated: July 2026",
      intro: "This cookie policy explains which cookies our website uses, why we use them, and how you can manage your cookie preferences.",
      sections: [
        { title: "What are cookies?", content: "Cookies are small text files stored on your device when you visit a website. They help the website recognise your device and remember information about your preferences." },
        { title: "Essential cookies", content: "These cookies are essential for our website to function. They enable basic functionalities such as page navigation, language preference, and access to secure areas of the website." },
        { title: "Analytical cookies", content: "We use analytical cookies to understand how visitors use our website. This information helps us improve the website. We use anonymised data for this purpose." },
        { title: "Functional cookies", content: "Functional cookies remember your preferences, such as your language choice (Dutch, English, French, or Turkish). This ensures you automatically see the correct language version on your next visit." },
        { title: "Managing your cookie preferences", content: "You can change your cookie preferences at any time through your browser settings. Please note that disabling certain cookies may affect the functionality of our website." },
        { title: "Contact", content: "If you have questions about our cookie policy, please contact us at info@katten.be." }
      ]
    }
  },
  fr: {
    privacy: {
      pageTitle: "Politique de Confidentialite",
      pageSubtitle: "Votre vie privee est notre priorite",
      lastUpdated: "Derniere mise a jour : juillet 2026",
      intro: "Chez Katten, nous attachons une grande importance a votre vie privee. Cette politique de confidentialite decrit comment nous collectons, utilisons et protegeons vos donnees personnelles.",
      sections: [
        { title: "Quelles donnees collectons-nous ?", content: "Nous collectons les donnees suivantes lorsque vous utilisez nos services : votre nom, adresse e-mail, numero de telephone, adresse, informations sur vos chats y compris les donnees medicales, et les images de nos enregistrements bodycam lors des visites." },
        { title: "Comment utilisons-nous vos donnees ?", content: "Vos donnees personnelles sont utilisees exclusivement pour : la prestation de nos services de garde de chats, la communication concernant les reservations et visites, le partage des enregistrements bodycam et mises a jour quotidiennes, la facturation et le traitement des paiements." },
        { title: "Enregistrements bodycam", content: "Nos soigneurs portent une camera corporelle lors de chaque visite. Ces enregistrements sont stockes en toute securite dans le cloud et sont accessibles exclusivement par vous. Les enregistrements sont automatiquement supprimes apres 30 jours." },
        { title: "Securite des donnees", content: "Nous prenons des mesures techniques et organisationnelles appropriees pour proteger vos donnees contre tout acces non autorise, perte ou modification. Toutes les donnees sont stockees de maniere cryptee." },
        { title: "Vos droits", content: "En vertu du Reglement General sur la Protection des Donnees (RGPD), vous avez le droit d acces, de rectification, d effacement, de limitation du traitement, de portabilite et d opposition. Contactez-nous pour exercer ces droits." },
        { title: "Cookies", content: "Notre site utilise des cookies pour ameliorer votre experience. Consultez notre politique de cookies separee pour plus d informations." },
        { title: "Contact", content: "Pour toute question, contactez-nous a info@katten.be ou visitez notre page de contact." }
      ]
    },
    terms: {
      pageTitle: "Conditions Generales",
      pageSubtitle: "Nos conditions de service",
      lastUpdated: "Derniere mise a jour : juillet 2026",
      intro: "Ces conditions generales s appliquent a tous les services offerts par Katten Service de Garde de Chats, base a Anvers, Belgique.",
      sections: [
        { title: "Nos Services", content: "Katten offre des soins professionnels pour chats a domicile, y compris les visites quotidiennes, l alimentation, le nettoyage, les jeux, l administration de medicaments et les enregistrements bodycam." },
        { title: "Reservations et Annulations", content: "Les reservations peuvent etre effectuees via notre site web ou par telephone. Periode minimale de 2 jours. Annulations gratuites jusqu a 48 heures avant le debut du service." },
        { title: "Prix et Paiement", content: "Nos tarifs : Forfait Basique 15 euros par visite, Standard 22 euros par visite, Premium 35 euros par visite. TVA incluse. Paiement avant le debut du service." },
        { title: "Remise des Cles", content: "L acces a votre domicile necessite une remise de cles. Les cles sont conservees en toute securite et restituees apres le service." },
        { title: "Responsabilite et Assurance", content: "Katten est assure en responsabilite civile. En cas d urgence medicale, nous contactons immediatement le proprietaire et/ou le veterinaire designe." },
        { title: "Conditions Bodycam", content: "Toutes les visites sont enregistrees par bodycam pour votre tranquillite d esprit. Ces enregistrements sont soumis a notre politique de confidentialite." },
        { title: "Force Majeure", content: "Katten ne peut etre tenu responsable en cas de force majeure, y compris catastrophes naturelles ou mesures gouvernementales." },
        { title: "Droit Applicable", content: "Le droit belge s applique. Les litiges sont soumis au tribunal competent d Anvers." }
      ]
    },
    cookies: {
      pageTitle: "Politique de Cookies",
      pageSubtitle: "Comment nous utilisons les cookies",
      lastUpdated: "Derniere mise a jour : juillet 2026",
      intro: "Cette politique de cookies explique quels cookies notre site utilise, pourquoi nous les utilisons et comment vous pouvez gerer vos preferences.",
      sections: [
        { title: "Que sont les cookies ?", content: "Les cookies sont de petits fichiers texte stockes sur votre appareil lors de la visite d un site web." },
        { title: "Cookies essentiels", content: "Ces cookies sont indispensables au fonctionnement de notre site, permettant la navigation, la preference linguistique et l acces aux zones securisees." },
        { title: "Cookies analytiques", content: "Nous utilisons des cookies analytiques pour comprendre comment les visiteurs utilisent notre site. Les donnees sont anonymisees." },
        { title: "Cookies fonctionnels", content: "Les cookies fonctionnels memorisent vos preferences, comme votre choix de langue (neerlandais, anglais, francais ou turc)." },
        { title: "Gerer vos preferences", content: "Vous pouvez modifier vos preferences de cookies a tout moment via les parametres de votre navigateur." },
        { title: "Contact", content: "Pour toute question, contactez-nous a info@katten.be." }
      ]
    }
  },
  tr: {
    privacy: {
      pageTitle: "Gizlilik Politikasi",
      pageSubtitle: "Gizliliginiz bizim onceligigmizdir",
      lastUpdated: "Son guncelleme: Temmuz 2026",
      intro: "Katten olarak gizliliginize buyuk onem veriyoruz. Bu gizlilik politikasi, web sitemizi ziyaret ettiginizde ve Anvers teki kedi bakim hizmetimizi kullandiginizda kisisel verilerinizi nasil topladigimizi, kullandigimizi ve korudugumuzu aciklar.",
      sections: [
        { title: "Hangi verileri topluyoruz?", content: "Hizmetlerimizi kullandiginizda su verileri topluyoruz: adiniz, e-posta adresiniz, telefon numaraniz, adresiniz, tibbi veriler dahil kediniz/kedileriniz hakkinda bilgiler ve ziyaretler sirasindaki bodycam kayitlarimiz." },
        { title: "Verilerinizi nasil kullaniyoruz?", content: "Kisisel verileriniz yalnizca su amaclarla kullanilir: kedi bakim hizmetlerimizin sunulmasi, rezervasyonlar ve ziyaretler hakkinda iletisim, bodycam kayitlari ve gunluk guncellemelerin paylasilmasi, faturalama ve odeme islemleri." },
        { title: "Bodycam kayitlari", content: "Bakicilarimiz evinize her ziyarette bodycam takar. Bu kayitlar bulutta guvenle saklanir ve yalnizca musteri olarak size aciktir. Kayitlar, aksi talep edilmedikce 30 gun sonra otomatik olarak silinir." },
        { title: "Veri guvenligi", content: "Verilerinizi yetkisiz erisime, kayba veya degisiklige karsi korumak icin uygun teknik ve kurumsal onlemler aliyoruz. Tum veriler sifreli olarak saklanir ve guvenli baglantilar (SSL/TLS) uzerinden aktarilir." },
        { title: "Haklariniz", content: "Genel Veri Koruma Yonetmeligi (GDPR) kapsaminda su haklara sahipsiniz: kisisel verilerinize erisim, hatali verilerin duzeltilmesi, verilerinizin silinmesi, islemenin kisitlanmasi, veri tasinabilirligi ve islemeye itiraz." },
        { title: "Cerezler", content: "Web sitemiz deneyiminizi iyilestirmek icin cerezler kullanir. Hangi cerezleri kullandigimiz hakkinda daha fazla bilgi icin ayri cerez politikamiza bakin." },
        { title: "Iletisim", content: "Bu gizlilik politikasi hakkinda sorulariniz icin info@katten.be adresinden bize ulasabilirsiniz." }
      ]
    },
    terms: {
      pageTitle: "Genel Kosullar",
      pageSubtitle: "Hizmet kosullarimiz",
      lastUpdated: "Son guncelleme: Temmuz 2026",
      intro: "Bu genel kosullar, Belcika Anvers merkezli Katten Kedi Bakim Servisi tarafindan sunulan tum hizmetler icin gecerlidir.",
      sections: [
        { title: "Hizmetlerimiz", content: "Katten, gunluk ziyaretler, beslenme, kum temizligi, oyun zamani, ilac uygulamasi ve bodycam kayitlari dahil profesyonel evde kedi bakimi sunmaktadir. Hizmetlerimiz Buyuk Anvers bolgesinde mevcuttur." },
        { title: "Rezervasyonlar ve Iptaller", content: "Rezervasyonlar web sitemiz veya telefon araciligiyla yapilabilir. Minimum 2 gunluk rezervasyon suresi gerekmektedir. Hizmet baslangcindan 48 saat oncesine kadar iptal ucretsizdir." },
        { title: "Fiyatlar ve Odeme", content: "Ucretlerimiz: Temel paket ziyaret basina 15 euro, Standart paket 22 euro/ziyaret, Premium paket 35 euro/ziyaret. Tum fiyatlar KDV dahildir." },
        { title: "Anahtar Teslimi", content: "Evinize erisim icin anahtar teslimi gereklidir. Anahtarlar guvenli bir sekilde saklanir ve hizmet sonunda iade edilir." },
        { title: "Sorumluluk ve Sigorta", content: "Katten hizmetlerimiz sirasinda sorumluluk sigortasina sahiptir. Tibbi acil durumlarda derhal siz ve/veya belirlenen veteriner ile iletisime geceriz." },
        { title: "Bodycam Kosullari", content: "Tum ziyaretler huzurunuz ve kedinizin guvenligi icin bodycam ile kaydedilir. Bu kayitlar gizlilik politikamiz kapsamindadir." },
        { title: "Mucbir Sebepler", content: "Katten, dogal afetler, asiri hava kosullari veya hukumet tedbirleri dahil mucbir sebep durumlarinda yukumluluklerini yerine getirememekten sorumlu tutulamaz." },
        { title: "Uygulanacak Hukuk", content: "Bu kosullar Belcika hukukuna tabidir. Uyusmazliklar Anvers teki yetkili mahkemeye sunulur." }
      ]
    },
    cookies: {
      pageTitle: "Cerez Politikasi",
      pageSubtitle: "Cerezleri nasil kullaniyoruz",
      lastUpdated: "Son guncelleme: Temmuz 2026",
      intro: "Bu cerez politikasi, web sitemizin hangi cerezleri kullandigini, neden kullandigimizi ve cerez tercihlerinizi nasil yonetebileceginizi aciklar.",
      sections: [
        { title: "Cerez nedir?", content: "Cerezler, bir web sitesini ziyaret ettiginizde cihaziniza kaydedilen kucuk metin dosyalaridir. Web sitesinin cihazinizi tanimasina ve tercihleriniz hakkinda bilgi hatirlamasina yardimci olurlar." },
        { title: "Zorunlu cerezler", content: "Bu cerezler web sitemizin calismasi icin gereklidir. Sayfa navigasyonu, dil tercihi ve guvenli alanlara erisim gibi temel islevleri saglarlar." },
        { title: "Analitik cerezler", content: "Ziyaretcilerin web sitemizi nasil kullandigini anlamak icin analitik cerezler kullaniyoruz. Bu bilgiler web sitesini iyilestirmemize yardimci olur." },
        { title: "Islevsel cerezler", content: "Islevsel cerezler, dil tercihiniz (Felemenkce, Ingilizce, Fransizca veya Turkce) gibi tercihlerinizi hatirlar." },
        { title: "Cerez tercihlerinizi yonetme", content: "Cerez tercihlerinizi istediginiz zaman tarayici ayarlariniz uzerinden degistirebilirsiniz. Bazi cerezlerin devre disi birakilmasinin web sitemizin islevselligini etkileyebilecegini lutfen unutmayin." },
        { title: "Iletisim", content: "Cerez politikamiz hakkinda sorulariniz icin info@katten.be adresinden bize ulasabilirsiniz." }
      ]
    }
  }
};

for (const [lang, pages] of Object.entries(translations)) {
  const path = `src/messages/${lang}.json`;
  const data = JSON.parse(fs.readFileSync(path, 'utf8'));
  data.privacy = pages.privacy;
  data.terms = pages.terms;
  data.cookies = pages.cookies;
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}
console.log('Done');
