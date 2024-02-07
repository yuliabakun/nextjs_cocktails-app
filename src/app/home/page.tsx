import './page.scss';
import Header from "../components/Header/Header";
import SearchBarAside from "../components/SearchBarAside/SearchBarAside";

export default function Home() {
  return (
    <>
      <Header />

      <main className="homepage">
        <aside className="homepage__aside">
          <SearchBarAside />
        </aside>
      </main>
    </>
  );
}
