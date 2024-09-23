import "./me.css";
import "bootstrap/dist/css/bootstrap.css";

const Me = () => {
  return (
    <section className="me_father section">
      <div className="me_container">
        <h3 class="pt-3 ps-4 pb-3 display-3">
          <p>¿Quién Soy?</p>
        </h3>
        <div className="ps-3">
          <span>
            Soy un profesor nativo de español y tengo mas de un año de
            experiencia enseñando a extranjeros( rusoparlantes). Con un enfoque
            personalizado, adapto mis clases a tus necesidades y ritmo. No más
            métodos aburridos, aquí aprenderás mientras te diviertes.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Me;
