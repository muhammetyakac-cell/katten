'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: Record<string, { title: string; subtitle: string; items: FAQItem[] }> = {
  nl: {
    title: 'Veelgestelde Vragen (FAQ)',
    subtitle: 'Alles wat u wilt weten over onze kattenoppas aan huis in Antwerpen',
    items: [
      {
        question: 'Hoe werkt de Bodycam-garantie bij Katten?',
        answer: 'Onze oppassers dragen bij elk bezoek een HD-bodycam. Zodra het bezoek is afgerond, worden de videobeelden veilig geüpload. U krijgt direct een melding zodat u met eigen ogen kunt zien hoe uw kat is verzorgd, gevoerd en geknuffeld.'
      },
      {
        question: 'Hoe lang kan mijn kat alleen thuis blijven?',
        answer: 'Biologisch gezien mag een gezonde kat maximaal 24 uur alleen blijven. Wij raden ten minste 1 dagelijks bezoek aan om honger, vuile kattenbakken, eenzaamheid en medische noodgevallen te voorkomen.'
      },
      {
        question: 'Wat gebeurt er als mijn kat medische zorg of insuline nodig heeft?',
        answer: 'Onze oprichter is een gediplomeerd bioloog. Wij hebben ruime ervaring met het toedienen van pillen, zalven en insuline-injecties voor katten met diabetes op strakke tijdstippen.'
      },
      {
        question: 'Geef u ook planten water en haalt u de post op?',
        answer: 'Ja! Als gratis extra service gieten wij uw kamer- en tuinplanten water, verzamelen we uw post en openen/sluiten we de gordijnen om inbraak af te schrikken.'
      },
      {
        question: 'In welke wijken in Antwerpen zijn jullie actief?',
        answer: 'Wij passen op in alle Antwerpse districten: Centrum, Het Zuid, Zurenborg, Het Eilandje, Berchem, Deurne, Merksem, Wilrijk en Hoboken zonder verborgen reiskosten.'
      }
    ]
  },
  en: {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know about our Antwerp in-home cat sitting',
    items: [
      {
        question: 'How does the HD Bodycam guarantee work?',
        answer: 'Our sitters wear an HD bodycam during every single visit. After the visit is completed, video recordings are uploaded securely. You receive a link to watch exactly how your cat was fed, cared for, and played with.'
      },
      {
        question: 'How long can a cat be left home alone?',
        answer: 'Biologically, a healthy cat should never be left alone longer than 24 hours. We recommend at least one visit per day to prevent hunger, dirty litter boxes, loneliness, or undetected medical issues.'
      },
      {
        question: 'Can you administer medications or insulin shots?',
        answer: 'Yes! Founded by a biologist, our team is highly experienced in giving oral medications, ointments, and precise insulin injections for diabetic cats.'
      },
      {
        question: 'Do you water plants and collect mail?',
        answer: 'Yes! As a complimentary service, we water your house plants, retrieve your mail, and adjust blinds to maintain home security while you travel.'
      },
      {
        question: 'Which Antwerp neighborhoods do you cover?',
        answer: 'We cover all Antwerp districts including City Centre, Het Zuid, Zurenborg, Het Eilandje, Berchem, Deurne, Merksem, Wilrijk, and Hoboken.'
      }
    ]
  },
  fr: {
    title: 'Foire Aux Questions (FAQ)',
    subtitle: 'Tout ce que vous devez savoir sur notre service de garde à Anvers',
    items: [
      {
        question: 'Comment fonctionne la garantie Bodycam HD?',
        answer: 'Nos gardes portent une caméra vidéo HD lors de chaque visite. Les vidéos sont téléchargées en toute sécurité et vous recevez une preuve vidéo directe.'
      },
      {
        question: 'Combien de temps un chat peut-il rester seul?',
        answer: 'Un chat ne doit pas rester seul plus de 24 heures. Nous recommandons au moins une visite quotidienne.'
      },
      {
        question: 'Pouvez-vous administrer des médicaments ou de l\'insuline?',
        answer: 'Oui! Fondé par une biologiste, notre service administre les comprimés et injections d\'insuline à heures fixes.'
      },
      {
        question: 'Arrosez-vous les plantes et relevez-vous le courrier?',
        answer: 'Oui! Nous arrosons vos plantes et relevons votre courrier gratuitement.'
      },
      {
        question: 'Quels quartiers d\'Anvers couvrez-vous?',
        answer: 'Nous couvrons Anvers Centre, Zuid, Zurenborg, Eilandje, Berchem, Deurne, Merksem, Wilrijk et Hoboken.'
      }
    ]
  },
  tr: {
    title: 'Sıkça Sorulan Sorular (SSS)',
    subtitle: 'Anvers evde kedi bakım hizmetimiz hakkında merak edilen her şey',
    items: [
      {
        question: 'Yaka Kamerası (Bodycam) garantisi nasıl çalışıyor?',
        answer: 'Bakıcılarımız her ziyarette HD yaka kamerası takar. Ziyaret bittiğinde video kaydı güvenli şekilde yüklenir. Kedinizin maması verilirken ve oyun oynarken çekilen videoları anında izleyebilirsiniz.'
      },
      {
        question: 'Bir kedi evde kaç gün yalnız kalabilir?',
        answer: 'Biyolojik olarak sağlıklı bir kedi en fazla 24 saat yalnız kalmalıdır. Açlık, kirli kum ve sağlık acil durumlarını önlemek için günde en az 1 ziyaret öneriyoruz.'
      },
      {
        question: 'Kedime ilaç veya insülin iğnesi vurabilir misiniz?',
        answer: 'Evet! Biyolog kurucumuz önderliğinde ekibimiz kedi hapları, göz damlaları ve diyabetik kediler için insülin iğneleri konusunda uzmandır.'
      },
      {
        question: 'Çiçeklerimi sulayıp postalarımı topluyor musunuz?',
        answer: 'Evet! Ücretsiz ekstra hizmet olarak saksı çiçeklerinizi suluyor, postalarınızı topluyor ve ev güvenliği için perdeleri hareket ettiriyoruz.'
      },
      {
        question: 'Anvers\'in hangi bölgelerine geliyorsunuz?',
        answer: 'Anvers Merkez, Het Zuid, Zurenborg, Het Eilandje, Berchem, Deurne, Merksem, Wilrijk ve Hoboken dahil tüm semtlere geliyoruz.'
      }
    ]
  }
};

export default function FAQ({ locale = 'nl' }: { locale?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const data = faqData[locale] || faqData.nl;

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  // FAQPage JSON-LD Schema for Google Rich Snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className={styles.faqSection} id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container">
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.subtitle}>{data.subtitle}</p>

        <div className={styles.faqContainer}>
          {data.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
              >
                <button
                  className={styles.questionButton}
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className={`${styles.toggleIcon} ${isOpen ? styles.iconRotated : ''}`}>
                    ▼
                  </span>
                </button>
                {isOpen && (
                  <div className={styles.answerContent}>
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
