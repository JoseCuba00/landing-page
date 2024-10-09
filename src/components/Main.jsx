import React, { useEffect } from "react";

import Hero from "./Hero/Hero";
import Me from "./Me/Me";
import Methodology from "./Methodology/methodology";
import Pricing from "./Pricing/Pricing";
import Header from "./Header/Header";
import Reviews from "./Reviews/Reviews";
import Faq from "./Faq/Faq";
import Inscription from "./Inscription/Inscription";

function Main() {
  useEffect(() => {
    // Crea una instancia de IntersectionObserver
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // Deja de observar después de animar
          }
        });
      },
      {
        threshold: 0.1, // Ajusta según tus necesidades
      }
    );

    // Selecciona todos los elementos con la clase 'hidden'
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    // Limpieza al desmontar el componente
  }, []);
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
