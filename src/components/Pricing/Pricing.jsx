import "./Pricing.css";
import "bootstrap/dist/css/bootstrap.css";
import IMAGES from "../../Images/Images";

const Pricing = () => {
  return (
    <section className="pricing_father section" id="pricing">
      <h2 className="title">Выбирайте план по желаемому темпу</h2>
      <div className="pricing_container">
        <div className="price_box">
          <img className="img_price" src={IMAGES.img_plan_basic}></img>
          <h2>Чилл</h2>
          <p className="price">800₽ за урок</p>
          <p>
            Одно занятие в неделю, идеально для тех, кто предпочитает учиться в
            спокойном темпе.
          </p>
        </div>
        <div className="price_box">
          <img className="img_price" src={IMAGES.img_plan_medium}></img>
          <h2>Середнячок</h2>
          <p className="price">600₽ за урок</p>
          <p>Два занятия в неделю, для тех, кто увлечен учебой.</p>
        </div>
        <div className="price_box">
          <img className="img_price" src={IMAGES.img_plan_advance}></img>
          <h2>Турбо</h2>
          <p className="price">500₽ за урок</p>
          <p>
            Три или более занятий в неделю, подходит тем, кто стремится быстро
            освоить испанский язык.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
