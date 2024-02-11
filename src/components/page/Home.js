import Header from "../header";
import First from "../First";
import Second from "../Second";
import Third from "../Third";
import Forth from "../Forth";
import Footer from "../Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: animated smooth scroll
    });
  };
  return (
    <>
      <Header />
      <First />
      <Second />
      <Third />
      <Forth />
      <Footer />
      <button
        className="fixed bottom-16 right-32 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center"
        onClick={scrollToTop}
      >
        <span className="mr-2">Scroll To Top</span>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </>
  );
};

export default Home;
