import pic1 from "../images/pic01.jpg";
import { client } from "../client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Second = () => {
  const [projectData, setProjecteData] = useState(null);

  console.log("projectData=========>", projectData);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "projects"] {
		  title,
		  publishedAt,
		  slug,
		  "name": author->name,
		  mainImage{
			asset->{
			  _id,
			  url
			}},
		  body,
		  link,
		}`
      )
      .then((data) => setProjecteData(data))
      .catch(console.error);
  }, []);

  return (
    <section id="second" className="main">
      {/* <header>
					<div className="container">
						<h2>Modern website design with CMS solutions.</h2>
						<p>Crafting digital excellence, we specialize in bespoke website development services tailored to elevate your online presence and drive unparalleled user experiences</p>
					</div>
				</header> */}
      <div className="content dark style2">
        <div className="container">
          <div className="row">
            <div className="col-4 col-12-narrow">
              <section>
                <h3>Web Projects Completed:</h3>
                <p>
                  As an experienced web developer, I specialize in creating
                  cutting-edge websites using the MERN (MongoDB, Express.js,
                  React, Node.js) stack. One of my notable projects includes a
                  dynamic real estate platform where users can easily search and
                  explore available rental units. The site, powered by React,
                  ensures a seamless and engaging browsing experience, while the
                  integration of MongoDB, Express.js, and Node.js provides
                  robust functionality.
                </p>
               
                <footer>
                  <Link to="./projects" className="button scrolly">
                    See All Projects
                  </Link>
                </footer>
              </section>
            </div>
            <div className="col-8 col-12-narrow">
              <div className="row">
                {projectData &&
                  projectData.slice(0, 6).map((project, index) => (
                    <div className="col-6">
                      <a
                        href={project.link}
                        className="image fit"
                        key={project.title}
                      >
                        <img src={project.mainImage.asset.url} alt="" />
                        {/* <p>{project.title}</p>
						<p>Author:{project.name}</p> */}
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Second;
