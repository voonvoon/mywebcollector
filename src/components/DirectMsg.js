
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';

const DirectMsg = () => {
  return (
    <div className="social-icons">

      <a
        href="https://wa.link/e9g91q"
        target="_blank"
        className="contact-icon-1"
      >
      <div className="flex flex-col justify-center items-center ">
        <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: 40, color: "#25D366" }} />
        <span className="talk-to-us">Talk to me!</span>
        </div>
      </a>
    </div>
  );
};

export default DirectMsg;