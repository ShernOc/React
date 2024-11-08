import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
// Looking for faMobile/Phone 

{/* <FontAwesomeIcon icon={faEnvelope} /> */ }

function Footer(){
    const PresentYear = new Date().getFullYear();
    const text = `Copyright © ${PresentYear} Sherlyne Ochieng, All rights reserved `

    return (
        <>
        <div id="contacts" >
            <ul >
                <li><FontAwesomeIcon icon={faFacebook} /> +254-715869553</li>
                <li><a href="mailto:sherlynea8622@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> sherlynea8622@gmail.com</a>
                        </li>
                <li><a href="#" target="_blank"><FontAwesomeIcon icon={faLinkedin} /> Linkedin</a>
                    </li>
                <li><a href="https://github.com/ShernOc" target="_blank"><FontAwesomeIcon icon={faGithub} /> GitHub</a>
                    </li>
            </ul>
        </div>

        {text} 
        </>
    )
    }
    
    export default Footer;
    
