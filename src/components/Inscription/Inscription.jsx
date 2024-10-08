import "bootstrap/dist/css/bootstrap.css";
import IMAGES from "../../Images/Images";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Inscription = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que la página se recargue
    const response = fetch("http://127.0.0.1:8000/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Establece el encabezado Content-Type
      },
      body: JSON.stringify({ name: input1, telephone: input2 }),
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      } else {
        const alertDiv = document.createElement("div");
        alertDiv.className = "success-popup";
        alertDiv.textContent = "Los datos han sido enviados exitosamente";
        document.body.appendChild(alertDiv);
        setTimeout(() => {
          document.body.removeChild(alertDiv);
        }, 4000);
      }
    });
  };

  return (
    <section className="Inscription_father section" id="inscription">
      <div className="Inscription_container">
        <div className="Inscription_text ">
          <p className="pb-3"> Первый урок абсолютно бесплатный</p>
          <span>
            Мы свяжемся с вами как можно скорее, чтобы ответить на все вопросы и
            назначить пробный урок
          </span>
        </div>
        <div className="input_box">
          <form onSubmit={handleSubmit} className="inscription_form">
            <div className="w-100 name_input">
              <input
                className="input"
                type="text"
                placeholder="Имя"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
              />
            </div>
            <div className="w-100">
              <PhoneInput
                className="telephone_input"
                country={"ru"}
                value={input2}
                onChange={(phone) => setInput2(phone)}
                inputStyle={{
                  border: "transparent",
                  borderRadius: "10px",
                  fontSize: "1.4rem",
                  padding: "9.5% 16%",
                  width: "100%",
                }}
                buttonStyle={{
                  border: "transparent",
                  borderRadius: "10px",
                }}
                dropdownStyle={{
                  width: "auto",
                }}
              />
            </div>

            <button type="submit" className="buttom_input">
              Отрпавить
            </button>
          </form>
        </div>
      </div>
      <div className="information_box">
        <div className="information ">
          <div className="d-flex flex-column ">
            <span className="information_title">+7 (981) 458-48-96</span>
            <p className="pt-2 information_dark">
              Можете связаться со мной по этому телефону
            </p>
          </div>
          <div className="d-flex pt-3">
            <div>
              <a
                href="https://t.me/RivaltaJC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="img_icons" src={IMAGES.img_icon_telegram} />
              </a>
            </div>
            <div>
              <a
                href="https://wa.me/+79814584896"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="img_icons" src={IMAGES.img_icon_whatsapp} />
              </a>
            </div>
            <div>
              <a
                href="https://vk.com/id693466425"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="img_icons" src={IMAGES.img_icon_vk} />
              </a>
            </div>
          </div>
        </div>
        <div className="information ">
          <div className="d-flex flex-column w-75">
            <span className="information_title">
              josecarlosrivalta@gmail.com
            </span>
            <span className="pt-2 information_dark">Задать вопрос</span>
          </div>

          <div className="w-75">
            <h5 className="pt-3 information_adress">
              Улица Горького, 21, 236001, Калининград, Ленинградский район, 1-5
              этаж • 5 floors
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inscription;
