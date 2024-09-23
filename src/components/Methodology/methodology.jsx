import "./methodology.css";
import "bootstrap/dist/css/bootstrap.css";

const Methodology = () => {
  return (
    <section className="methodology_father section">
      <div className="recuadro_father">
        <div className="d-flex justify-content-evenly">
          <div className="estadisticas d-flex flex-column align-items-center">
            <p>100%</p>
            <span>Satisfaccion garantizada</span>
          </div>
          <div className="estadisticas d-flex flex-column align-items-center">
            <p> 50 </p>
            <span>Alumnos Felices</span>
          </div>
          <div className="estadisticas d-flex flex-column align-items-center">
            <p>+1 Año</p>
            <span>Experiencia Comprobada</span>
          </div>
        </div>

        <div className="d-flex justify-content-around pt-5">
          <div className="recuadro">
            <h2 className="h2">Clases personalizadas</h2>
            <p>Hola</p>
          </div>
          <div className="recuadro">
            <h2 className="h2">Métodos Divertidos</h2>
            <p>Aprende mientras te diviertes, sin estrés.</p>
          </div>
          <div className="recuadro">
            <h2 className="h2">Métodos Divertidos</h2>
            <p>Aprende mientras te diviertes, sin estrés.</p>
          </div>
        </div>
        <div className="d-flex d-flex justify-content-around ">
          <div className="recuadro">
            <h2 className="h2">Métodos Divertidos</h2>
            <p>Aprende mientras te diviertes, sin estrés.</p>
          </div>
          <div className="recuadro">
            <h2 className="h2">Métodos Divertidos</h2>
            <p>Aprende mientras te diviertes, sin estrés.</p>
          </div>
          <div className="recuadro">
            <h2 className="h2">Métodos Divertidos</h2>
            <p>Aprende mientras te diviertes, sin estrés.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
