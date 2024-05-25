import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss'
import { Icon } from "./comp_icons/Icon";
import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>Company<span>logo</span></h3>
        <p className="footer-links">
          <a href="#" className="link-1">Home</a>
          <a href="#">Blog</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Faq</a>
          <a href="#">Contact</a>
        </p>
        <p className="footer-company-name">Company Name © 2015</p>
      </div>
      <div className="footer-center">
        <div>
          <Icon icon={faMapMarker} />
          <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
        </div>
        <div>
          <Icon icon={faPhone} />
          <p>+1.555.555.5555</p>
        </div>
        <div>
          <Icon icon={faEnvelope} />
          <p><a href="mailto:support@company.com">support@company.com</a></p>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>
        <div className="footer-icons">
          <a href="#"><Icon icon={faFacebook} /></a>
          <a href="#"><Icon icon={faTwitter} /></a>
          <a href="#"><Icon icon={faLinkedin} /></a>
          <a href="#"><Icon icon={faGithub} /></a>
        </div>
      </div>
    </footer>
  );
};

