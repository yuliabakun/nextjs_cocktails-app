import { Button } from '@mui/material';
import './globals.scss';


export default function Home() {
  return (
    <main className="home">
      <section className="home__info">
        <h2 className="home__title">Welcome to the My Cocktail Bar!</h2>
        <article>
          <p>Explore an extensive collection of cocktail recipes categorized by ingredients, name or category.</p>
          <p>Begin your journey by navigating to the Browse section.</p>

          <p>To unlock the full potential of our website, create an account. Once registered, you can personalize your experience by adding cocktails to your favorites and even contribute your own recipes.</p>
        </article>
      </section>
    </main>
  );
};
