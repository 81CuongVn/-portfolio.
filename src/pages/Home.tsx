import React from 'react';
import Typical from 'react-typical';
import Particles from '../components/Particles';
import Content from '../components/Content';
import Meta from '../components/Meta';

import styles from './Home.module.css';
import colors from './Colors.module.css';

const Home: React.FC = () => {
  return (
    <Content>
      <Meta />
      <Particles particles={['0', '1']} />
      <div className={styles['center']}>
        <img src="photo.webp" alt="saturn" className={styles['photo']} />
      </div>
      <div className={styles['center']}>
        <h1 className={styles['name']}>
          <span className={colors['text-blue']}>Undefine</span>{' '}
          <span className={colors['text-green']}>Development</span>
        </h1>
      </div>
      <div className={styles['center']}>
        <p className={styles['description']}>
          <Typical
            steps={[
              1000,
              'Welcome to my community 81CuongVn !',
              1000,
              'I am an IT Student in VietNamese',
              1000,
              'I am a Full Stack Web Developer',
              1000,
              'I am an Open Sourcerer',
              1000,
              'I am a Systems Administrator',
              1000,
              'Thank you for visiting !',
              1000,
            ]}
            loop={Infinity}
            wrapper="h3"
          />
          <br />A Passionate Programmer with a flair for creating elegant
          solutions in the least amount of time and creative cloud computing
        </p>
      </div>
    </Content>
  );
};

export default Home;
