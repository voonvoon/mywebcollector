import reactPic from "../images/react_pic.jpg";

const Third = () => {
  return (
    <section id="third" className="main">
      <header>
        <div className="container">
          <h2>
            Creating custom website designs with Content Management System (CMS)
            solutions.
          </h2>
          <p>
            Delivering digital innovation, we excel in personalized website
            development services designed to enhance your online visibility and
            provide exceptional user interactions.
            <br />
          </p>
        </div>
      </header>
      <div className="content dark style3">
        <div className="container">
          <span className="image featured">
            <img src={reactPic} alt="" />
          </span>
          <div className="row">
            <div className="col-4 col-12-narrow">
              <h3>
                Our specialized areas in tech include React, Sanity.io, and
                modern responsive web development.
              </h3>
              <p>
                Our service offering brings together three powerful elements to
                elevate your online presence. With React app development at the
                core, we ensure your website not only looks great but also
                functions seamlessly across devices. Leveraging React's
                component-based architecture, we create dynamic and responsive
                experiences that captivate your audience. Whether you're
                launching a new site or revamping an existing one, our expertise
                in React guarantees a modern and engaging web presence that sets
                you apart from the competition.
              </p>
            </div>
            <div className="col-4 col-12-narrow">
              <p>
                Complementing our React development is Sanity.io CMS, providing
                you with unparalleled control over your content. Say goodbye to
                rigid templates and hello to a customizable platform where you
                can effortlessly manage all aspects of your content. With
                Sanity.io, you have the freedom to structure and organize your
                content in a way that makes sense for your business, empowering
                you to create and publish with ease. This seamless integration
                between React and Sanity.io ensures your website remains
                flexible and scalable, allowing you to adapt to changing
                business needs while maintaining a cohesive user experience.
              </p>
            </div>
            <div className="col-4 col-12-narrow">
              <p>
                At the heart of our service offering lies our commitment to
                delivering modern, responsive websites that drive results. Our
                team of skilled developers and designers work closely with you
                to bring your vision to life, creating a site that not only
                reflects your brand identity but also resonates with your target
                audience. From sleek, minimalist designs to bold, eye-catching
                visuals, we ensure your website stands out in today's
                competitive digital landscape. With our dedication to excellence
                and passion for innovation, we deliver a modern website that not
                only meets but exceeds your expectations, driving tangible value
                for your business.
              </p>

              <footer>
                <a href="#fourth" className="button scrolly">
                  Contact Us
                </a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Third;
