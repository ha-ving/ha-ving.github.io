import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '비에도 지지 않고',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      비에도 지지 않고 바람에도 지지 않고<br/>
      눈보라에도, 여름 더위에도 지지 않는<br/>
      
      튼튼한 몸과 욕심 없는 마음으로 <br/>
      결코 화내지 않으며 늘 조용히 웃음 짓고<br/>
      
      하루에 현미 네 홉과 된장과 채소를 조금 먹고<br/>
      모든 일에 내 잇속을 따지지 않고<br/>
      잘 보고 듣고 알고 그래서 잊지 않고<br/>
      들판 소나무 숲 그늘 아래 작은 집에 살고<br/>
      
      동쪽에 아픈 아이가 있으면 <br/>
      가서 돌보아주고<br/>
      
      서쪽에 지친 어머니 있으면 <br/>
      가서 볏단 지어 날라주고<br/>
      
      남쪽에 죽어가는 사람 있으면<br/>
      가서 두려워하지 말라 말하고<br/>
      
      북쪽에 싸움이나 소송이 있으면<br/>
      별거 아니니까 그만두라 말하고<br/>
      
      가뭄들면 눈물 흘리고<br/>
      냉해 든 여름이면 허둥대며 걷고<br/>
      
      모두에게 바보라 불려도<br/>
      칭찬에도 미움에도 휘둘리지 않는<br/>
      
      그런 사람이 나는 되고 싶다.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
