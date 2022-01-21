import styles from '../styles/banner.module.css';
import Linkedin from '../svg/linkedin.js';
import Github from '../svg/github.js';
import { useContext } from 'react';
import { Contexto } from '../appContext';

export default function Banner() {
  const name = 'Corey Janvier';
  const email = 'corey@liquidtrends.com';
  const { setIsOpen } = useContext(Contexto);

  function openModal() {
    setIsOpen(true);
  }
  return (
    <section className={`container ${styles.banner}`}>
      <div className={`containerCont ${styles.bannerCont}`}>
        <section className={styles.bannerContLeft}>
          <h1>{name}</h1>
          <h2>
            Indigenous Partnership Development and Relationship Management
          </h2>
          <br />
          <h3>Nothing builds self-esteem and self-confidence like accomplishment</h3>
          <br />
          <h3>
            <a href={`mailto:${email}`}>{email}</a>
          </h3>
          <div className={`${styles.buttons}`}>
            <div>
              <button className={`${styles.but}`}>
                <a target="_blank" href="/pdf/corey-janvier-resume.pdf">
                  DOWNLOAD RESUME
                </a>
              </button>
              <button className={`${styles.but}`}>
                <a target="_blank" href="https://cedarbrushsiteservicesjanitorial.pipedrive.com/scheduler/6mJDqEuX/open-meetings">
                  BOOK A MEETING
                </a>
              </button>
              <button className={`${styles.svgBut}`}>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/corey-janvier-56a0a422/"
                >
                  <Linkedin />
                </a>
              </button>
            </div>

            <button onClick={openModal} className={`${styles.but}`}>
              CONTACT ME
            </button>
          </div>
        </section>
        <figure className={styles.bannerContRight}>
          <img alt="Corey Janvier" src="/images/corey-janvier.jpeg" />
        </figure>
      </div>
    </section>
  );
}
