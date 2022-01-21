import Head from "next/head";
import NavBar from "../sections/navBar";
import Banner from "../sections/banner";
import AboutMe from "../sections/aboutMe";
import Education from "../sections/education";
import Experience from "../sections/experience";
import Projects from "../sections/projects";
import Skills from "../sections/skills";
import Modal from "../components/modal";
import { Contexto } from "../appContext";
import { useContext } from "react";

export default function Home() {
  const { navResOpen, setNavResOpen } = useContext(Contexto);
  const closeNavRes = () => {
    if (navResOpen) {
      setNavResOpen(() => false);
    }
  };
  return (
    <>
      <Head>
        <title>Corey Janvier</title>
        <meta
          name="description"
          content="Corey Janvier"
        />
        <meta property="og:title" content="Corey Janvier" />
        <meta property="og:site_name" content="Corey Janvier" />
        <meta property="og:url" content="https://coreyjanvier.com" />
        <meta
          property="og:description"
          content="Online resume for Corey Janvier"
        />
        <meta property="og:type" content="profile" />
        <meta
          property="og:image"
          content=""
        />
        <meta property="og:image:width" content="1580"/>
        <meta property="og:image:height" content="790"/>
        <meta name="twitter:image" content=""/>
      </Head>
      <Modal />
      <NavBar />
      <main onClick={closeNavRes}>
        <Banner />
        <AboutMe />
        <section className="container">
          <div className="containerCont rowFlexRes breakExpEduc">
            <Experience />
            <Education />
          </div>
        </section>
      </main>
    </>
  );
}
