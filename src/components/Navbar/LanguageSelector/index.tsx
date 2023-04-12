import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import styles from './LanguageSelector.module.scss';

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'EN', label: 'English' },
    { code: 'PT', label: 'Português' },
    { code: 'ES', label: 'Español' },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0].code);
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  const handleLanguageButtonClick = () => {
    setShowLanguageOptions(!showLanguageOptions);
  };

  const handleLanguageOptionClick = (code: string) => {
    setSelectedLanguage(code);
    setShowLanguageOptions(false);
    i18n.changeLanguage(code);
  };

  return (
    <div className={styles.selectLanguage}>
      <button className={styles.selectLanguage__button} onClick={handleLanguageButtonClick}>
        {selectedLanguage}
      </button>
      <ul className={`${styles.selectLanguage__options}${showLanguageOptions ? ` ${styles['selectLanguage__options--show']}` : ''}`}>
        {languages.map((lang) => (
          <li
            key={lang.code}
            className={`${styles.selectLanguage__options__option} ${lang.code === selectedLanguage ? ` ${styles['selectLanguage__option--selected']}` : ''}`}
            onClick={() => handleLanguageOptionClick(lang.code)}
          >
            {lang.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

