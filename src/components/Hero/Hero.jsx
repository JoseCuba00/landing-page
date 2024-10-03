import React from "react";
import presentation from "../../assets/presentation.mp4";
import IMAGES from "../../Images/Images";
import "bootstrap/dist/css/bootstrap.css";
import "./Hero.css"; // Asegúrate de importar tu archivo CSS

const Hero = () => {
  return (
    <section className="presentation_father section pt-5" id="home">
      <div className="presentation_content">
        <h1>
          Учите&nbsp;<h1 className="highlighted">español</h1>не выходя из дома
        </h1>
        <span className="pt-5">
          У нас уже через несколько занятий ваши друзья подумают, что вы
          испаноязычный с рождения!
        </span>
      </div>
      <div className="img_container">
        <img
          className="img_hero"
          src={IMAGES.image_hero}
          alt="Learning Spanish"
        />
      </div>
    </section>
  );
};

export default Hero;
