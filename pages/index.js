import Head from "next/head";
import Script from "next/script";

import initScrollReveal from "../scripts/scrollReveal";
// import initTiltEffect from "../scripts/tiltAnimation";
import { targetElements, defaultProps } from "../scripts/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
// initTiltEffect();

// Components
import { Landing } from "../components/Landing";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Work } from "../components/Work";

export default function Home() {
  return (
    <>
      <Head>
        {/* Meta Tags */}
        <title>Mahanth | Developer</title>
        <meta name="keywords" content="ZarryMyles, Mahantha, React" />
        <meta name="description" content="Mahantha N | Web Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="Mahantha N" />

        {/* Open Graph */}
        <meta property="og:url" content="https://mahanth.tech" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mahantha - Web Developer" />
        <meta
          property="og:description"
          content="A MERN stack Developer based in Bangalore who builds websites focused on simplicity and performance."
        />
        <meta
          property="og:image"
          itemprop="image"
          content="https://res.cloudinary.com/zarry/image/upload/v1671608478/profile_zuk8mn.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="mahanth.tech" />
        <meta property="twitter:url" content="https://mahanth.tech/" />
        <meta name="twitter:title" content="Mahantha - Web Developer" />
        <meta
          name="twitter:description"
          content="A MERN stack Developer based in Bangalore who builds websites focused on simplicity and performance."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/zarry/image/upload/v1671608478/profile_zuk8mn.png"
        />

        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest"></link>

        {/* Scripts */}
        <Script
          defer
          src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"
        />
        <Script async defer src="https://buttons.github.io/buttons.js" />
      </Head>

      <main className="bg-light-text font-montserrat">
        <div id="top"></div>
        <Landing />
        <About />
        <Work />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
