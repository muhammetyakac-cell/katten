export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  seoTitle: string;
  seoDescription: string;
  locale: string;
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1-nl",
    slug: "waar-moet-ik-mijn-kat-achterlaten-tijdens-vakantie",
    title: "Waar moet ik mijn kat achterlaten tijdens mijn vakantie?",
    excerpt: "Ontdek de beste opties voor kattenopvang tijdens uw vakantie. Als bioloog leggen we uit waarom thuis blijven vaak de beste keuze is.",
    content: `## De stress van het reizen voor katten

Als u een vakantie plant, is een van de belangrijkste vragen: *waar moet ik mijn kat achterlaten?* Veel eigenaren overwegen een pension, maar als bioloog zie ik vaak dat katten extreem territoriaal zijn. Het verplaatsen van uw kat naar een onbekende omgeving kan aanzienlijke stress veroorzaken.

### Opties voor kattenopvang

1. **Kattenpension:** Vaak stressvol door vreemde geuren en geluiden.
2. **Bij familie of vrienden:** Beter, maar nog steeds een verandering van territorium.
3. **Thuis met een kattenoppas:** Veruit de beste optie voor het welzijn van uw kat.

Bij **Katten** in Antwerpen bieden we professionele kattenoppasdiensten aan huis. Dit betekent dat uw kat in zijn eigen vertrouwde omgeving blijft. Wij komen langs om te voeren, te spelen en eventuele medische zorg te bieden, gebaseerd op onze biologische expertise.

Meer weten over onze aanpak? Bekijk onze [Diensten](/nl/diensten) of neem direct [Contact](/nl/contact) op voor een kennismaking in regio Antwerpen.`,
    date: "2026-06-05",
    readTime: "2 min",
    author: "Katten Team",
    image: "/images/cat_feeding.png",
    seoTitle: "Waar Kat Achterlaten Vakantie | Katten Antwerpen",
    seoDescription: "Gaat u op vakantie en zoekt u een plek voor uw kat? Lees waarom een professionele oppas in Antwerpen de minst stressvolle optie is voor uw huisdier.",
    locale: "nl",
    keywords: ["kattenopvang", "kat achterlaten", "vakantie kat", "Antwerpen kattenoppas", "Katten service"]
  },
  {
    id: "1-en",
    slug: "where-to-leave-your-cat-during-vacation",
    title: "Where to leave your cat during vacation?",
    excerpt: "Discover the best options for cat care during your holiday. Our biologist founder explains why staying home is usually best.",
    content: `## The stress of travel for cats

When planning a vacation, a major question is: *where should I leave my cat?* Many owners consider a cattery, but as a biologist, I observe that cats are extremely territorial. Moving your cat to an unfamiliar environment can cause significant stress.

### Cat care options

1. **Cattery:** Often stressful due to strange smells and noises.
2. **With family/friends:** Better, but still a territory change.
3. **At home with a pet sitter:** By far the best option for your cat\'s wellbeing.

At **Katten** in Antwerp, we offer professional in-home cat sitting services. This means your cat stays in their familiar environment. We visit to feed, play, and provide any necessary medical care based on our biological expertise.

Want to know more? Check our [Services](/en/services) or [Contact](/en/contact) us directly for a meet-and-greet in the Antwerp area.`,
    date: "2026-06-05",
    readTime: "2 min",
    author: "Katten Team",
    image: "/images/cat_feeding.png",
    seoTitle: "Where to Leave Cat Vacation | Katten Antwerp",
    seoDescription: "Going on holiday and wondering where to leave your cat? Learn why a professional cat sitter in Antwerp is the least stressful option.",
    locale: "en",
    keywords: ["cat sitting", "leave cat vacation", "holiday cat care", "Antwerp cat sitter", "Katten service"]
  },
  {
    id: "1-fr",
    slug: "ou-laisser-son-chat-pendant-les-vacances",
    title: "Où laisser son chat pendant les vacances ?",
    excerpt: "Découvrez les meilleures options de garde de chats pendant vos vacances. Notre biologiste explique pourquoi rester à la maison est idéal.",
    content: `## Le stress du voyage pour les chats

Lorsque vous planifiez des vacances, la question principale est : *où dois-je laisser mon chat ?* Beaucoup envisagent une pension, mais en tant que biologiste, je constate que les chats sont très territoriaux. Déplacer votre chat peut causer un stress important.

### Options de garde

1. **Pension :** Souvent stressante à cause d\'odeurs et de bruits inhabituels.
2. **Chez des amis :** Mieux, mais reste un changement de territoire.
3. **À domicile avec un cat sitter :** De loin la meilleure option pour le bien-être de votre chat.

Chez **Katten** à Anvers, nous proposons des services de cat sitting professionnels à domicile. Votre chat reste dans son environnement familier. Nous passons pour le nourrir, jouer et prodiguer des soins basés sur notre expertise biologique.

Intéressé ? Consultez nos [Services](/fr/services) ou prenez [Contact](/fr/contact) dans la région d\'Anvers.`,
    date: "2026-06-05",
    readTime: "2 min",
    author: "Katten Team",
    image: "/images/cat_feeding.png",
    seoTitle: "Où Laisser Son Chat Vacances | Katten Anvers",
    seoDescription: "Vous partez en vacances et vous vous demandez où laisser votre chat ? Découvrez pourquoi un cat sitter professionnel à Anvers est la meilleure option.",
    locale: "fr",
    keywords: ["garde de chat", "laisser chat vacances", "cat sitter Anvers", "Katten service", "bien-\u00eatre chat"]
  },
  {
    id: "1-tr",
    slug: "tatilde-kedimi-nereye-birakmaliyim",
    title: "Tatilde Kedimi Nereye Bırakmalıyım?",
    excerpt: "Tatiliniz boyunca kedi bakımı için en iyi seçenekleri keşfedin. Biyolog kurucumuz, evde kalmanın neden en iyisi olduğunu açıklıyor.",
    content: `## Kediler için seyahat stresi

Tatil planlarken en büyük sorulardan biri şudur: *Tatilde kedimi nereye bırakmalıyım?* Birçok kişi kedi otellerini düşünür, ancak bir biyolog olarak kedilerin aşırı derecede bölgesel hayvanlar olduğunu biliyorum. Kedinizi bilmediği bir ortama taşımak ciddi strese neden olabilir.

### Kedi bakım seçenekleri

1. **Kedi Oteli:** Yabancı kokular ve sesler nedeniyle genellikle streslidir.
2. **Aile veya arkadaşlarla:** Daha iyi olsa da hala bir bölge değişikliğidir.
3. **Evde profesyonel bakıcı ile:** Kedinizin refahı için açık ara en iyi seçenek.

Anvers\'teki **Katten** servisimizde, evde profesyonel kedi bakıcılığı hizmetleri sunuyoruz. Bu, kedinizin tanıdık ortamında kalması demektir. Biyolojik uzmanlığımıza dayanarak beslemek, oynamak ve tıbbi bakım sağlamak için ziyaret ediyoruz.

Daha fazlasını öğrenmek ister misiniz? [Hizmetlerimize](/tr/hizmetler) göz atın veya Anvers bölgesinde bir tanışma için [İletişime](/tr/iletisim) geçin.`,
    date: "2026-06-05",
    readTime: "2 min",
    author: "Katten Team",
    image: "/images/cat_feeding.png",
    seoTitle: "Tatilde Kedimi Nereye Bırakmalıyım | Katten Anvers",
    seoDescription: "Tatile çıkıyorsunuz ve kedinizi nereye bırakacağınızı mı düşünüyorsunuz? Anvers\'te profesyonel bir kedi bakıcısının neden en iyi seçenek olduğunu öğrenin.",
    locale: "tr",
    keywords: ["kedi bak\u0131c\u0131s\u0131", "tatilde kedi", "Anvers kedi bak\u0131m\u0131", "Katten servisi", "kedi oteli"]
  },
  {
    id: "2-nl",
    slug: "hoe-vind-ik-een-betrouwbare-kattenoppas",
    title: "Hoe vind ik een betrouwbare kattenoppas in Antwerpen?",
    excerpt: "Een goede kattenoppas vinden is cruciaal voor uw gemoedsrust. Ontdek waar u op moet letten bij het kiezen van de juiste professional.",
    content: `## Het belang van een betrouwbare oppas

Uw kat achterlaten bij een vreemde kan spannend zijn. *Hoe vind ik een kattenoppas* die ik volledig kan vertrouwen? Het is essentieel om iemand te vinden die niet alleen van katten houdt, maar ook de biologische en gedragsmatige behoeften van uw huisdier begrijpt.

### Waar moet u op letten?

- **Ervaring en achtergrond:** Heeft de oppas een professionele achtergrond? Bij Katten wordt uw huisdier verzorgd door een gediplomeerd bioloog.
- **Transparantie:** Wordt u op de hoogte gehouden? Wij maken gebruik van een bodycam zodat u precies kunt zien hoe het bezoek verliep.
- **Kennismakingsgesprek:** Een goede oppas stelt altijd voor om eerst kennis te maken. Dit bouwt vertrouwen op tussen de oppas, u en uw kat.

In Antwerpen bieden wij bij **Katten** een premium service die aan al deze eisen voldoet. Wij begrijpen het belang van routine en veiligheid.

Boek vandaag nog een kennismakingsgesprek via onze [Contactpagina](/nl/contact).`,
    date: "2026-06-10",
    readTime: "2 min",
    author: "Dr. Katten - Biyolog",
    image: "/images/cat_bodycam.png",
    seoTitle: "Hoe Kattenoppas Vinden | Katten Antwerpen",
    seoDescription: "Op zoek naar een kattenoppas in Antwerpen? Lees onze tips voor het vinden van een betrouwbare en deskundige oppas voor uw huisdier.",
    locale: "nl",
    keywords: ["kattenoppas vinden", "betrouwbare oppas", "kattenverzorging Antwerpen", "huisdierenoppas"]
  },
  {
    id: "2-en",
    slug: "how-to-find-a-reliable-cat-sitter",
    title: "How to find a reliable cat sitter in Antwerp?",
    excerpt: "Finding a good cat sitter is crucial for your peace of mind. Discover what to look for when choosing the right professional.",
    content: `## The importance of a reliable sitter

Leaving your cat with a stranger can be stressful. *How do I find a cat sitter* I can completely trust? It is essential to find someone who not only loves cats but also understands their biological and behavioral needs.

### What to look for?

- **Experience and background:** Does the sitter have a professional background? At Katten, your pet is cared for by a qualified biologist.
- **Transparency:** Will you be kept in the loop? We use a bodycam so you can see exactly how the visit went.
- **Meet and greet:** A good sitter will always suggest an initial meeting to build trust.

In Antwerp, **Katten** offers a premium service that meets all these requirements. We understand the importance of routine and safety.

Book a meet-and-greet today via our [Contact page](/en/contact).`,
    date: "2026-06-10",
    readTime: "2 min",
    author: "Dr. Katten - Biyolog",
    image: "/images/cat_bodycam.png",
    seoTitle: "How to Find Cat Sitter | Katten Antwerp",
    seoDescription: "Looking for a cat sitter in Antwerp? Read our tips for finding a reliable and knowledgeable pet sitter for your beloved feline.",
    locale: "en",
    keywords: ["find cat sitter", "reliable pet sitter", "cat care Antwerp", "Katten service"]
  },
  {
    id: "2-fr",
    slug: "comment-trouver-un-cat-sitter-fiable",
    title: "Comment trouver un cat sitter fiable à Anvers ?",
    excerpt: "Trouver un bon cat sitter est crucial pour votre tranquillité. Découvrez ce qu'il faut rechercher chez un professionnel.",
    content: `## L'importance d'un gardien fiable

Laisser votre chat à un inconnu peut être stressant. *Comment trouver un cat sitter* en qui avoir une confiance absolue ? Il est essentiel de trouver quelqu'un qui comprend les besoins biologiques et comportementaux de votre animal.

### Ce qu'il faut vérifier

- **Expérience et profil :** Le gardien a-t-il une formation professionnelle ? Chez Katten, votre chat est soigné par un biologiste qualifié.
- **Transparence :** Serez-vous tenu informé ? Nous utilisons une bodycam pour que vous puissiez voir le déroulement de la visite.
- **Rencontre préalable :** Un bon cat sitter proposera toujours une première rencontre.

À Anvers, **Katten** propose un service premium qui répond à toutes ces exigences. Nous comprenons l'importance de la routine et de la sécurité.

Réservez une rencontre dès aujourd'hui via notre [page Contact](/fr/contact).`,
    date: "2026-06-10",
    readTime: "2 min",
    author: "Dr. Katten - Biyolog",
    image: "/images/cat_bodycam.png",
    seoTitle: "Trouver Cat Sitter | Katten Anvers",
    seoDescription: "Vous cherchez un cat sitter à Anvers ? Lisez nos conseils pour trouver une personne fiable et compétente pour votre chat.",
    locale: "fr",
    keywords: ["trouver cat sitter", "garde de chat", "soins chats Anvers", "Katten service"]
  },
  {
    id: "2-tr",
    slug: "kedime-nasil-guvenilir-bakici-bulabilirim",
    title: "Kedime Anvers'te Nasıl Güvenilir Bakıcı Bulabilirim?",
    excerpt: "İyi bir kedi bakıcısı bulmak iç huzurunuz için çok önemlidir. Doğru profesyoneli seçerken nelere dikkat etmeniz gerektiğini keşfedin.",
    content: `## Güvenilir bir bakıcının önemi

Kedinizi bir yabancıya bırakmak stresli olabilir. Tamamen güvenebileceğim bir *kedi bakıcısını nasıl bulabilirim*? Sadece kedileri seven değil, aynı zamanda evcil hayvanınızın biyolojik ve davranışsal ihtiyaçlarını da anlayan birini bulmak çok önemlidir.

### Nelere dikkat etmeli?

- **Deneyim ve geçmiş:** Bakıcının profesyonel bir geçmişi var mı? Katten'de evcil hayvanınıza uzman bir biyolog bakar.
- **Şeffaflık:** Bilgilendirilecek misiniz? Ziyaretin nasıl geçtiğini tam olarak görebilmeniz için yaka kamerası kullanıyoruz.
- **Tanışma toplantısı:** İyi bir bakıcı her zaman güven oluşturmak için ilk tanışmayı önerir.

Anvers'te, **Katten** tüm bu gereksinimleri karşılayan premium bir hizmet sunar. Rutin ve güvenliğin önemini anlıyoruz.

[İletişim sayfamız](/tr/iletisim) üzerinden bugün bir tanışma randevusu alın.`,
    date: "2026-06-10",
    readTime: "2 min",
    author: "Dr. Katten - Biyolog",
    image: "/images/cat_bodycam.png",
    seoTitle: "Kedi Bakıcısı Nasıl Bulunur | Katten Anvers",
    seoDescription: "Anvers'te kedi bakıcısı mı arıyorsunuz? Kediniz için güvenilir ve bilgili bir bakıcı bulma ipuçlarımızı okuyun.",
    locale: "tr",
    keywords: ["kedi bak\u0131c\u0131s\u0131 bulmak", "g\u00fcvenilir bak\u0131c\u0131", "Anvers kedi bak\u0131m\u0131", "Katten servisi"]
  },
  {
    id: "3-nl",
    slug: "mensen-gezocht-om-mijn-kat-te-bezoeken",
    title: "Mensen gezocht om mijn kat te bezoeken: Waarom professionaliteit telt",
    excerpt: "Veel mensen zoeken buren of vrienden om hun kat te bezoeken. Leer waarom een professionele bioloog een groot verschil kan maken.",
    content: `## "Mensen gezocht om mijn kat te bezoeken"

Het is een veelvoorkomende oproep op buurtapps: *Mensen gezocht om mijn kat te bezoeken tijdens mijn vakantie.* Hoewel het vriendelijk is van een buurman om af en toe een bakje voer neer te zetten, hebben katten veel meer nodig dan alleen voeding.

### De voordelen van een professional

Katten verbergen pijn en ziekte uitstekend. Als bioloog ben ik getraind om subtiele veranderingen in gedrag, eetlust en kattenbakgebruik op te merken.

- **Gedragsobservatie:** Vroegtijdige signalen van stress of ziekte herkennen.
- **Kwaliteitstijd:** We besteden tijd aan spelen en mentale stimulatie, essentieel om eenzaamheid en depressie te voorkomen bij katten die alleen zijn.
- **Medische zorg:** Indien nodig, kunnen wij professioneel medicatie toedienen.

Laat de zorg voor uw kat niet over aan het toeval. Bij **Katten** in Antwerpen garanderen wij liefdevolle en professionele zorg. Lees meer over onze [Diensten](/nl/diensten).`,
    date: "2026-06-15",
    readTime: "2 min",
    author: "Katten Team",
    image: "/images/cat_playing.png",
    seoTitle: "Mensen Gezocht Kat Bezoeken | Katten Antwerpen",
    seoDescription: "Zoekt u iemand om uw kat te bezoeken in Antwerpen? Ontdek waarom een professionele oppasdienst met biologische achtergrond de beste keuze is.",
    locale: "nl",
    keywords: ["kat bezoeken", "kattenoppas gezocht", "katten bezoeker Antwerpen", "professional katten zorg"]
  },
  {
    id: "3-en",
    slug: "looking-for-people-to-visit-my-cat",
    title: "Looking for people to visit my cat: Why professionalism matters",
    excerpt: "Many seek neighbors to visit their cat. Learn why hiring a professional biologist can make a significant difference for your pet.",
    content: `## "Looking for people to visit my cat"

It's a common request on neighborhood apps: *Looking for people to visit my cat during my holiday.* While it is kind of a neighbor to drop by and fill the food bowl, cats need much more than just basic sustenance.

### The benefits of a professional

Cats are excellent at hiding pain and illness. As a biologist, I am trained to notice subtle changes in behavior, appetite, and litter box habits.

- **Behavioral observation:** Recognizing early signs of stress or illness.
- **Quality time:** We spend time playing and providing mental stimulation, essential for preventing loneliness.
- **Medical care:** We can professionally administer medication if required.

Don't leave your cat's care to chance. At **Katten** in Antwerp, we guarantee loving and professional care. Learn more about our [Services](/en/services).`,
    date: "2026-06-15",
    readTime: "2 min",
    author: "Katten Team",
    image: "/images/cat_playing.png",
    seoTitle: "People to Visit My Cat | Katten Antwerp",
    seoDescription: "Looking for someone to visit your cat in Antwerp? Discover why a professional sitting service with a biological background is the best choice.",
    locale: "en",
    keywords: ["visit my cat", "looking for cat sitter", "cat care professional Antwerp"]
  },
  {
    id: "3-fr",
    slug: "personnes-recherchees-pour-visiter-mon-chat",
    title: "Personnes recherchées pour visiter mon chat : Pourquoi le professionnalisme compte",
    excerpt: "Beaucoup cherchent des voisins pour visiter leur chat. Découvrez pourquoi l'expertise d'un biologiste fait la différence.",
    content: `## "Personnes recherchées pour visiter mon chat"

C'est une demande fréquente : *Cherche des personnes pour visiter mon chat pendant mes vacances.* Bien qu'il soit gentil de la part d'un voisin de remplir la gamelle, les chats ont besoin de bien plus.

### Les avantages d'un professionnel

Les chats cachent très bien leur douleur. En tant que biologiste, je suis formé pour repérer les changements subtils de comportement et d'appétit.

- **Observation comportementale :** Reconnaître les signes précoces de stress ou de maladie.
- **Temps de qualité :** Nous jouons et stimulons mentalement le chat, essentiel pour éviter la solitude.
- **Soins médicaux :** Nous pouvons administrer des médicaments de manière professionnelle.

Ne laissez pas les soins de votre chat au hasard. Chez **Katten** à Anvers, nous garantissons des soins aimants et professionnels. Découvrez nos [Services](/fr/services).`,
    date: "2026-06-15",
    readTime: "2 min",
    author: "Katten Team",
    image: "/images/cat_playing.png",
    seoTitle: "Cherche Personne Visiter Chat | Katten Anvers",
    seoDescription: "Vous cherchez quelqu'un pour visiter votre chat à Anvers ? Découvrez pourquoi un service professionnel est le meilleur choix.",
    locale: "fr",
    keywords: ["visiter mon chat", "cherche cat sitter", "visite chat Anvers", "professionnel"]
  },
  {
    id: "3-tr",
    slug: "kedimi-ziyaret-edecek-insanlar-ariyorum",
    title: "Kedimi ziyaret edecek insanlar arıyorum: Profesyonellik neden önemlidir?",
    excerpt: "Birçok kişi kedilerini ziyaret edecek komşular arar. Neden profesyonel bir biyolog tutmanın evcil hayvanınız için büyük fark yaratabileceğini öğrenin.",
    content: `## "Kedimi ziyaret edecek insanlar arıyorum"

Mahalle uygulamalarında yaygın bir taleptir: *Tatilim sırasında kedimi ziyaret edecek insanlar arıyorum.* Bir komşunun mama kabını doldurması nazik bir davranış olsa da, kedilerin temel beslenmeden çok daha fazlasına ihtiyacı vardır.

### Profesyonel bakımın avantajları

Kediler acı ve hastalığı gizlemekte mükemmeldir. Bir biyolog olarak davranış, iştah ve kum kabı alışkanlıklarındaki ince değişiklikleri fark etmek üzere eğitildim.

- **Davranış gözlemi:** Stres veya hastalığın erken belirtilerini tanıma.
- **Kaliteli zaman:** Yalnızlığı ve depresyonu önlemek için oyun oynar ve zihinsel uyarım sağlarız.
- **Tıbbi bakım:** Gerekirse profesyonelce ilaç uygulayabiliriz.

Kedinizin bakımını şansa bırakmayın. Anvers'teki **Katten**'de sevgi dolu ve profesyonel bakımı garanti ediyoruz. [Hizmetlerimiz](/tr/hizmetler) hakkında daha fazla bilgi edinin.`,
    date: "2026-06-15",
    readTime: "2 min",
    author: "Katten Team",
    image: "/images/cat_playing.png",
    seoTitle: "Kedimi Ziyaret Edecek Kişi | Katten Anvers",
    seoDescription: "Anvers'te kedinizi ziyaret edecek birini mi arıyorsunuz? Biyolojik altyapıya sahip profesyonel bir bakım hizmetinin neden en iyi seçim olduğunu keşfedin.",
    locale: "tr",
    keywords: ["kedimi ziyaret edecek", "kedi bak\u0131c\u0131s\u0131 ar\u0131yorum", "Anvers kedi bak\u0131m\u0131"]
  },
  {
    id: "4-nl",
    slug: "kosten-kattenoppas-wat-kunt-u-verwachten",
    title: "Kosten kattenoppas: Wat kunt u verwachten in Antwerpen?",
    excerpt: "Een transparante blik op de kosten van een professionele kattenoppas. Wat betaalt u voor de expertise van een bioloog?",
    content: `## Hoeveel kost een kattenoppas?

Bij het zoeken naar zorg voor uw kat, vraagt u zich ongetwijfeld af: *wat zijn de kosten van een kattenoppas?* De prijzen kunnen sterk variëren, afhankelijk van de geboden kwaliteit en expertise.

### Investering in gemoedsrust

Bij **Katten** onderscheiden we ons door onze wetenschappelijke achtergrond. U betaalt niet zomaar voor iemand die de deur opent; u investeert in de expertise van een bioloog. 

Onze tarieven weerspiegelen:
- **Kwalitatieve bezoeken** van 30 of 45 minuten.
- **Inclusief bodycam-beelden** voor volledige transparantie.
- **Gezondheidscontroles** en professionele observatie.

Hoewel een buurman misschien goedkoper (of gratis) is, dekt een professionele service onvoorziene medische situaties en garandeert het de hoogste standaard van welzijn. Voor specifieke tarieven in de regio Antwerpen, kunt u terecht op onze [Diensten](/nl/diensten) pagina of contacteer ons via de [Contact](/nl/contact) pagina voor een offerte op maat.`,
    date: "2026-06-20",
    readTime: "2 min",
    author: "Katten Team",
    image: "/images/hero_background.png",
    seoTitle: "Kosten Kattenoppas Antwerpen | Katten Prijzen",
    seoDescription: "Benieuwd naar de kosten van een professionele kattenoppas in Antwerpen? Lees over onze tarieven en de toegevoegde waarde van een bioloog als oppas.",
    locale: "nl",
    keywords: ["kosten kattenoppas", "prijzen kattenverzorging", "kattenoppas tarief", "Antwerpen"]
  },
  {
    id: "4-en",
    slug: "cost-of-cat-sitting-what-to-expect",
    title: "Cost of cat sitting: What to expect in Antwerp?",
    excerpt: "A transparent look at the costs of a professional cat sitter. What do you pay for the expertise of a biologist?",
    content: `## How much does cat sitting cost?

When looking for care for your cat, you naturally wonder: *what is the cost of cat sitting?* Prices can vary greatly depending on the quality and expertise provided.

### Investing in peace of mind

At **Katten**, we stand out due to our scientific background. You are not just paying for someone to open the door; you are investing in the expertise of a biologist.

Our rates reflect:
- **Quality visits** of 30 or 45 minutes.
- **Included bodycam footage** for complete transparency.
- **Health checks** and professional observation.

While a neighbor might be cheaper, a professional service handles unforeseen medical situations and guarantees the highest standard of welfare. For specific rates in the Antwerp area, visit our [Services](/en/services) page or [Contact](/en/contact) us for a custom quote.`,
    date: "2026-06-20",
    readTime: "2 min",
    author: "Katten Team",
    image: "/images/hero_background.png",
    seoTitle: "Cost of Cat Sitting Antwerp | Katten Prices",
    seoDescription: "Curious about the costs of a professional cat sitter in Antwerp? Learn about our rates and the added value of a biologist as your pet sitter.",
    locale: "en",
    keywords: ["cost of cat sitting", "cat sitter prices", "cat care rates", "Antwerp pet sitting"]
  },
  {
    id: "4-fr",
    slug: "cout-garde-de-chat-a-quoi-s-attendre",
    title: "Coût de la garde de chat : À quoi s'attendre à Anvers ?",
    excerpt: "Un regard transparent sur les coûts d'un cat sitter professionnel. Que payez-vous pour l'expertise d'un biologiste ?",
    content: `## Combien coûte un cat sitter ?

En cherchant des soins pour votre chat, vous vous demandez : *quel est le coût de la garde de chat ?* Les prix varient selon la qualité et l'expertise fournies.

### Investir dans la tranquillité d'esprit

Chez **Katten**, nous nous démarquons par notre profil scientifique. Vous ne payez pas seulement pour quelqu'un qui ouvre la porte ; vous investissez dans l'expertise d'un biologiste.

Nos tarifs reflètent :
- **Des visites de qualité** de 30 ou 45 minutes.
- **Des images de bodycam** pour une transparence totale.
- **Des contrôles de santé** et une observation professionnelle.

Bien qu'un voisin puisse être moins cher, un professionnel gère les imprévus médicaux et garantit le meilleur bien-être. Pour nos tarifs à Anvers, visitez notre page [Services](/fr/services) ou [Contactez-nous](/fr/contact).`,
    date: "2026-06-20",
    readTime: "2 min",
    author: "Katten Team",
    image: "/images/hero_background.png",
    seoTitle: "Coût Garde Chat Anvers | Prix Katten",
    seoDescription: "Curieux des coûts d'un cat sitter professionnel à Anvers ? Découvrez nos tarifs et la valeur ajoutée d'un biologiste comme gardien.",
    locale: "fr",
    keywords: ["co\u00fbt garde chat", "prix cat sitter", "tarif soins chat", "Anvers"]
  },
  {
    id: "4-tr",
    slug: "kedi-bakim-maliyeti-neler-beklemelisiniz",
    title: "Kedi Bakım Maliyeti: Anvers'te Neler Beklemelisiniz?",
    excerpt: "Profesyonel bir kedi bakıcısının maliyetlerine şeffaf bir bakış. Bir biyoloğun uzmanlığı için ne kadar ödüyorsunuz?",
    content: `## Kedi bakıcılığı ne kadara mal olur?

Kediniz için bakım ararken doğal olarak merak edersiniz: *Kedi bakım maliyeti nedir?* Fiyatlar sunulan kalite ve uzmanlığa bağlı olarak büyük ölçüde değişebilir.

### İç huzuruna yatırım yapmak

**Katten** olarak bilimsel altyapımızla öne çıkıyoruz. Sadece kapıyı açan biri için ödeme yapmıyorsunuz; bir biyoloğun uzmanlığına yatırım yapıyorsunuz.

Fiyatlarımız şunları yansıtır:
- 30 veya 45 dakikalık **kaliteli ziyaretler**.
- Tam şeffaflık için **dahili yaka kamerası (bodycam) görüntüleri**.
- **Sağlık kontrolleri** ve profesyonel gözlem.

Bir komşu daha ucuz olsa da, profesyonel bir hizmet öngörülemeyen tıbbi durumları yönetir ve en yüksek refah standardını garanti eder. Anvers bölgesindeki özel fiyatlar için [Hizmetler](/tr/hizmetler) sayfamızı ziyaret edin veya özel bir teklif için bizimle [İletişime](/tr/iletisim) geçin.`,
    date: "2026-06-20",
    readTime: "2 min",
    author: "Katten Team",
    image: "/images/hero_background.png",
    seoTitle: "Kedi Bakım Maliyeti Anvers | Katten Fiyatları",
    seoDescription: "Anvers'te profesyonel bir kedi bakıcısının maliyetlerini mi merak ediyorsunuz? Fiyatlarımız ve uzman bir biyolog bakıcının katma değeri hakkında bilgi edinin.",
    locale: "tr",
    keywords: ["kedi bak\u0131m maliyeti", "kedi bak\u0131c\u0131s\u0131 fiyatlar\u0131", "Anvers kedi bak\u0131m\u0131 \u00fccretleri"]
  },
  {
    id: "5-nl",
    slug: "stress-bij-katten-herkennen-bioloog",
    title: "Stress bij katten herkennen: Inzichten van een bioloog",
    excerpt: "Katten verbergen stress vaak goed. Leer als eigenaar de subtiele tekenen van feline stress herkennen en voorkomen.",
    content: `## De verborgen stress van katten

Als bioloog heb ik de gedragspatronen van katachtigen uitgebreid bestudeerd. Een van de belangrijkste dingen om te begrijpen is dat katten prooidieren én roofdieren zijn. Hierdoor zijn ze meesters in het verbergen van zwakte en stress. *Stress bij katten herkennen* vereist een geoefend oog.

### Subtiele signalen van stress

- **Gedragsveranderingen:** Zich overmatig verstoppen of onverwachte agressie.
- **Kattenbakproblemen:** Buiten de bak plassen is vaak een stressgerelateerd medisch of gedragsprobleem.
- **Overmatige vachtverzorging:** Kale plekken door dwangmatig likken (feline psychogene alopecia).
- **Veranderde eetlust:** Minder of juist veel meer eten.

Bij **Katten** zijn onze oppasbezoeken zo ontworpen dat we actief letten op deze stresssignalen. Wij zorgen voor een kalmerende omgeving en passen onze interactie aan op het stressniveau van het dier. Woont u in Antwerpen en heeft u een angstige kat? Neem [Contact](/nl/contact) met ons op voor gespecialiseerde zorg.`,
    date: "2026-06-25",
    readTime: "2 min",
    author: "Dr. Katten - Biyolog",
    image: "/images/cat_meds.png",
    seoTitle: "Stress Bij Katten Herkennen | Katten Antwerpen",
    seoDescription: "Hoe herkent u stress bij katten? Onze oprichter en bioloog deelt belangrijke inzichten over de subtiele signalen van stress bij katten.",
    locale: "nl",
    keywords: ["stress bij katten herkennen", "katten stress symptomen", "gestreste kat", "gedrag kat", "bioloog"]
  },
  {
    id: "5-en",
    slug: "recognizing-cat-stress-biologist-insights",
    title: "Recognizing cat stress: Insights from a biologist",
    excerpt: "Cats often hide stress well. Learn how to recognize and prevent the subtle signs of feline stress from our biologist founder.",
    content: `## The hidden stress of cats

As a biologist, I have extensively studied feline behavior patterns. One of the most important things to understand is that cats are both predators and prey. This makes them masters at hiding weakness and stress. *Recognizing cat stress* requires a trained eye.

### Subtle signs of stress

- **Behavioral changes:** Excessive hiding or unexpected aggression.
- **Litter box issues:** Urinating outside the box is often a stress-related issue.
- **Overgrooming:** Bald patches from compulsive licking.
- **Altered appetite:** Eating significantly less or more.

At **Katten**, our sitting visits are designed to actively monitor for these stress signals. We provide a calming environment and adjust our interactions based on the animal's stress levels. Live in Antwerp and have an anxious cat? [Contact](/en/contact) us for specialized care.`,
    date: "2026-06-25",
    readTime: "2 min",
    author: "Dr. Katten - Biyolog",
    image: "/images/cat_meds.png",
    seoTitle: "Recognizing Cat Stress | Katten Antwerp",
    seoDescription: "How do you recognize stress in cats? Our founder and biologist shares key insights on the subtle signs of stress in felines.",
    locale: "en",
    keywords: ["recognizing cat stress", "cat stress symptoms", "stressed cat", "feline behavior", "biologist"]
  },
  {
    id: "5-fr",
    slug: "reconnaitre-stress-chez-le-chat",
    title: "Reconnaître le stress chez le chat : Les conseils d'un biologiste",
    excerpt: "Les chats cachent bien leur stress. Apprenez à reconnaître et prévenir les signes subtils de stress félin.",
    content: `## Le stress caché des chats

En tant que biologiste, j'ai étudié les comportements félins en profondeur. Les chats étant à la fois prédateurs et proies, ils cachent très bien leurs faiblesses. *Reconnaître le stress chez le chat* nécessite un œil averti.

### Signes subtils de stress

- **Changements de comportement :** Se cacher excessivement ou agressivité inattendue.
- **Problèmes de litière :** Uriner hors du bac est souvent lié au stress.
- **Toilettage excessif :** Perte de poils due à un léchage compulsif.
- **Appétit modifié :** Manger beaucoup moins ou beaucoup plus.

Chez **Katten**, nos visites sont conçues pour repérer activement ces signaux. Nous offrons un environnement apaisant à Anvers. Vous avez un chat anxieux ? Prenez [Contact](/fr/contact) pour des soins spécialisés.`,
    date: "2026-06-25",
    readTime: "2 min",
    author: "Dr. Katten - Biyolog",
    image: "/images/cat_meds.png",
    seoTitle: "Reconnaître Stress Chat | Katten Anvers",
    seoDescription: "Comment reconnaître le stress chez le chat ? Notre biologiste partage des informations clés sur les signes subtils de stress chez les félins.",
    locale: "fr",
    keywords: ["stress chez le chat", "sympt\u00f4mes stress chat", "comportement f\u00e9lin", "biologiste"]
  },
  {
    id: "5-tr",
    slug: "kedi-stres-belirtilerini-tanima",
    title: "Kedi stres belirtileri: Bir biyoloğun içgörüleri",
    excerpt: "Kediler stresi genellikle iyi gizlerler. Biyolog kurucumuzdan kedilerdeki ince stres belirtilerini nasıl tanıyacağınızı ve önleyeceğinizi öğrenin.",
    content: `## Kedilerin gizli stresi

Bir biyolog olarak kedi davranış kalıplarını kapsamlı bir şekilde inceledim. Anlaşılması gereken en önemli şeylerden biri kedilerin hem avcı hem de av olduklarıdır. Bu onları zayıflık ve stresi gizlemede usta yapar. *Kedi stres belirtilerini* tanımak eğitimli bir göz gerektirir.

### İnce stres belirtileri

- **Davranış değişiklikleri:** Aşırı saklanma veya beklenmedik saldırganlık.
- **Kum kabı sorunları:** Kum kabının dışına idrar yapmak genellikle stres kaynaklıdır.
- **Aşırı yalanma:** Kompülsif yalamadan kaynaklanan kellikler.
- **Değişen iştah:** Önemli ölçüde daha az veya daha fazla yemek yeme.

**Katten**'de, bakım ziyaretlerimiz bu stres sinyallerini aktif olarak izlemek üzere tasarlanmıştır. Anvers'te sakinleştirici bir ortam sağlıyoruz. Endişeli bir kediniz mi var? Uzman bakımı için bizimle [İletişime](/tr/iletisim) geçin.`,
    date: "2026-06-25",
    readTime: "2 min",
    author: "Dr. Katten - Biyolog",
    image: "/images/cat_meds.png",
    seoTitle: "Kedi Stres Belirtileri | Katten Anvers",
    seoDescription: "Kedilerde stresi nasıl anlarsınız? Kurucumuz ve biyoloğumuz, kedilerdeki ince stres belirtileri hakkında önemli bilgiler paylaşıyor.",
    locale: "tr",
    keywords: ["kedi stres belirtileri", "kedi stres semptomlar\u0131", "stresli kedi", "kedi davran\u0131\u015f\u0131", "biyolog"]
  },
  {
    id: "6-nl",
    slug: "kat-alleen-thuis-tijdens-vakantie",
    title: "Kat alleen thuis tijdens vakantie: Maximale veiligheid en comfort",
    excerpt: "Kan een kat alleen thuis blijven tijdens uw vakantie? Ja, mits u de juiste professionele maatregelen neemt.",
    content: `## Is uw kat alleen thuis veilig?

Veel eigenaren voelen zich schuldig bij het idee: de *kat alleen thuis tijdens vakantie*. Toch is het, met de juiste begeleiding, vaak de beste keuze. Katten gedijen op routine en hun eigen territorium.

### Veiligheid voorop

Wanneer uw kat thuisblijft, is professionele opvolging cruciaal:
1. **Dagelijkse controles:** Wij controleren op ziektes, verwondingen of problemen in huis (zoals een raam dat open is gewaaid).
2. **Klimaatbeheersing:** We zorgen dat het niet te warm of koud wordt in de ruimtes waar de kat verblijft.
3. **Mentale stimulatie:** Dagelijks spelen voorkomt verveling en destructief gedrag.

Met de diensten van **Katten** in Antwerpen hoeft u zich geen zorgen te maken. We documenteren elk bezoek via een bodycam, zodat u letterlijk met ons meekijkt. Ontdek meer via onze [Diensten](/nl/diensten) pagina.`,
    date: "2026-06-30",
    readTime: "2 min",
    author: "Dr. Katten - Biyolog",
    image: "/images/cat_security.png",
    seoTitle: "Kat Alleen Thuis Vakantie | Katten Antwerpen",
    seoDescription: "Uw kat alleen thuis tijdens de vakantie? Ontdek hoe Katten in Antwerpen zorgt voor veiligheid, comfort en de beste professionele zorg.",
    locale: "nl",
    keywords: ["kat alleen thuis", "kat alleen tijdens vakantie", "katten verzorging thuis", "Antwerpen"]
  },
  {
    id: "6-en",
    slug: "cat-home-alone-during-holiday",
    title: "Cat home alone during holiday: Maximum safety and comfort",
    excerpt: "Can a cat stay home alone during your holiday? Yes, provided you take the right professional measures.",
    content: `## Is your cat safe home alone?

Many owners feel guilty at the thought of leaving their *cat home alone during a holiday*. Yet, with the right support, it is often the best choice. Cats thrive on routine and their own territory.

### Safety first

When your cat stays home, professional monitoring is crucial:
1. **Daily checks:** We check for illness, injuries, or house issues (like a blown-open window).
2. **Climate control:** We ensure the environment doesn't get too hot or cold.
3. **Mental stimulation:** Daily play prevents boredom and destructive behavior.

With **Katten's** services in Antwerp, you don't have to worry. We document every visit via a bodycam, so you can literally watch along with us. Discover more via our [Services](/en/services) page.`,
    date: "2026-06-30",
    readTime: "2 min",
    author: "Dr. Katten - Biyolog",
    image: "/images/cat_security.png",
    seoTitle: "Cat Home Alone Holiday | Katten Antwerp",
    seoDescription: "Your cat home alone during the holiday? Discover how Katten in Antwerp ensures safety, comfort, and the best professional care.",
    locale: "en",
    keywords: ["cat home alone", "cat home alone holiday", "cat care at home", "Antwerp pet sitter"]
  },
  {
    id: "6-fr",
    slug: "chat-seul-a-la-maison-pendant-les-vacances",
    title: "Chat seul à la maison pendant les vacances : Sécurité maximale",
    excerpt: "Un chat peut-il rester seul à la maison pendant vos vacances ? Oui, si vous prenez de bonnes mesures professionnelles.",
    content: `## Votre chat est-il en sécurité seul ?

Beaucoup de propriétaires culpabilisent à l'idée de laisser leur *chat seul à la maison pendant les vacances*. Pourtant, avec un bon encadrement, c'est souvent le meilleur choix. Les chats aiment la routine et leur territoire.

### La sécurité avant tout

Lorsque votre chat reste chez vous, un suivi professionnel est crucial :
1. **Contrôles quotidiens :** Nous vérifions l'absence de maladies, blessures ou problèmes domestiques.
2. **Contrôle de la température :** Nous veillons à ce que l'environnement reste confortable.
3. **Stimulation mentale :** Le jeu quotidien évite l'ennui et les comportements destructeurs.

Avec les services de **Katten** à Anvers, ne vous inquiétez plus. Nous filmons chaque visite avec une bodycam. Découvrez-en plus sur notre page [Services](/fr/services).`,
    date: "2026-06-30",
    readTime: "2 min",
    author: "Dr. Katten - Biyolog",
    image: "/images/cat_security.png",
    seoTitle: "Chat Seul Maison Vacances | Katten Anvers",
    seoDescription: "Votre chat reste seul à la maison pendant les vacances ? Découvrez comment Katten à Anvers assure sécurité et confort.",
    locale: "fr",
    keywords: ["chat seul \u00e0 la maison", "chat vacances", "garde chat domicile", "Anvers"]
  },
  {
    id: "6-tr",
    slug: "tatilde-kedim-yalniz-kalabilir-mi",
    title: "Tatilde kedim evde yalnız: Maksimum güvenlik ve konfor",
    excerpt: "Kediniz tatiliniz boyunca evde yalnız kalabilir mi? Evet, doğru profesyonel önlemleri almanız şartıyla.",
    content: `## Kediniz evde yalnız güvende mi?

Birçok evcil hayvan sahibi, *tatilde kedisini evde yalnız bırakma* düşüncesiyle suçluluk hisseder. Ancak doğru destekle, genellikle en iyi seçim budur. Kediler rutin ve kendi bölgelerinde gelişirler.

### Önce güvenlik

Kediniz evde kaldığında profesyonel gözetim çok önemlidir:
1. **Günlük kontroller:** Hastalık, yaralanma veya evdeki sorunları (açık kalmış bir pencere gibi) kontrol ediyoruz.
2. **İklim kontrolü:** Kedinin ortamının çok sıcak veya soğuk olmamasını sağlıyoruz.
3. **Zihinsel uyarım:** Günlük oyun, can sıkıntısını ve yıkıcı davranışları önler.

Anvers'teki **Katten** hizmetleriyle endişelenmenize gerek yok. Her ziyareti yaka kamerası (bodycam) ile belgeliyoruz, böylece adeta bizimle birlikte izleyebilirsiniz. [Hizmetler](/tr/hizmetler) sayfamızdan daha fazlasını keşfedin.`,
    date: "2026-06-30",
    readTime: "2 min",
    author: "Dr. Katten - Biyolog",
    image: "/images/cat_security.png",
    seoTitle: "Tatilde Kedim Evde Yalnız | Katten Anvers",
    seoDescription: "Tatilde kediniz evde yalnız mı kalacak? Anvers'teki Katten'in güvenlik, konfor ve en iyi profesyonel bakımı nasıl sağladığını keşfedin.",
    locale: "tr",
    keywords: ["tatilde kedim", "kedi evde yaln\u0131z", "evde kedi bak\u0131m\u0131", "Anvers kedi bak\u0131c\u0131s\u0131"]
  },
  {
    id: "7-nl",
    slug: "gezondheidscheck-katten-preventieve-zorg",
    title: "Gezondheidscheck katten: Preventieve zorg thuis",
    excerpt: "Leer hoe u thuis de gezondheid van uw kat in de gaten kunt houden en waarom een bioloog als oppas van onschatbare waarde is.",
    content: `## Preventieve gezondheidszorg voor uw kat

Een regelmatige *gezondheidscheck voor katten* is essentieel, vooral omdat ze meesters zijn in het verbergen van pijn. Als bioloog benadruk ik altijd het belang van preventieve observatie in de eigen vertrouwde omgeving.

### Wat wij controleren tijdens oppasbezoeken

Wanneer het team van Katten langskomt, doen wij meer dan alleen voeren. Wij letten op:
- **Vachtconditie:** Een doffe of onverzorgde vacht kan wijzen op onderliggende problemen.
- **Ogen en oren:** Helder, geen afscheiding en geen overmatige opbouw van oorsmeer.
- **Gewicht en vochtbalans:** Door de hydratatie te controleren kunnen we nierproblemen (vaak bij oudere katten) vroegtijdig signaleren.
- **Kattenbak analyse:** De output in de kattenbak vertelt veel over de spijsvertering en urinewegen.

Kies voor zekerheid tijdens uw afwezigheid in Antwerpen. Onze wetenschappelijke benadering garandeert dat gezondheidsproblemen snel worden opgemerkt. Neem [Contact](/nl/contact) op voor meer informatie.`,
    date: "2026-07-05",
    readTime: "2 min",
    author: "Dr. Katten - Biyolog",
    image: "/images/cat_health.png",
    seoTitle: "Gezondheidscheck Katten Tips | Katten Antwerpen",
    seoDescription: "Hoe voert u een gezondheidscheck uit bij katten? Ontdek tips voor preventieve zorg en het belang van een professionele oppas in Antwerpen.",
    locale: "nl",
    keywords: ["gezondheidscheck katten", "kat gezondheid", "preventieve zorg kat", "symptomen zieke kat", "bioloog"]
  },
  {
    id: "7-en",
    slug: "cat-health-check-preventive-care",
    title: "Cat health check: Preventive care at home",
    excerpt: "Learn how to monitor your cat's health at home and why having a biologist as a sitter is invaluable.",
    content: `## Preventive health care for your cat

Regular *cat health checks* are essential, especially since they are masters at hiding pain. As a biologist, I always emphasize the importance of preventive observation in their own familiar environment.

### What we monitor during visits

When the Katten team visits, we do more than just feed. We pay attention to:
- **Coat condition:** A dull or unkempt coat can indicate underlying issues.
- **Eyes and ears:** Clear, no discharge, and no excessive wax buildup.
- **Weight and hydration:** Checking hydration can help detect kidney issues early.
- **Litter box analysis:** The output in the litter box reveals a lot about digestion and urinary tract health.

Choose certainty during your absence in Antwerp. Our scientific approach ensures that health issues are spotted quickly. [Contact](/en/contact) us for more information.`,
    date: "2026-07-05",
    readTime: "2 min",
    author: "Dr. Katten - Biyolog",
    image: "/images/cat_health.png",
    seoTitle: "Cat Health Check Tips | Katten Antwerp",
    seoDescription: "How to perform a cat health check? Discover tips for preventive care and the importance of a professional sitter in Antwerp.",
    locale: "en",
    keywords: ["cat health check", "cat health", "preventive care cat", "sick cat symptoms", "biologist"]
  },
  {
    id: "7-fr",
    slug: "bilan-de-sante-chat-soins-preventifs",
    title: "Bilan de santé du chat : Soins préventifs à domicile",
    excerpt: "Apprenez à surveiller la santé de votre chat et pourquoi avoir un biologiste comme cat sitter est inestimable.",
    content: `## Soins de santé préventifs pour votre chat

Un *bilan de santé régulier pour chat* est essentiel car ils cachent très bien leur douleur. En tant que biologiste, je souligne l'importance de l'observation préventive.

### Ce que nous surveillons lors de nos visites

L'équipe de Katten fait plus que nourrir. Nous surveillons :
- **L'état du pelage :** Un pelage terne peut indiquer des problèmes sous-jacents.
- **Yeux et oreilles :** Clairs, sans écoulement.
- **Poids et hydratation :** Vérifier l'hydratation aide à détecter les problèmes rénaux tôt.
- **Analyse de la litière :** Révèle beaucoup sur la digestion et la santé urinaire.

Choisissez la certitude pendant votre absence à Anvers. Notre approche scientifique garantit une détection rapide des problèmes. Prenez [Contact](/fr/contact) avec nous.`,
    date: "2026-07-05",
    readTime: "2 min",
    author: "Dr. Katten - Biyolog",
    image: "/images/cat_health.png",
    seoTitle: "Bilan Santé Chat | Katten Anvers",
    seoDescription: "Comment effectuer un bilan de santé pour chat ? Découvrez des conseils préventifs et l'importance d'un cat sitter pro à Anvers.",
    locale: "fr",
    keywords: ["bilan de sant\u00e9 chat", "sant\u00e9 chat", "soins pr\u00e9ventifs chat", "sympt\u00f4mes chat malade", "biologiste"]
  },
  {
    id: "7-tr",
    slug: "kedi-sagligi-kontrolu-ve-onleyici-bakim",
    title: "Kedi sağlığı kontrolü: Evde önleyici bakım",
    excerpt: "Kedinizin sağlığını evde nasıl izleyeceğinizi ve bakıcı olarak bir biyoloğa sahip olmanın neden paha biçilmez olduğunu öğrenin.",
    content: `## Kediniz için önleyici sağlık bakımı

Özellikle acıyı gizlemede usta oldukları için düzenli *kedi sağlığı kontrolleri* çok önemlidir. Bir biyolog olarak, kendi tanıdık ortamlarında önleyici gözlemin önemini her zaman vurguluyorum.

### Ziyaretlerimiz sırasında izlediklerimiz

Katten ekibi ziyaret ettiğinde sadece beslemekten fazlasını yaparız. Şunlara dikkat ederiz:
- **Tüy durumu:** Mat veya bakımsız tüyler altta yatan sorunları gösterebilir.
- **Gözler ve kulaklar:** Berrak, akıntı yok ve aşırı kir birikimi yok.
- **Ağırlık ve hidrasyon:** Hidrasyonu kontrol etmek, böbrek sorunlarını (yaşlı kedilerde yaygındır) erken teşhis etmeye yardımcı olabilir.
- **Kum kabı analizi:** Kum kabındaki çıktılar sindirim ve idrar yolu sağlığı hakkında çok şey ortaya koyar.

Anvers'teki yokluğunuzda kesinliği seçin. Bilimsel yaklaşımımız, sağlık sorunlarının hızlı bir şekilde fark edilmesini sağlar. Daha fazla bilgi için bizimle [İletişime](/tr/iletisim) geçin.`,
    date: "2026-07-05",
    readTime: "2 min",
    author: "Dr. Katten - Biyolog",
    image: "/images/cat_health.png",
    seoTitle: "Kedi Sağlığı Kontrolü | Katten Anvers",
    seoDescription: "Kedi sağlığı kontrolü nasıl yapılır? Önleyici bakım ipuçlarını ve Anvers'te profesyonel bir bakıcının önemini keşfedin.",
    locale: "tr",
    keywords: ["kedi sa\u011fl\u0131\u011f\u0131 kontrol\u00fc", "kedi sa\u011fl\u0131\u011f\u0131", "\u00f6nleyici kedi bak\u0131m\u0131", "hasta kedi belirtileri", "biyolog"]
  },
  {
    id: "8-nl",
    slug: "voeding-voor-katten-tips-wetenschap",
    title: "Voeding voor katten: Tips vanuit een wetenschappelijk perspectief",
    excerpt: "Katten zijn obligate carnivoren. Ontdek wat de beste voeding is voor uw kat, geadviseerd door een bioloog.",
    content: `## Katten zijn obligate carnivoren

Een van de meest gestelde vragen die ik krijg is over *voeding voor katten*. Biologisch gezien zijn katten obligate carnivoren. Dit betekent dat hun lichamen uitsluitend zijn gebouwd om dierlijke eiwitten te verteren. Ze hebben geen behoefte aan grote hoeveelheden koolhydraten.

### Hydratatie via voeding

Katten in het wild halen het grootste deel van hun vocht uit hun prooi. Onze huiskatten hebben vaak een verminderde dorstprikkel. Daarom is het toevoegen van natvoer aan het dieet cruciaal om blaas- en nierproblemen te voorkomen.

### Veiligheid en giftige planten

Naast voeding, controleren wij als oppasdienst in Antwerpen ook uw huis op giftige planten (zoals lelies) en zorgen we dat de voedingsroutine strikt wordt gevolgd tijdens uw afwezigheid. Bij **Katten** wegen we de porties af en monitoren we het eetgedrag nauwlettend. Meer weten? Bekijk onze [Diensten](/nl/diensten).`,
    date: "2026-07-10",
    readTime: "2 min",
    author: "Dr. Katten - Biyolog",
    image: "/images/cat_plants.png",
    seoTitle: "Voeding Voor Katten Tips | Katten Antwerpen",
    seoDescription: "Wat is de beste voeding voor katten? Lees wetenschappelijk onderbouwde tips over kattenvoeding van onze bioloog.",
    locale: "nl",
    keywords: ["voeding voor katten tips", "kattenvoer advies", "obligate carnivoor", "Katten Antwerpen", "dieet kat"]
  },
  {
    id: "8-en",
    slug: "cat-nutrition-guide-science",
    title: "Cat nutrition guide: Tips from a scientific perspective",
    excerpt: "Cats are obligate carnivores. Discover the best nutrition for your cat, advised by a biologist.",
    content: `## Cats are obligate carnivores

One of the most frequent questions I receive is about *cat nutrition*. Biologically, cats are obligate carnivores. This means their bodies are built exclusively to digest animal proteins. They do not need large amounts of carbohydrates.

### Hydration through food

Cats in the wild get most of their hydration from their prey. Our domestic cats often have a diminished thirst drive. Therefore, adding wet food to their diet is crucial to prevent bladder and kidney issues.

### Safety and toxic plants

Besides nutrition, as a pet sitting service in Antwerp, we also check your home for toxic plants (like lilies) and ensure the feeding routine is strictly followed during your absence. At **Katten**, we weigh portions and closely monitor eating behavior. Want to know more? Check our [Services](/en/services).`,
    date: "2026-07-10",
    readTime: "2 min",
    author: "Dr. Katten - Biyolog",
    image: "/images/cat_plants.png",
    seoTitle: "Cat Nutrition Guide | Katten Antwerp",
    seoDescription: "What is the best food for cats? Read scientifically backed tips on cat nutrition from our resident biologist.",
    locale: "en",
    keywords: ["cat nutrition guide", "cat food advice", "obligate carnivore", "Katten Antwerp", "feline diet"]
  },
  {
    id: "8-fr",
    slug: "alimentation-pour-chats-conseils-scientifiques",
    title: "Alimentation pour chats : Conseils d'un point de vue scientifique",
    excerpt: "Les chats sont des carnivores stricts. Découvrez la meilleure nutrition pour votre chat, conseillée par un biologiste.",
    content: `## Les chats sont des carnivores stricts

L'une des questions les plus fréquentes concerne l'*alimentation pour chats*. Biologiquement, les chats sont des carnivores stricts. Leur corps est conçu exclusivement pour digérer les protéines animales et n'a pas besoin de beaucoup de glucides.

### Hydratation par la nourriture

Dans la nature, les chats s'hydratent via leurs proies. Nos chats domestiques ressentent peu la soif. Ajouter de la nourriture humide est crucial pour éviter les problèmes rénaux.

### Sécurité et plantes toxiques

En plus de la nutrition, notre service à Anvers vérifie votre maison pour les plantes toxiques (comme les lys). Chez **Katten**, nous pesons les portions et surveillons le comportement alimentaire. Découvrez nos [Services](/fr/services).`,
    date: "2026-07-10",
    readTime: "2 min",
    author: "Dr. Katten - Biyolog",
    image: "/images/cat_plants.png",
    seoTitle: "Alimentation Pour Chats | Katten Anvers",
    seoDescription: "Quelle est la meilleure nourriture pour chats ? Lisez nos conseils scientifiques sur la nutrition féline par notre biologiste.",
    locale: "fr",
    keywords: ["alimentation pour chats", "conseil nourriture chat", "carnivore strict", "Katten Anvers", "r\u00e9gime chat"]
  },
  {
    id: "8-tr",
    slug: "kedi-beslenmesi-bilimsel-rehber",
    title: "Kedi Beslenmesi: Bilimsel bir perspektiften ipuçları",
    excerpt: "Kediler zorunlu etoburlardır. Bir biyolog tarafından tavsiye edilen, kediniz için en iyi beslenmeyi keşfedin.",
    content: `## Kediler zorunlu etoburlardır

En sık aldığım sorulardan biri *kedi beslenmesi* hakkındadır. Biyolojik olarak kediler zorunlu etoburlardır. Bu, vücutlarının yalnızca hayvansal proteinleri sindirmek üzere inşa edildiği anlamına gelir. Büyük miktarlarda karbonhidrata ihtiyaçları yoktur.

### Gıda yoluyla hidrasyon

Vahşi doğadaki kediler hidrasyonlarının çoğunu avlarından alırlar. Evcil kedilerimizin genellikle susuzluk dürtüsü azalmıştır. Bu nedenle, mesane ve böbrek sorunlarını önlemek için diyetlerine yaş mama eklemek çok önemlidir.

### Güvenlik ve zehirli bitkiler

Beslenmenin yanı sıra, Anvers'te bir kedi bakım servisi olarak evinizi zehirli bitkiler (zambak gibi) açısından da kontrol ediyor ve yokluğunuzda beslenme rutininin sıkı bir şekilde izlenmesini sağlıyoruz. **Katten**'de porsiyonları tartar ve yeme davranışlarını yakından izleriz. Daha fazlasını öğrenmek ister misiniz? [Hizmetlerimize](/tr/hizmetler) göz atın.`,
    date: "2026-07-10",
    readTime: "2 min",
    author: "Dr. Katten - Biyolog",
    image: "/images/cat_plants.png",
    seoTitle: "Kedi Beslenmesi Rehberi | Katten Anvers",
    seoDescription: "Kediler için en iyi mama hangisidir? Uzman biyoloğumuzdan kedi beslenmesi hakkında bilimsel olarak desteklenen ipuçlarını okuyun.",
    locale: "tr",
    keywords: ["kedi beslenmesi", "kedi mamas\u0131 tavsiyesi", "zorunlu etobur", "Katten Anvers", "kedi diyeti"]
  },
  {
    id: "9-nl",
    slug: "kitten-verzorging-tips-nieuwe-eigenaren",
    title: "Kitten verzorging tips voor nieuwe eigenaren",
    excerpt: "Een kitten in huis is fantastisch maar uitdagend. De belangrijkste tips voor een veilige en gezonde start.",
    content: `## De belangrijke eerste maanden van een kitten

Het in huis halen van een kitten is geweldig. Goede *kitten verzorging* in de eerste maanden is cruciaal voor de fysieke en mentale ontwikkeling. Als bioloog let ik vooral op de socialisatieperiode, die de basis legt voor het latere gedrag.

### Essentiële tips voor kittenverzorging

1. **Veilige ruimte:** Zorg voor een kleine, veilige basisruimte om te wennen.
2. **Kitten-proof huis:** Verberg kabels, sluit ramen (of gebruik horren) en verwijder giftige planten.
3. **Voeding:** Kittens hebben speciale voeding nodig met extra eiwitten en vetten voor de groei.
4. **Socialisatie:** Introduceer ze rustig aan nieuwe geluiden, mensen en routines.

Moet u onverwacht weg en heeft u een kitten thuis in Antwerpen? Bij **Katten** bieden we speciale kitten-care bezoeken aan, inclusief extra speel- en knuffeltijd voor de juiste socialisatie. Bekijk onze [Diensten](/nl/diensten) voor meer details.`,
    date: "2026-07-15",
    readTime: "2 min",
    author: "Dr. Katten - Biyolog",
    image: "/images/cat_emergency.png",
    seoTitle: "Kitten Verzorging Tips | Katten Antwerpen",
    seoDescription: "Heeft u een nieuwe kitten? Lees onze professionele tips over kittenverzorging, socialisatie en veiligheid in huis.",
    locale: "nl",
    keywords: ["kitten verzorging tips", "nieuwe kitten", "kitten opvoeden", "Katten Antwerpen", "kitten veiligheid"]
  },
  {
    id: "9-en",
    slug: "kitten-care-tips-new-owners",
    title: "Kitten care tips for new owners",
    excerpt: "Bringing a kitten home is wonderful but challenging. Essential tips for a safe and healthy start.",
    content: `## The crucial first months of a kitten

Bringing a kitten home is amazing. Proper *kitten care* in the early months is crucial for their physical and mental development. As a biologist, I pay special attention to the socialization period, which lays the foundation for future behavior.

### Essential kitten care tips

1. **Safe space:** Provide a small, safe base room for them to acclimate.
2. **Kitten-proof home:** Hide cables, close windows, and remove toxic plants.
3. **Nutrition:** Kittens need special food with extra proteins and fats for growth.
4. **Socialization:** Gently introduce them to new sounds, people, and routines.

Need to leave unexpectedly and have a kitten at home in Antwerp? At **Katten**, we offer special kitten-care visits, including extra playtime and cuddling for proper socialization. Check our [Services](/en/services) for more details.`,
    date: "2026-07-15",
    readTime: "2 min",
    author: "Dr. Katten - Biyolog",
    image: "/images/cat_emergency.png",
    seoTitle: "Kitten Care Tips | Katten Antwerp",
    seoDescription: "Got a new kitten? Read our professional tips on kitten care, socialization, and safety in the home.",
    locale: "en",
    keywords: ["kitten care tips", "new kitten", "raising a kitten", "Katten Antwerp", "kitten safety"]
  },
  {
    id: "9-fr",
    slug: "conseils-soins-chatons-nouveaux-proprietaires",
    title: "Conseils de soins pour chatons pour les nouveaux propriétaires",
    excerpt: "Accueillir un chaton est merveilleux mais exigeant. Les conseils essentiels pour un bon départ.",
    content: `## Les premiers mois cruciaux d'un chaton

Accueillir un chaton est fantastique. De bons *soins pour chatons* sont cruciaux pour leur développement. En tant que biologiste, j'accorde une grande importance à la période de socialisation.

### Conseils essentiels

1. **Espace sûr :** Prévoyez une petite pièce sécurisée pour l'acclimatation.
2. **Maison sécurisée :** Cachez les câbles, fermez les fenêtres et retirez les plantes toxiques.
3. **Nutrition :** Les chatons ont besoin d'aliments riches en protéines pour grandir.
4. **Socialisation :** Présentez doucement de nouveaux sons et personnes.

Vous devez vous absenter de votre domicile à Anvers ? Chez **Katten**, nous proposons des visites spéciales pour chatons avec du temps de jeu supplémentaire. Découvrez nos [Services](/fr/services).`,
    date: "2026-07-15",
    readTime: "2 min",
    author: "Dr. Katten - Biyolog",
    image: "/images/cat_emergency.png",
    seoTitle: "Conseils Soins Chatons | Katten Anvers",
    seoDescription: "Vous avez un nouveau chaton ? Lisez nos conseils professionnels sur les soins, la socialisation et la sécurité des chatons.",
    locale: "fr",
    keywords: ["soins chatons", "nouveau chaton", "\u00e9lever chaton", "Katten Anvers", "s\u00e9curit\u00e9 chaton"]
  },
  {
    id: "9-tr",
    slug: "yeni-sahipler-icin-kitten-bakimi-ipuclari",
    title: "Yeni sahipler için yavru kedi (kitten) bakımı ipuçları",
    excerpt: "Eve yavru kedi getirmek harikadır ancak zordur. Güvenli ve sağlıklı bir başlangıç için temel ipuçları.",
    content: `## Bir yavru kedinin çok önemli ilk ayları

Eve bir yavru kedi getirmek harikadır. İlk aylarda doğru *kitten bakımı* fiziksel ve zihinsel gelişimleri için çok önemlidir. Bir biyolog olarak, gelecekteki davranışın temelini atan sosyalleşme dönemine özellikle dikkat ediyorum.

### Temel yavru kedi bakımı ipuçları

1. **Güvenli alan:** Uyum sağlamaları için küçük, güvenli bir temel oda sağlayın.
2. **Kediye dayanıklı ev:** Kabloları gizleyin, pencereleri kapatın (veya sineklik kullanın) ve zehirli bitkileri uzaklaştırın.
3. **Beslenme:** Yavru kedilerin büyüme için ekstra protein ve yağ içeren özel mamalara ihtiyacı vardır.
4. **Sosyalleşme:** Onları yavaşça yeni sesler, insanlar ve rutinlerle tanıştırın.

Beklenmedik bir şekilde gitmeniz mi gerekiyor ve Anvers'teki evinizde bir yavru kediniz mi var? **Katten**'de, uygun sosyalleşme için ekstra oyun zamanı ve sarılma içeren özel yavru kedi bakım ziyaretleri sunuyoruz. Daha fazla ayrıntı için [Hizmetlerimizi](/tr/hizmetler) inceleyin.`,
    date: "2026-07-15",
    readTime: "2 min",
    author: "Dr. Katten - Biyolog",
    image: "/images/cat_emergency.png",
    seoTitle: "Yavru Kedi Bakımı İpuçları | Katten Anvers",
    seoDescription: "Yeni bir yavru kediniz mi var? Evde yavru kedi bakımı, sosyalleşme ve güvenlik konularındaki profesyonel ipuçlarımızı okuyun.",
    locale: "tr",
    keywords: ["kitten bak\u0131m\u0131", "yavru kedi", "kedi yavrusu b\u00fcy\u00fctmek", "Katten Anvers", "yavru kedi g\u00fcvenli\u011fi"]
  },
  {
    id: "10-nl",
    slug: "verlatingsangst-bij-katten-oplossen",
    title: "Verlatingsangst bij katten: Oplossingen en aanpak",
    excerpt: "Katten kunnen net als honden last hebben van verlatingsangst. Ontdek hoe u uw kat kunt helpen ontspannen als u weg bent.",
    content: `## Komt verlatingsangst bij katten voor?

Hoewel vaak geassocieerd met honden, is *verlatingsangst bij katten* een reëel probleem. Katten hechten zich sterk aan hun eigenaren en hun routines. Het verstoren van die routine kan leiden tot ernstige angst.

### Symptomen en oplossingen

Tekenen van verlatingsangst zijn onder meer:
- Luidruchtig miauwen bij uw vertrek.
- Onzindelijkheid.
- Destructief gedrag, zoals krabben aan meubels.

**Wat kunt u doen?**
- Maak vertrek en aankomst onopvallend (geen uitgebreid afscheid).
- Zorg voor verrijking in huis (puzzelvoeders, krabpalen, hoge zitplekken).
- Schakel een professionele oppas in die de routine handhaaft.

Als u in Antwerpen woont, kan **Katten** helpen. Onze bezoeken zijn gericht op het doorbreken de cyclus van eenzaamheid met interactief spel en geruststellende aanwezigheid, gedocumenteerd met onze bodycam. Neem [Contact](/nl/contact) met ons op voor een aanpak op maat.`,
    date: "2026-07-20",
    readTime: "2 min",
    author: "Katten Team",
    image: "/images/cat_bodycam.png",
    seoTitle: "Verlatingsangst Bij Katten | Katten Antwerpen",
    seoDescription: "Lijdt uw kat aan verlatingsangst? Leer van onze bioloog over de symptomen en oplossingen om stress bij uw huisdier te verminderen tijdens uw afwezigheid.",
    locale: "nl",
    keywords: ["verlatingsangst bij katten", "kat alleen laten huilen", "angstige kat", "Katten service", "gedrag kat"]
  },
  {
    id: "10-en",
    slug: "separation-anxiety-in-cats-solutions",
    title: "Separation anxiety in cats: Solutions and approaches",
    excerpt: "Cats can suffer from separation anxiety just like dogs. Discover how to help your cat relax when you are away.",
    content: `## Does separation anxiety exist in cats?

Though often associated with dogs, *separation anxiety in cats* is a real issue. Cats bond strongly with their owners and their routines. Disrupting that routine can lead to severe anxiety.

### Symptoms and solutions

Signs of separation anxiety include:
- Vocalizing loudly when you leave.
- Inappropriate elimination.
- Destructive behavior, like scratching furniture.

**What can you do?**
- Make departures and arrivals low-key (no dramatic goodbyes).
- Provide environmental enrichment (puzzle feeders, scratching posts, high perches).
- Hire a professional sitter who maintains the routine.

If you live in Antwerp, **Katten** can help. Our visits aim to break the cycle of loneliness with interactive play and reassuring presence, all documented with our bodycam. [Contact](/en/contact) us for a tailored approach.`,
    date: "2026-07-20",
    readTime: "2 min",
    author: "Katten Team",
    image: "/images/cat_bodycam.png",
    seoTitle: "Separation Anxiety in Cats | Katten Antwerp",
    seoDescription: "Does your cat suffer from separation anxiety? Learn from our biologist about the symptoms and solutions to reduce your pet's stress.",
    locale: "en",
    keywords: ["separation anxiety in cats", "crying cat alone", "anxious cat", "Katten service", "cat behavior"]
  },
  {
    id: "10-fr",
    slug: "anxiete-de-separation-chez-le-chat",
    title: "Anxiété de séparation chez le chat : Solutions",
    excerpt: "Les chats peuvent souffrir d'anxiété de séparation. Découvrez comment aider votre chat à se détendre en votre absence.",
    content: `## L'anxiété de séparation existe-t-elle chez les chats ?

Bien que souvent associée aux chiens, l'*anxiété de séparation chez le chat* est réelle. Les chats s'attachent fortement à leurs propriétaires et routines.

### Symptômes et solutions

Les signes incluent :
- Miaulements forts à votre départ.
- Malpropreté.
- Comportement destructeur.

**Que faire ?**
- Rendez les départs et arrivées discrets.
- Enrichissez l'environnement (jeux d'intelligence, griffoirs, perchoirs).
- Engagez un gardien professionnel pour maintenir la routine.

Si vous habitez Anvers, **Katten** peut vous aider. Nos visites visent à rompre la solitude avec des jeux interactifs et une présence rassurante, documentée par bodycam. [Contactez-nous](/fr/contact) pour une approche sur mesure.`,
    date: "2026-07-20",
    readTime: "2 min",
    author: "Katten Team",
    image: "/images/cat_bodycam.png",
    seoTitle: "Anxiété Séparation Chat | Katten Anvers",
    seoDescription: "Votre chat souffre d'anxiété de séparation ? Apprenez de notre biologiste les symptômes et solutions pour réduire son stress.",
    locale: "fr",
    keywords: ["anxi\u00e9t\u00e9 de s\u00e9paration chat", "chat qui pleure seul", "chat anxieux", "Katten service", "comportement chat"]
  },
  {
    id: "10-tr",
    slug: "kedi-ve-ayrilik-anksiyetesi-cozumler",
    title: "Kedi ve ayrılık anksiyetesi: Çözümler ve yaklaşımlar",
    excerpt: "Kediler de köpekler gibi ayrılık anksiyetesi yaşayabilir. Siz yokken kedinizin rahatlamasına nasıl yardımcı olacağınızı keşfedin.",
    content: `## Kedilerde ayrılık kaygısı var mıdır?

Genellikle köpeklerle ilişkilendirilse de, *kedi ve ayrılık anksiyetesi* gerçek bir sorundur. Kediler sahiplerine ve rutinlerine güçlü bir şekilde bağlanırlar. Bu rutini bozmak ciddi kaygıya yol açabilir.

### Belirtiler ve çözümler

Ayrılık kaygısı belirtileri şunları içerir:
- Evden ayrıldığınızda yüksek sesle miyavlama.
- Kum kabı dışında tuvalet yapma.
- Mobilyaları tırmalamak gibi yıkıcı davranışlar.

**Ne yapabilirsiniz?**
- Gidiş ve gelişleri abartısız hale getirin (dramatik vedalar yok).
- Çevresel zenginleştirme sağlayın (bulmaca besleyiciler, tırmalama direkleri, yüksek tüneme yerleri).
- Rutini koruyan profesyonel bir bakıcı tutun.

Anvers'te yaşıyorsanız, **Katten** size yardımcı olabilir. Ziyaretlerimiz, yaka kameramızla belgelenen interaktif oyunlar ve güven verici bir varlık ile yalnızlık döngüsünü kırmayı amaçlamaktadır. Özel bir yaklaşım için bizimle [İletişime](/tr/iletisim) geçin.`,
    date: "2026-07-20",
    readTime: "2 min",
    author: "Katten Team",
    image: "/images/cat_bodycam.png",
    seoTitle: "Kedilerde Ayrılık Anksiyetesi | Katten Anvers",
    seoDescription: "Kediniz ayrılık kaygısından mı muzdarip? Evcil hayvanınızın stresini azaltmak için semptomları ve çözümleri biyoloğumuzdan öğrenin.",
    locale: "tr",
    keywords: ["kedi ayr\u0131l\u0131k anksiyetesi", "yaln\u0131z a\u011flayan kedi", "endi\u015feli kedi", "Katten servisi", "kedi davran\u0131\u015f\u0131"]
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPostsByLocale(locale: string): BlogPost[] {
  return blogPosts.filter(post => post.locale === locale);
}
