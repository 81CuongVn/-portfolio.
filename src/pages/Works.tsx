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
        description="See my past work and experiences in the fields."
      />
      <div className={styles['info']}>
        <h1 className={styles['title']}>
          Works and Experience <br />
        </h1>{' '}
        <br />
        <small className={styles['description']}>
          See my past work and experiences in the fields
        </small>
      </div>
      <div className={styles['container']}>
        <Card
          href="https://securitybot.xyz"
          logo="https://securitybot.xyz/icon.png"
          title="Security Bot"
          role="Former Web Developer"
          date="Oct 2020 - Dec 2020"
        />
        <Card
          href="https://xetha-bot.me/"
          logo="https://xetha-bot.me/logo.webp"
          title="Xetha"
          subtitle="WIP"
          role="Owner / Developer"
          date="Dec 2020 - Present"
        />
        <Card
          href="https://levely.me"
          logo="https://levely.me/logo.webp"
          title="Levely.me"
          role="Website Designer"
          date="Apr 2021"
        />
        <Card
          href="https://discord.gg/qYxn4BS"
          logo="https://pbs.twimg.com/profile_images/1422090458675679235/aIbz-uKK.jpg"
          title="Trimix's Discord"
          role="Former Bot Developer"
          date="July 2020 - Dec 2020"
        />
        <Card
          href="https://www.mc-market.org/threads/659497/"
          logo="https://i.pinimg.com/originals/40/68/fb/4068fba617e6a50972b821684fed9ee6.png"
          title="Payday Bot"
          subtitle="SOLD"
          role="Creator / Developer"
          date="Apr 2021"
        />
        <Card
          href="https://discord.com/invite/auc"
          logo="https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec"
          title="Among Us Community"
          role="Former Bot Developer"
          date="Aug 2020 - Nov 2020"
        />
        <Card
          href="https://www.youtube.com/c/ZeroSync"
          logo="https://cdn.discordapp.com/guilds/729919498076946463/users/603948445362946084/avatars/a_2933a8366e6565c37159e8b482194175.gif?size=256"
          title="ZeroSync Content Creator"
          role="Manager"
          date="May 2021 - Present"
        />
      </div>
    </Content>
  );
};

export default Works;
