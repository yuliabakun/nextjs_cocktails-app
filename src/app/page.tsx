import styles from './page.module.scss';
import Searchbar from './components/Searchbar/Searchbar';

export default function Home() {
  return (
    <main className={styles.home}>
      <aside className={styles.aside}>
        <Searchbar />
      </aside>
    </main>
  );
};
