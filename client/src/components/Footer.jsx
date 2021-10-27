import '../styles/footer/footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import { Link } from 'react-router-dom';
import FooterIcon from '../utils/FooterIcon';

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
                    <FooterIcon  href="https://www.instagram.com/magazinejones/">
                        <InstagramIcon fontSize="large" />
                    </FooterIcon>
                    <FooterIcon href="https://twitter.com/revistajones">
                        <TwitterIcon fontSize="large" />
                    </FooterIcon>  
                    <FooterIcon href="https://ar.pinterest.com/revistajones/_saved/">
                        <PinterestIcon fontSize="large" />
                    </FooterIcon>
            </div>
            <hr />
            <p className="footer__terms">
                <i>© 2021 JONES Magazine, ARG. Todos los derechos reservados. El uso de este sitio implica la aceptación de nuestros Términos de servicio, Política de privacidad y no vender mi información personal.</i>
            </p>
        </div>
    );
}

export default Footer;