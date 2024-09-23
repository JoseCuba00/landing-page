import React from "react";
import presentation from "../../assets/presentation.mp4";
import IMAGES from "../../Images/Images";
import "bootstrap/dist/css/bootstrap.css";
import "./hero.css"; // Asegúrate de importar tu archivo CSS

const Hero = () => {
  return (
    <section className="presentation_father section">
      <div className="overlay"></div>
      <video autoPlay loop muted className="videito  ">
        <source src={presentation} type="video/mp4" />
      </video>
      <div className="presentation_content ">
        <h1 className="display-1">¡Bienvenido!</h1>
        <span>
          Sumérgete en el fascinante mundo del español con nuestro curso
          inicial. ¡Prepárate para expandir tus horizontes lingüísticos!
        </span>
      </div>
    </section>
  );
};

export default Hero;
