import styles from './styles.module.scss';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="#" className={styles.footer__link}>Github</Link>
      <Link href="#" className={styles.footer__link}>LinkedIn</Link>
      <Link href="#" className={styles.footer__link}>Contacts</Link>
    </footer>
  )
};
