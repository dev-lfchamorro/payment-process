import ImgFacebook from "../../../assets/icons/facebook.svg";
import ImgLinkedIn from "../../../assets/icons/linkedin.svg";
import ImgWhatsApp from "../../../assets/icons/whatsapp.svg";
import ImgYoutube from "../../../assets/icons/youtube.svg";
import ImgLogo from "../../../assets/images/logo.png";
import Icon from "../../Icon";
import "./styles.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-redirects">
        <div className="redirection-list">
          <span>Información Legal</span>
          <ul>
            <li>
              <a href="##">Términos y Condiciones</a>
            </li>
            <li>
              <a href="##">Política de Devoluciones</a>
            </li>
            <li>
              <a href="##">Política de Privacidad</a>
            </li>
          </ul>
        </div>

        <div className="redirection-list">
          <span>Contacto</span>
          <ul>
            <li>
              <a href="https://co.linkedin.com/in/lfchamorro">Soporte</a>
            </li>
            <li>
              <a href="tel:+57 3118648813">+57 311 864 8813</a>
            </li>
            <li>
              <a href="malito:ing.lfchamorro@gmail.com">
                ing.lfchamorro@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />

      <div className="footer-legal">
        <div className="footer-legal-copyright">
          © {new Date().getFullYear()} PagoLC.com Todos los derechos reservados
          <p>Versión 1.2.1</p>
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
