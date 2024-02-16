import Link from 'next/link';
import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="#">Github</Link>
    </footer>
  )
}