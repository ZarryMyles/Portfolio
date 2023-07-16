import Head from "next/head";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import { Landing } from "../components/Landing";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import Work from "../components/Work";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

// Resume Link
const resumeLink = process.env.NEXT_PUBLIC_RESUME_URL;

export default function Home() {
  // Work Modal
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => {
    setModalVisible(true);
  };
  const hideModal = () => {
    setModalVisible(false);
  };

  // AOS
  useEffect(() => {
    AOS.init();
  }, []);

  // Loader
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        {/* Meta Tags */}
        <title>Mahanth - Web Developer</title>
        <meta name="keywords" content="ZarryMyles, Mahantha N" />
        <meta
          name="description"
          content="A MERN stack Developer based in Bangalore who builds websites focused on simplicity and performance."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="Mahantha N" />

        {/* HTML Meta Tags */}

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://mahanth.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mahantha - Web Developer" />
        <meta
          property="og:description"
          content="A MERN stack Developer based in Bangalore who builds websites focused on simplicity and performance."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/zarry/image/upload/v1689525918/imageedit_2_4571267636_seasep.png"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="mahanth.dev" />
        <meta property="twitter:url" content="https://mahanth.dev" />
        <meta name="twitter:title" content="Mahantha - Web Developer" />
        <meta
          name="twitter:description"
          content="A MERN stack Developer based in Bangalore who builds websites focused on simplicity and performance."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/zarry/image/upload/v1689525918/imageedit_2_4571267636_seasep.png"
        />

        {/* Meta Tags Generated via https://www.opengraph.xyz */}

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
      </Head>

      {loading ? (
        <Loader />
      ) : (
        <main className="bg-light-text font-montserrat overflow-x-hidden">
          <Navbar resume={resumeLink} />
          <div id="top"></div>
          <Landing className="bg-red-300" />
          <About onClick={hideModal} resume={resumeLink} />
          <div id="work"></div>
          <Work
            showModal={showModal}
            modalVisible={modalVisible}
            hideModal={hideModal}
          />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}
