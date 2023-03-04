import React, { useState } from 'react';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const topics : Array<string> = ['About me', 'My portfolio', 'Contact me'];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>Portfolio</div>
      <button
        className={styles.navbar__hamburger + (isMenuOpen ? ' ' + styles.open : '')}
        onClick={handleMenuClick}
      >
        <span className={styles['navbar__hamburger-line']}></span>
        <span className={styles['navbar__hamburger-line']}></span>
        <span className={styles['navbar__hamburger-line']}></span>
      </button>
      <ul className={styles.navbar__topics + (isMenuOpen ? ' ' + styles.open : '')}>
        {topics.map((topic) => (
          <li key={topic} className={styles.navbar__topic}>
            {topic}
          </li>
        ))}
      </ul>
    </nav>
  );
}
