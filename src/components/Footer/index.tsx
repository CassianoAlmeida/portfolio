import styles from './Footer.module.scss';
import githubLogo from 'assets/logos/github-white-logo.png';
import whatsappLogo from 'assets/logos/whatsapp-logo.png';
import linkedinLogo from 'assets/logos/linkedin-white-logo.png';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return(
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__container__content}>
          <span className={styles.footer__container__content__text}>{t('footer.text')} por Cassiano - 2023</span>
        </div>
        <div className={styles.footer__container__logos}>
          <a 
            className={styles.footer__container__logos__link}
            href='https://github.com/CassianoAlmeida'
          >
            <img className={styles.footer__container__logos__img} src={githubLogo} alt="github" />
          </a>
          <a 
            className={styles.footer__container__logos__link}
            href='https://wa.me/5515997399931'
          >
            <img className={styles.footer__container__logos__img} src={whatsappLogo} alt="whatsapp" />
          </a>
          <a 
            className={styles.footer__container__logos__link}
            href='https://www.linkedin.com/in/cassiano-alves-de-almeida'
          >
            <img className={styles.footer__container__logos__img} src={linkedinLogo} alt="linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
}