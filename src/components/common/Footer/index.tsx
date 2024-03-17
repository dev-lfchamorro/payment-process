import ImgFacebook from "../../../assets/icons/facebook.svg";
import ImgLinkedIn from "../../../assets/icons/linkedin.svg";
import ImgWhatsApp from "../../../assets/icons/whatsapp.svg";
import ImgYoutube from "../../../assets/icons/youtube.svg";
import ImgLogo from "../../../assets/images/logo.png";
import { footerContent } from "../../../constants";
import Icon from "../../Icon";
import RedirectionList from "../../RedirectionList";
import "./styles.scss";

const Footer = () => {
  const legalInfo = footerContent.LegalInformation || {};
  const contactInfo = footerContent.Contact || {};

  return (
    <div className="footer-container">
      <div className="footer-redirects">
        <RedirectionList
          title={legalInfo.title}
          redirects={legalInfo.redirects}
        />

        <RedirectionList
          title={contactInfo.title}
          redirects={contactInfo.redirects}
        />
      </div>
      <hr />

      <div className="footer-legal">
        <div className="footer-legal-copyright">
          © {new Date().getFullYear()} PagoLC.com Todos los derechos reservados
          <p>Versión 1.0</p>
        </div>

        <div className="footer-legal-logo">
          <img src={ImgLogo} alt="logo" width={160} />
        </div>

        <div className="footer-legal-social-media">
          <Icon pathIcon={ImgFacebook} size={22} brightness={1} />
          <Icon pathIcon={ImgLinkedIn} size={22} brightness={1} />
          <Icon pathIcon={ImgWhatsApp} size={22} brightness={1} />
          <Icon pathIcon={ImgYoutube} size={22} brightness={1} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
