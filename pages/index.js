import Head from "next/head";
import Script from "next/script";

import initScrollReveal from "../scripts/scrollReveal";
// import initTiltEffect from "../scripts/tiltAnimation";
import { targetElements, defaultProps } from "../scripts/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
// initTiltEffect();

// Components
import { Landing } from "../components/Landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mahanth | Developer</title>
        <meta name="keywords" content="ZarryMyles, Mahantha, React" />
        <meta
          name="description"
          content="Mahantha N | MERN Stack Web Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <Script
          defer
          src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"
        />
        <Script async defer src="https://buttons.github.io/buttons.js" />
      </Head>
      <main className="bg-background font-montserrat">
        <div id="top"></div>
        <Landing />
      </main>
    </>
  );
}
