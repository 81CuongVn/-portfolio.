import React from 'react';
import Content from '../components/Content';
import Meta from '../components/Meta';

import styles from './Works.module.css';
import colors from './Colors.module.css';

interface CardProps {
  href: string;
  logo: string;
  title: string;
  subtitle?: string;
  role: string;
  date: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <a className={styles['card']} href={props.href} target="_b">
      <img className={styles['card-image']} src={props.logo} alt="logo" />
      <div className={styles['card-body']}>
        <h3 className={styles['card-title']}>
          {props.title}{' '}
          {props.subtitle && (
            <small className={colors['text-secondary']}>{props.subtitle}</small>
          )}
        </h3>
        <p>
          {props.role} <br />
          <small className={colors['text-secondary']}>{props.date}</small>
        </p>
      </div>
    </a>
  );
};

const Works: React.FC = () => {
  return (
    <Content>
      <Meta
        title="Works and Experience"
        description="Xem công việc trước đây và kinh nghiệm của tôi trong các lĩnh vực."
      />
      <div className={styles['info']}>
        <h1 className={styles['title']}>
          Works and Experience <br />
        </h1>{' '}
        <br />
        <small className={styles['description']}>
      Xem công việc trước đây và kinh nghiệm của tôi trong các lĩnh vực
        </small>
      </div>
      <div className={styles['container']}>
        <Card
          href="https://milrato.dev/"
          logo="https://xetha-bot.me/logo.webp"
          title="Xetha"
          subtitle="WIP"
          role="CEO / Founder"
          date="Dec 2020 - Present"
        />
        <Card
          href="https://www.youtube.com/channel/UCNE4yy2XWJMk1og08Oxp6wQ"
          logo="https://cdn.discordapp.com/guilds/729919498076946463/users/603948445362946084/avatars/a_2933a8366e6565c37159e8b482194175.gif?size=256"
          title="Tô Thanh Cường"
          role="Manager"
          date="May 2021 - Present"
        />
        <Card
          href="https://levely.me"
          logo="https://levely.me/logo.webp"
          title="Levely.me"
          role="Website Designer"
          date="Apr 2021"
        />
        <Card
          href="https://securitybot.xyz"
          logo="https://securitybot.xyz/icon.png"
          title="Security Bot"
          role="Web Developer"
          date="Sept 2020 - Nov 2020"
        />
        <Card
          href="https://www.youtube.com/channel/UCNE4yy2XWJMk1og08Oxp6wQ"
          logo="https://yt3.ggpht.com/_G42q9sPVgEvQepfdRxT4JwKWjFUmxzAP-uQ1vStUEiqHdG61jvSEQ1eiEctRMMdmHhC2dvcaw=s48-c-k-c0x00ffffff-no-rj"
          title="Tô Thanh Cường"
          role="Management / Developer"
          date="July 2020 - Dec 2020"
        />
        <Card
          href="https://discord.gg/h6UjhXuduN"
          logo="https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec"
          title="Among Us Community"
          role="Developer"
          date="Aug 2020 - Nov 2020"
        />
      </div>
    </Content>
  );
};

export default Works;
