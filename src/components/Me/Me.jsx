import "bootstrap/dist/css/bootstrap.css";
import IMAGES from "../../Images/Images";
import React, { useState } from "react";

const Me = () => {
  const [isAnimated, setIsAnimated] = useState(true);

  function VideoModal({ videoUrl, onClose }) {
    console.log(videoUrl);
    return (
      <div className="modal_1" onClick={onClose}>
        <span className="close" onClick={onClose}>
          x
        </span>
        <iframe
          className="modal-content"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video Modal"
          onClick={(e) => e.stopPropagation()} // Evita cerrar el modal al hacer clic dentro del iframe
        ></iframe>
      </div>
    );
  }

  const teachers = {
    teacher1: {
      name: "Jose Carlos",
      image: IMAGES.img_rev_jose, // Reemplaza con la URL de tu imagen
      video: "https://www.youtube.com/embed/K8kj9-fkBdc?si=jf272his177uPLnq",
      description:
        "Dwayne Douglas Johnson (born May 2, 1972) also known by his ring name the Rock, is an American actor, professional wrestler, andbusinessman. He is signed to WWE, where he performs on apart-time basis. Widely regarded as one of the greates professional wrestlers of all time,",
    },
    teacher2: {
      name: "Rafael",
      image: IMAGES.img_rev_Rafael, // Reemplaza con la URL de tu imagen
      video: "https://www.youtube.com/embed/AIo182v5KVY?si=46cQhTbs6mk7Wk1Y", // Reemplaza VIDEO_ID_2 con el ID real del video
      description:
        "Sofía Margarita Vergara Vergara (Spanish: [soˈfi.a βeɾˈɣaɾa]; born July 10, 1972)[1][2] is a Colombian and American actress and television personality. She is known for her role as Gloria Delgado-Pritchett in the ABC sitcom Modern  Emmy Award nominatiAward nominations",
    },
    teacher3: {
      name: "Pedro",
      image: IMAGES.img_rev_Pedro, // Reemplaza con la URL de tu imagen
      video: "https://www.youtube.com/embed/AIo182v5KVY?si=46cQhTbs6mk7Wk1Y", // Reemplaza VIDEO_ID_2 con el ID real del video
      description:
        "Sofía Margarita Vergara Vergara (Spanish: [soˈfi.a βeɾˈɣaɾa]; born July 10, 1972)[1][2] is a Colombian and American actress and television personality. She is known for her role as Gloria Delgado-Pritchett in the ABC sitcom Modern  Emmy Award nominatiAward nominations",
    },
    teacher4: {
      name: "Alain",
      image: IMAGES.img_rev_Alain, // Reemplaza con la URL de tu imagen
      video: "https://www.youtube.com/embed/AIo182v5KVY?si=46cQhTbs6mk7Wk1Y", // Reemplaza VIDEO_ID_2 con el ID real del video
      description:
        "Sofía Margarita Vergara Vergara (Spanish: [soˈfi.a βeɾˈɣaɾa]; born July 10, 1972)[1][2] is a Colombian and American actress and television personality. She is known for her role as Gloria Delgado-Pritchett in the ABC sitcom Modern  Emmy Award nominatiAward nominations",
    },
  };
  const [selectedProfessor, setSelectedProfessor] = useState(teachers.teacher1);

  // Estado para controlar el modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para manejar la selección de un profesor
  const handleProfessorSelect = (profKey) => {
    setSelectedProfessor(teachers[profKey]);
    setIsAnimated(false); // Desactiva la animación después de seleccionar un profesor
  };

  // Función para abrir el modal
  const openModal = () => {
    console.log("se abre el modal");
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="me_father section hidden" id="me">
      <div className="me_container">
        <h3 class="display-3 d-flex justify-content-center">
          <p className="title">С нами не скучно!</p>
        </h3>
        <div className="description">
          <div className="video_box">
            <div className="main-content" onClick={openModal}>
              <div className="play_button">&#9658;</div>
              <div class="overlay_img"></div>
              <img
                className="img_me "
                src={selectedProfessor.image}
                alt={selectedProfessor.name}
              />
            </div>
            <div className="teacher_description">
              <span>{selectedProfessor.description}</span>
            </div>

            {isModalOpen && (
              <VideoModal
                videoUrl={selectedProfessor.video}
                onClose={closeModal}
              />
            )}
          </div>

          <div className="teachers_list">
            {Object.values(teachers).map((teacher, index) => (
              <img
                key={index} // Es recomendable usar un ID único si está disponible
                src={teacher.image}
                alt={teacher.name} // Buena práctica para accesibilidad
                onClick={() => handleProfessorSelect(`teacher${index + 1}`)}
                className={`professor-btn ${
                  isAnimated ? "hidden" : "hidden show"
                } ${selectedProfessor.name === teacher.name ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Me;
