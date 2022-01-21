import { useContext } from 'react';
import { Contexto } from '../appContext';

export default function AboutMe() {
  const { setIsOpen } = useContext(Contexto);

  function openModal() {
    setIsOpen(true);
  }

  const email = 'corey@liquidtrends.com';
  return (
    <section className="container">
      <div className="containerCont sectionCont sectionContAbout">
        <div id="about" className="target"></div>
        <header>
          <h2>about me</h2>
        </header>

        <p>
        A results-oriented and strategic leader with 18 years of extensive experience in accomplishing
remarkable outcomes in economic and community development. Highly skilled in planning,
organizing and implementing economic development functions from conception to completion,
including business retention, business attraction, and incentive programs. Adept at
coordinating with various subdivisions and facilitating change in a community to support
organizational objectives. Possess proven success in the economic development program,
budgeting, and management, operational characteristics & services, cross-departmental
project management, human resources development, review and analyze data and deliver
information in a comprehensible manner. Strong background in relationship management,
team building and general business acumen coupled with a significant track record of driving
profitability gains and huge revenues within highly competitive organizations.
        </p>
      </div>
    </section>
  );
}
