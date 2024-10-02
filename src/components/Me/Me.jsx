import "./me.css";
import "bootstrap/dist/css/bootstrap.css";
import IMAGES from "../../Images/Images";

const Me = () => {
  return (
    <section className="me_father section" id="me">
      <div className="me_container">
        <h3 class=" highlighted   display-3 d-flex justify-content-center">
          <p>Кто я?</p>
        </h3>
        <div className="description">
          <div className="img_me_container">
            <img
              className="img_me"
              src={IMAGES.img_me}
              alt="Learning Spanish"
            />
            <div className="img_shadow"></div>
          </div>
          <div className="ps-5 me_content ">
            <h2>Jose C. Rivalta Martínez</h2>
            <span>
              Я <span className="highlighted_span">носитель</span> испанского
              языка и имею более чем годичный опыт преподавания иностранцам
              (русскоговорящим). Используя индивидуальный подход, я адаптирую
              свои занятия к вашим потребностям и ритму. Больше никаких скучных
              методов, здесь вы будете учиться, развлекаясь.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Me;
