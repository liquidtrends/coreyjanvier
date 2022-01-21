import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import Projects from "../sections/projects";

export default function Education() {
  return (
    <section className="sectionCont sectionContEducation">
      <div id="education" className="target"></div>
      <header>
        <h2>Education</h2>
      </header>
      <div className="cardContainer">
        <div className="card">
          <div className="cardContent">
            <div className="cardCont">
              <h5>
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faCalendarAlt} /> Present
                </span>
              </h5>
              <h3>Indigenous MBA</h3>
              <h4>Thompson River University/NVIT</h4>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2006 - 2010
                </span>
              </h5>
              <h3>Bachelor of Social Work</h3>
              <h4>Nicola Valley Institute of Technology/TRU, British Columbia</h4>
            </div>
            <div className="cardCont">
              <h5>
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faCalendarAlt} /> 2004 - 2006
                </span>
              </h5>
              <h3>Social Work Diploma</h3>
              <h4>Maskwachees Cultural College, Edmonton Alberta</h4>
            </div>
          </div>
        </div>
      </div>
      <header>
        <h2>Projects</h2>
        <Projects />
      </header>
    </section>
  );
}
