import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faClock } from '@fortawesome/free-regular-svg-icons';
// import {} from '@fortawesome/free-solid-svg-icons';
import {faTwitter, faFacebook, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <section id="footer">
        <ul className="icons">
            <li><a href="#" className="icon brands "><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="#" className="icon brands "><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a href="#" className="icon brands "><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="#" className="icon brands "><FontAwesomeIcon icon={faGithub} /></a></li>
        </ul>
        <div className="copyright">
            <ul className="menu">
                <li>&copy; MyWebCollector. All rights reserved.</li><li>Design: <a>MyWebCollector</a></li>
            </ul>
        </div>
    </section>
    )
}

export default Footer;