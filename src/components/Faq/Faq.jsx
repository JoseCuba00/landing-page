import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Faq = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  const question_answers = [
    {
      question: "¿Qué idiomas ofrecen en su plataforma?",
      answer:
        "Ofrecemos clases de inglés, español, francés, alemán, italiano y japonés. También estamos trabajando en añadir más idiomas en el futuro.",
    },
    {
      question:
        "Las clases se imparten a través de videollamadas en tiempo real",
      answer:
        "Utilizamos plataformas como Zoom o Google Meet para facilitar la interacción entre estudiantes y profesores.",
    },
    {
      question: "Cuál es la duración de cada clase?",
      answer:
        "Cada clase tiene una duración de 60 minutos, aunque también ofrecemos sesiones más cortas de 30 minutos para estudiantes que prefieren un enfoque más concentrado.",
    },
    {
      question: "¿Qué materiales necesito para las clases?",
      answer:
        "Solo necesitas una computadora o dispositivo móvil con acceso a internet, una cámara y micrófono. Proporcionamos todos los materiales necesarios, incluidos libros digitales y recursos en línea.",
    },
    {
      question: "¿Hay algún costo de matrícula?",
      answer:
        "No cobramos matrícula. Solo pagas por las clases que tomas, y ofrecemos paquetes con descuentos si reservas varias sesiones.",
    },
    {
      question: "¿Ofrecen clases grupales o individuales?",
      answer:
        "Ofrecemos ambas opciones. Puedes elegir entre clases individuales para un enfoque personalizado o clases grupales para practicar con otros estudiantes.",
    },
  ];

  return (
    <section className="faq_father section pt-5 hidden" id="faq">
      <h1>FAQ</h1>
      <div
        className="scrollable-menu d-flex flex-column align-items-stretch"
        id="navbarSupportedContent"
      >
        <div className="d-flex flex-column justify-content-center justify-content-start">
          {question_answers.map((item, index) => (
            <div className="faq-item mb-3" key={index}>
              <div
                className="d-flex align-items-center cursor-pointer"
                onClick={() => handleToggle(index)}
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${index}`}
                aria-expanded={openIndexes.includes(index)}
              >
                <span className="faq-icon">
                  {openIndexes.includes(index) ? "-" : "+"}
                </span>
                <span className="faq-question">{item.question}</span>
              </div>
              <div className="collapse" id={`collapse-${index}`}>
                <span className="btn-toggle-nav d-flex justify-content-start answer">
                  {item.answer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
