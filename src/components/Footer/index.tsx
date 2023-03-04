import styles from './Footer.module.scss';

export default function Footer() {
  return(
    <footer className={styles.footer}>
      <span className={styles.footer__content}>Desenvolvido por Cassiano</span>
      <span className={styles.footer__content}>2023</span>
    </footer>
  );
}