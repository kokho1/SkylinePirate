import React from "react";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <header className={styles.homeHeader}>
        <h1>Welcome to the Skyline Pirates</h1>
        <p>Set sail on the Grand Line with our legendary crew!</p>
      </header>

      <section className={styles.crewIntro}>
        <h2>Meet the Crew</h2>
        <p>
          From Molejona "Hot Shower" Jerrick to Jew Frias "Burger Destroyer" Derick, each member of our crew has a unique story, unmatched skills, and a dream to conquer the seas.
        </p>
        <a href="/crew" className={styles.exploreBtn}>
          Explore the Crew
        </a>
      </section>

      <section className={styles.adventures}>
        <h2>Our Adventures</h2>
        <p>
          Discover the battles we've fought, the alliances we've forged, and the treasures we've uncovered. The Grand Line holds many secrets, and we're here to find them all.
        </p>
        <a href="/adventures" className={styles.exploreBtn}>
          See Our Adventures
        </a>
      </section>

      <footer className={styles.homeFooter}>
        <p>Skyline Pirates © 2024 | Adventure Awaits!</p>
      </footer>
    </div>
  );
};

export default Home;
