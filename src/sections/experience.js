import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

export default function Experience() {
  return (
    <section className="sectionCont sectionContExperience">
      <div id="experience" className="target"></div>
      <header>
        <h2>Experience</h2>
      </header>
      <div className="cardContainer">
        <div className="card">
          <div className="cardContent">
          <div className="cardCont">
            <h5>
              <span>
                <FontAwesomeIcon icon={faCalendarAlt} /> 2021 - Present
              </span>
            </h5>
            <h3>Founder and CEO</h3>
            <h4>Cedar Brush Site Services & Janitorial</h4>
          </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2016 - Present
                </span>
              </h5>
              <h3>Steel River Group, Senior Manager, Relationships</h3>
              <h4>2Eighteen Holding Corp (Consulting)</h4>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2012 - 2017
                </span>
              </h5>
              <h3>Business Development Manager</h3>
              <h4>Summit Civils Limited Partnership</h4>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2012 - 2017
                </span>
              </h5>
              <h3>CEO/Business Development</h3>
              <h4>Dene Software Inc.</h4>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2010 - 2012
                </span>
              </h5>
              <h3>Youth Worker Lead</h3>
              <h4>Stehiyaq Healing and Wellness Center</h4>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2009 - 2010
                </span>
              </h5>
              <h3>Business Development Coordinator</h3>
              <h4>DeneSky Enterprises/Dene Iron</h4>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2008 - Present
                </span>
              </h5>
              <h3>Sales Manager/Business Development</h3>
              <h4>Liquid Trends Media</h4>
            </div>

            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2001 - 2004
                </span>
              </h5>
              <h3>Sales Associate/Sales Manager</h3>
              <h4>Future Shop Edmonton, Alberta</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
