import React, { useState } from 'react';
import Content from '../components/Content';
import Meta from '../components/Meta';

import styles from './Contact.module.css';
import colors from './Colors.module.css';

interface CardProps {
  title: string;
  value: string;
  href?: string;
}

const Card: React.FC<CardProps> = (props) => {
  const [copied, setCopy] = useState(false);

  return (
    <a
      className={styles['card']}
      target={props.href ? '_blank' : '_self'}
      href={props.href ? props.href : '#'}
      onClick={() => {
        if (!props.href) {
          navigator.clipboard.writeText(props.value);
          setCopy(true);
        }
      }}
      onMouseLeave={() => setCopy(false)}
    >
      <h3>
        {props.title}{' '}
        <small className={colors['text-secondary']}>
          {copied ? 'Copied to clipboard' : props.value}
        </small>
      </h3>
    </a>
  );
};

const Contact: React.FC = () => {
  return (
    <Content>
      <Meta
        title="Contact"
        description="If you ever need to contact me for business, or just to say hello, this page has the information on how to contact me"
      />
      <div className={styles['info']}>
        <h1 className={styles['title']}>
          Contact <br />
        </h1>{' '}
        <br />
        <small className={styles['description']}>
          If you ever need to contact me for business, or just to say hello, here is my Email, Discord, and Github.
        </small>
      </div>
      <div className={styles['container']}>
        <Card
          title="Discord"
          value="Click Me!"
          href="https://discord.gg/7Xuy3wgWZu"
        />
        <Card title="Email" value="business@undefine-dev.tech" />
        <Card
          title="Github"
          value="Click Me!"
          href="https://github.com/oadpoaw"
        />
      </div>
    </Content>
  );
};

export default Contact;
