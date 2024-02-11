import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faStar,
  faWandMagicSparkles,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const First = () => {
  return (
    <section id="first" className="main">
      <header>
        <div className="container">
          <h2>Modern website design with CMS solutions.</h2>
          {/* <p>
            Crafting digital excellence, we specialize in bespoke website
            development services tailored to elevate your online presence and
            drive unparalleled user experiences.
          </p> */}
        </div>
      </header>
      <div className="content dark style1 featured">
        <div className="container">
          <div className="row">
            <div className="col-4 col-12-narrow">
              <section>
                <span className="feature-icon">
                  <span className="icon">
                    <FontAwesomeIcon icon={faGlobe} />
                  </span>
                </span>
                <header>
                  <h3 className="rounded-lg p-4 shadow-md">Basic-RM380</h3>
                </header>
                <p>
                  Personal Portfolio Website up to 4 sections + Free Hosting +
                  CMS(Content Management System)
                </p>
                <ul className="list-none text-sm  rounded-lg p-4 shadow-md italic">
                  <li>2 Days Delivery</li>
                  <li>3 Revisions</li>
                  <li>1 page</li>
                  <li>Design customization</li>
                  <li>Content upload CMS</li>
                  <li>Responsive design</li>
                  <li>Source code</li>
                </ul>
              </section>
            </div>
            <div className="col-4 col-12-narrow">
              <section>
                <span className="feature-icon">
                  <span className="icon">
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                </span>
                <header>
                  <h3 className="rounded-lg p-4 shadow-md">Standard-RM550</h3>
                </header>
                <p>
                  Professional Personal/Company Website up to 6 sections & 4
                  page + Free Hosting + CMS(Content Management System)
                </p>
				<ul className="list-none text-sm  rounded-lg p-4 shadow-md italic">
                  <li>3 Days Delivery</li>
                  <li>5 Revisions</li>
                  <li>4 page</li>
                  <li>Design customization</li>
                  <li>Content upload CMS</li>
                  <li>Responsive design</li>
                  <li>Source code</li>
                  <li>Detailed code comments</li>
                </ul>
              </section>
            </div>
            <div className="col-4 col-12-narrow">
              <section>
                <span className="feature-icon">
                  <span className="icon">
                    <FontAwesomeIcon icon={faWandMagicSparkles} />
                  </span>
                </span>
                <header>
                  <h3 className="rounded-lg p-4 shadow-md ">Advance-RM880</h3>
                </header>
                <p>
                  Professional Personal/Company Website up to 10 sections & 7
                  page + Free Hosting + CMS(Content Management System)
                </p>
				<ul className="list-none text-sm  rounded-lg p-4 shadow-md italic">
                  <li>4 Days Delivery</li>
                  <li>10 Revisions</li>
                  <li>7 page</li>
                  <li>Design customization</li>
                  <li>Content upload CMS</li>
                  <li>Responsive design</li>
                  <li>Source code</li>
                  <li>Detailed code comments</li>
                </ul>
              </section>
            </div>
            <div className="col-12">
              <footer>
                <a href="#second" className="button scrolly">
                  View Projects
                </a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default First;
