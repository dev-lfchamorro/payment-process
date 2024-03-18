import React from "react";
import { useSelector } from "react-redux";
import Backdrop from "../../components/Backdrop";
import CoverContent from "../../components/CoverContent/idex";
import ListItemText from "../../components/ListItemText";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import { RootState } from "../../redux/reducers";
import ImgContact from "./../../assets/images/contact.avif";
import ImgMe from "./../../assets/images/me.jpeg";
import "./styles.scss";

const Contact: React.FC = () => {
  const { showSummary } = useSelector((state: RootState) => state.payments);

  return (
    <div className="contact-container">
      <Header />

      <CoverContent bgImg={ImgContact}>
        <div className="cover-content">Pregúntanos, estamos para ayudarte</div>
      </CoverContent>

      <section className="section-contact">
        <img className="me-img" src={ImgMe} alt="me" />

        <ListItemText
          className="contact-card"
          itemList={[
            { title: "Teléfono", value: "+57 311 864 8813" },
            { title: "Email", value: "ing.lfchamorro@gmail.com" },
            { title: "Localización", value: "🇨🇴 Ibagué - Tolima" },
            { title: "Rol", value: "Full Stack Developer" },
          ]}
          title="Info Contacto"
        />
      </section>

      {showSummary && <Backdrop />}

      <Footer />
    </div>
  );
};

export default Contact;
