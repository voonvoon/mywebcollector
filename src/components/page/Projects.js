import { client } from "../../client";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome  } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Projects = () => {
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

  //Pagination code //
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const pageCount = Math.ceil(projectData && projectData.length / itemsPerPage);

  const displayedProjects =
    projectData && projectData.slice(offset, offset + itemsPerPage);

  //end of Pagination code //
  return (
    <main className="min-h-screen p-2 project-bg">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive text-white">
          My Projects
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12 text-white">
          Welcome to my projects page!
        </h2>
        <Link to="/" className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-full ml-2">
            <FontAwesomeIcon icon={faHome } className="mr-2" />
            Home
          </Link>
        <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-10">
          {displayedProjects &&
            displayedProjects.map((project, index) => (
              <article className="relative rounded-lg shadow-wl  p-16 bg-transparent">
                <div className="relative">
                  <img
                    src={project.mainImage.asset.url}
                    alt={project.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <h3 className="text-gray-800 text-3xl font-bold mb-2 mt-2 text-center hover:text-red-700">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4 text-center">
                  <span className=" text-white ">
                    <strong className="font-bold text-white">
                      Finished on
                    </strong>
                    : {new Date(project.publishedAt).toLocaleDateString()}
                  </span>
                  <span className=" text-white">
                    <strong className="font-bold text-white">CreatedBy</strong>:{" "}
                    {project.name}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed text-white">
                    {project.body.slice(0, 200)}......
                  </p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                  >
                    View Project{" "}
                    <span role="img" aria-label="right pointer">
                      👉
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>

      <div className="pagination-container">
        <ReactPaginate
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          activeClassName={"active"}
          onPageChange={handlePageClick}
          pageCount={pageCount}
          breakLabel="..."
          previousLabel={"Prev.."}
          nextLabel={"Next.."}
        />
      </div>

      <br />
    </main>
  );
};

export default Projects;
