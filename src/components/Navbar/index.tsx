import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 600;

  const handleResizeWindow = () => setWidth(window.innerWidth);
  window.addEventListener('resize', handleResizeWindow);

  const handleMenuClick = () => {
    if(width < breakpoint) {
      console.log('aqui');
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const topics = [{
    label: 'About me',
    to: '/presentation'
  }, {
    label: 'My portfolio',
    to: '/'
  } , {
    label: 'Contact me',
    to: '/contact'
  }];

  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.navbar__logo}>CA</div>
        <button
          className={styles.navbar__hamburger + (isMenuOpen ? ' ' + styles.open : '')}
          onClick={handleMenuClick}
        >
          <span className={styles['navbar__hamburger-line']}></span>
          <span className={styles['navbar__hamburger-line']}></span>
          <span className={styles['navbar__hamburger-line']}></span>
        </button>
        <ul className={styles.navbar__topics + (isMenuOpen ? ' ' + styles.open : '')}>
          {topics.map((topic, index) => (
            <li key={index} className={styles.navbar__topic}>
              <Link className={styles.navbar__topic__link} to={topic.to} onClick={handleMenuClick}>
                {topic.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
