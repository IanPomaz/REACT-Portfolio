import styles from './Footer.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <p className={styles.footerText}>focusfolio</p>
      <div className={styles.footerLinks}>
        <a href="/about" className={styles.footerLink}>
          About Us
        </a>
        <a href="/contact" className={styles.footerLink}>
          Contact Me
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;