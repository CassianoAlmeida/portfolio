import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 600;

  const handleResizeWindow = () => setWidth(window.innerWidth);
  const closeHamburguer = () => setIsMenuOpen(false);
  window.addEventListener('resize', handleResizeWindow);
  window.addEventListener('resize', closeHamburguer);


  const handleMenuClick = () => {
    if(width < breakpoint) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const topics = [{
    label: t('navbar.topics.0.about'),
    to: '/presentation'
  }, {
    label: t('navbar.topics.1.portfolio'),
    to: '/'
  } , {
    label: t('navbar.topics.2.contact'),
    to: '/contact'
  }];

  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.navbar__logo}>CA</div>
        <LanguageSelector />
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
