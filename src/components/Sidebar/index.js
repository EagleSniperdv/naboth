import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faCodeCompare, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className='logo' to='/'>
        <FontAwesomeIcon
            icon={faCode}
            color="#4d4d4e"
            style={{ width: 50, height: 50 }}
    />
            <img className="sub-logo" src={LogoSubtitle} alt='EagleSniper'/>

            <FontAwesomeIcon
            icon={faCodeCompare}
            color="#4d4d4e"
            style={{ width: 50, height: 50 }}
    />
        </Link>

        <nav>
            <NavLink exact='true' activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact='true' activeclassname="active" className="about-link " to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>

            
            <NavLink exact='true' activeclassname="active" className="portfolio-link"  to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact='true' activeclassname="active" className="contact-link"  to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>

        </nav>
        <ul>
            <li>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.linkedin.com/in/eaglesniperdv/'
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://github.com/EagleSniperdv'
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://twitter.com/Eaglesniperdv'
                >
                    <FontAwesomeIcon icon={faXTwitter} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://api.whatsapp.com/send/?phone=%2B254115414418&text&type=phone_number&app_absent=0'
                >
                    <FontAwesomeIcon icon={faWhatsapp} color="#4d4d4e" />
                </a>
            </li>


        </ul>
    </div>
)

export default Sidebar