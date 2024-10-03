import "./Methodology.css";
import "bootstrap/dist/css/bootstrap.css";
import IMAGES from "../../Images/Images";

const Methodology = () => {
  return (
    <section className="methodology_father section" id="benefits">
      <div className="recuadro_father">
        <div className=" estadisticas_box">
          <div className="estadisticas ">
            <p>100%</p>
            <span>удовлетворенность</span>
          </div>
          <div className="estadisticas ">
            <p>+ 30 </p>
            <span>счастливчиков!</span>
          </div>
          <div className="estadisticas ">
            <p>+1</p>
            <span>год опыта</span>
          </div>
        </div>

        <div className="met_box_1 ">
          <div className="recuadro d-flex">
            <img className="img_recuadro" src={IMAGES.img_ind}></img>
            <div className="ps-3">
              <h4>Индивидуальные занятия</h4>
              <p>Мы адаптируем обучение к вашим потребностям и стилю</p>
            </div>
          </div>
          <div className="recuadro d-flex">
            <img className="img_recuadro" src={IMAGES.img_price}></img>
            <div className="ps-3">
              <h4>Доступные цены</h4>
              <p>
                Мы предлагаем конкурентоспособные цены, чтобы каждый мог
                позволить себе учиться
              </p>
            </div>
          </div>
          <div className="recuadro d-flex">
            <img className="img_recuadro" src={IMAGES.img_b}></img>
            <div className="ps-3">
              <h4>Абсолютное удовольствие</h4>
              <p>
                {" "}
                Обучение должно быть не только полезным, но и увлекательным!
              </p>
            </div>
          </div>
        </div>
        <div className="met_box_2 ">
          <div className="recuadro d-flex">
            <img className="img_recuadro" src={IMAGES.img_talk}></img>
            <div className="ps-3">
              <h4>Постоянная практика</h4>
              <p>Практический подход, поощряющий активное участие.</p>
            </div>
          </div>
          <div className="recuadro d-flex">
            <img className="img_recuadro" src={IMAGES.img_platform}></img>
            <div className="ps-3">
              <h4>Цифровая платформа</h4>
              <p>
                Доступ к платформе для выполнения заданий и с небольшой теорией.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
