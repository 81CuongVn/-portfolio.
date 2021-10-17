import React from 'react';
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
        <h1 className={styles['name']}>Undefine Development</h1>
      </div>
      <div className={styles['center']}>
        <p className={styles['description']}>
          Hello! I am an
          <i>
            <b className={colors['text-yellow']}> ICT Student</b>,
            <b className={colors['text-blue']}> Full Stack Web Developer</b>,
            <b className={colors['text-green']}> Open Sourcerer</b>, and
            <b className={colors['text-red']}> Systems Administrator</b>
          </i>{' '}
          <br />
          with a flair for creating elegant solutions in the least amount of
          time and creative cloud computing
        </p>
      </div>
    </Content>
  );
};

export default Home;
