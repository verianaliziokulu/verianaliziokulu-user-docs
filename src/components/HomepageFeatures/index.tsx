import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Kapsamlı Dokümantasyon',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Tüm eğitim içeriklerine kolayca erişin. Adım adım rehberler ve 
        detaylı açıklamalarla öğrenme sürecinizi hızlandırın.
      </>
    ),
  },
  {
    title: 'Hızlı Çözümler',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Sık karşılaşılan sorunlara anında çözümler bulun. 
        Arama özelliği ile ihtiyacınız olan bilgiye saniyeler içinde ulaşın.
      </>
    ),
  },
  {
    title: 'Güncel İçerik',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Sürekli güncellenen içeriklerle en son bilgilere erişin. 
        Yeni özellikler ve güncellemeler hakkında bilgi edinin.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
