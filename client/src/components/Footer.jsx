import '../styles/footer/footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <hr />
            <div className="footer__logo">
                <Link to='/'>
                    <img src="/assets/img/logo-jones.png" alt="jones" />
                </Link>

            </div>
            <div className="footer__social">
                <div className="footer__icon">
                    <a 
                        href="https://www.instagram.com/magazinejones/"
                        target='_blank' 
                        rel="noopener noreferrer" 
                        style={{display: 'inline-flex', cursor: 'pointer'}}
                    >
                        <InstagramIcon fontSize="large" />
                    </a>
                </div>
                <div className="footer__icon">
                    <a 
                    href="https://twitter.com/revistajones" 
                    target='_blank' 
                    rel="noopener noreferrer" 
                    style={{display: 'inline-flex', cursor: 'pointer'}}
                    >
                        <TwitterIcon fontSize="large" />
                    </a>  
                </div>
                <div className="footer__icon">
                    <a 
                    href="https://ar.pinterest.com/revistajones/_saved/"  
                    target='_blank' rel="noopener noreferrer" 
                    style={{display: 'inline-flex', cursor: 'pointer'}}
                    >
                        <PinterestIcon fontSize="large" />
                    </a>
                </div>
            </div>
            <hr />
            <p className="footer__terms">
                <i>© 2021 JONES Magazine, ARG. Todos los derechos reservados. El uso de este sitio implica la aceptación de nuestros Términos de servicio, Política de privacidad y no vender mi información personal.</i>
            </p>
        </div>
    );
}

export default Footer;