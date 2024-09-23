import Hero from "./Hero/Hero";
import Me from "./Me/Me";
import Methodology from "./Methodology/methodology";
import "./Hero/Hero.css";

function Main() {
  return (
    <div className="contenedor">
      <Hero />
      <Me />
      <Methodology />
    </div>
  );
}

export default Main;
