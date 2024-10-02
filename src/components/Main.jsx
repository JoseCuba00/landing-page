import Hero from "./Hero/Hero";
import Me from "./Me/Me";
import Methodology from "./Methodology/methodology";
import Pricing from "./Pricing/Pricing";
import "./Hero/Hero.css";
import Header from "./Header/Header";
import Reviews from "./Reviews/Reviews";
import Faq from "./Faq/Faq";
import Inscription from "./Inscription/Inscription";
function Main() {
  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
      data-bs-offset="0"
      className=" contenedor scrollspy-example"
      tabindex="0"
    >
      <Header />
      <Hero />
      <Me />
      <Methodology />
      <Pricing />
      <Reviews />
      <Faq />
      <Inscription />
    </div>
  );
}

export default Main;
