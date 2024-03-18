import React from "react";
import { useSelector } from "react-redux";
import CoverContent from "../../components/CoverContent/idex";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import { RootState } from "../../redux/reducers";
import ImgContact from "./../../assets/images/contact.avif";
import "./styles.scss";
import Backdrop from "../../components/Backdrop";

const Contact: React.FC = () => {
  const { showSummary } = useSelector((state: RootState) => state.payments);

  return (
    <div className="contact-container">
      <Header />

      <CoverContent bgImg={ImgContact}>
        <div className="cover-content">Pregúntanos, estamos para ayudarte</div>
      </CoverContent>

      <section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          nulla impedit iusto quod consectetur, temporibus veniam maxime ipsa
          numquam nostrum mollitia excepturi quam. Consectetur numquam tenetur,
          ullam quibusdam blanditiis vel?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          nulla impedit iusto quod consectetur, temporibus veniam maxime ipsa
          numquam nostrum mollitia excepturi quam. Consectetur numquam tenetur,
          ullam quibusdam blanditiis vel?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          nulla impedit iusto quod consectetur, temporibus veniam maxime ipsa
          numquam nostrum mollitia excepturi quam. Consectetur numquam tenetur,
          ullam quibusdam blanditiis vel?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          nulla impedit iusto quod consectetur, temporibus veniam maxime ipsa
          numquam nostrum mollitia excepturi quam. Consectetur numquam tenetur,
          ullam quibusdam blanditiis vel?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          nulla impedit iusto quod consectetur, temporibus veniam maxime ipsa
          numquam nostrum mollitia excepturi quam. Consectetur numquam tenetur,
          ullam quibusdam blanditiis vel?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          nulla impedit iusto quod consectetur, temporibus veniam maxime ipsa
          numquam nostrum mollitia excepturi quam. Consectetur numquam tenetur,
          ullam quibusdam blanditiis vel?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          nulla impedit iusto quod consectetur, temporibus veniam maxime ipsa
          numquam nostrum mollitia excepturi quam. Consectetur numquam tenetur,
          ullam quibusdam blanditiis vel?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          nulla impedit iusto quod consectetur, temporibus veniam maxime ipsa
          numquam nostrum mollitia excepturi quam. Consectetur numquam tenetur,
          ullam quibusdam blanditiis vel?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          nulla impedit iusto quod consectetur, temporibus veniam maxime ipsa
          numquam nostrum mollitia excepturi quam. Consectetur numquam tenetur,
          ullam quibusdam blanditiis vel?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          nulla impedit iusto quod consectetur, temporibus veniam maxime ipsa
          numquam nostrum mollitia excepturi quam. Consectetur numquam tenetur,
          ullam quibusdam blanditiis vel?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          nulla impedit iusto quod consectetur, temporibus veniam maxime ipsa
          numquam nostrum mollitia excepturi quam. Consectetur numquam tenetur,
          ullam quibusdam blanditiis vel?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          nulla impedit iusto quod consectetur, temporibus veniam maxime ipsa
          numquam nostrum mollitia excepturi quam. Consectetur numquam tenetur,
          ullam quibusdam blanditiis vel?
        </p>
      </section>

      {showSummary && <Backdrop />}

      <Footer />
    </div>
  );
};

export default Contact;
