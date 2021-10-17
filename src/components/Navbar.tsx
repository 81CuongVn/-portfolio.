import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

interface Props {
  to: string;
}

const NavLink: React.FC<Props> = (props) => {
  const { pathname } = useLocation();

  if (pathname === props.to) {
    return (
      <Link to="#" className={`${styles['item']} ${styles['active']}`}>
        {props.children}
      </Link>
    );
  }

  return (
    <Link to={props.to} className={styles['item']}>
      {props.children}
    </Link>
  );
};

const Navbar: React.FC = () => {
  return (
    <nav className={styles['nav']}>
      <div className={styles['list']}>
        <NavLink to="/">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/works">Works</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
