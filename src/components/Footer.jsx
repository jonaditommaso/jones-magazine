import '../styles/footer.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
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
                    <LinkedInIcon fontSize="large" />
                </div>
                <div className="footer__icon">
                    <InstagramIcon fontSize="large" />
                </div>
                <div className="footer__icon">
                    <TwitterIcon fontSize="large" />
                </div>
                <div className="footer__icon">
                    <PinterestIcon fontSize="large" />
                </div>
            </div>
            <hr />
            <p className="footer__terms">
                <i>© 2021 JONES Magazine, ARG. All Rights Reserved. Use of this site constitutes acceptance of our Terms of Service, Privacy Policy and Do Not Sell My Personal Information.</i>
            </p>
        </div>
    );
}

export default Footer;