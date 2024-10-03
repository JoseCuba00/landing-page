import "./Header.css";
import IMAGES from "../../Images/Images";

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      style={{
        backgroundColor: "white",
        boxShadow: "0px 0px 8px -5px rgb(1, 1, 1, 0.5)",
      }}
    >
      <div className="container">
        <div>
          <img className="img_logo" src={IMAGES.img_logo}></img>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenido colapsable */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="d-flex navbar-nav mx-auto navHeaderFont">
            <li className="nav-item active">
              <a href="#home" className="navHeaderFont a pe-4 h5">
                Главная
              </a>
            </li>
            <li className="nav-item active navHeaderFont">
              <a href="#me" className="navHeaderFont a h5 pe-4">
                О нас
              </a>
            </li>
            <li className="nav-item active navHeaderFont">
              <a href="#benefits" className="navHeaderFont a h5 pe-4">
                Наши преимущества
              </a>
            </li>
            <li className="nav-item active navHeaderFont">
              <a href="#pricing" className="navHeaderFont a h5 pe-4">
                Стоимость
              </a>
            </li>
            <li className="nav-item active navHeaderFont">
              <a href="#reviews" className="navHeaderFont a h5 pe-4">
                Отзывы
              </a>
            </li>
            <li className="nav-item active navHeaderFont">
              <a href="#faq" className="navHeaderFont a h5 pe-4">
                Вопросы
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <div className="inscription_bottom">
              <a
                href="#inscription"
                className="navHeaderFont  h5 "
                style={{
                  textWrap: "nowrap",
                  marginBottom: "0px",
                  color: "white",
                }}
              >
                Падать заявку
              </a>
              {/* Añadido me-3 */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
