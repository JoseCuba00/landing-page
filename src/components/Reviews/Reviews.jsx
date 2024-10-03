import "./Reviews.css";
import "bootstrap/dist/css/bootstrap.css";
import IMAGES from "../../Images/Images";

const Reviews = () => {
  const reviews = [
    {
      name: "Jose Carlos Rivalta",
      review:
        " Es el profesor mas sexy que he visto ashidasjd a apd aklsjfdia fjlksjf alsf oieh asdhfalksd flksf oiahe asdfh lhlhrf asl lh ad asd assad asdas da sasdasd asdasd as d",
      photo: IMAGES.img_rev_jose,
    },
    {
      name: "Diana Viktorovna",
      review:
        " Es el profesor mas sexy que he visto ashidasjd a apd aklsjfdia fjlksjf alsf oieh asdhfalksd flksf oiahe asdfh lhlhrf asl lh ad asd assad asdas da sasdasd asdasd as d",
      photo: IMAGES.img_rev_Diana,
    },
    {
      name: "Pepe",
      review:
        " adfffffffffffffff ffffffffffffffffff ffffffffff ffffffffvcxxx xxxxxxxxxx xccccccccccccxx xxxxxxxxxx xxxxxxxxx xxxxxxxxx xxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxx ",
      photo: IMAGES.img_rev_jose,
    },
    {
      name: "Margarita",
      review:
        " adfffffffffffffffffffffffdddddddddddddddddddvvvvvvvvvvv csssssssssss sxxxxxxxxxxxx ",
      photo: IMAGES.img_rev_jose,
    },
    {
      name: "Paco",
      review:
        " art rfffffff rtrt ddddddddddddd  rtr ddddddvvvrt rvvvvvvvv csssss ",
      photo: IMAGES.img_rev_Diana,
    },
  ];
  return (
    <section className="reviews_father" id="reviews">
      <h1 className="title">Что говорят наши ученики</h1>
      <div id="carouselExampleDark" class="carousel carousel-dark slide h-75">
        <div class="carousel-indicators">
          {reviews.map((item, index) => {
            return (
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={index}
                class={index === 0 && "active"}
                aria-label={`Slide ${index + 1}`}
                aria-current="true"
              ></button>
            );
          })}
        </div>
        <div class="carousel-inner h-100 ">
          {reviews.map((item, index) => {
            return (
              <div
                className={`carousel-item ${index === 0 && "active"} h-100`}
                data-bs-interval={index}
              >
                <div className="review_box">
                  <div className="cont">
                    <div className="img_box d-flex">
                      <img className="img_review " src={item.photo}></img>
                      <div className=" name_box ">
                        <h5>{item.name}</h5>
                      </div>
                    </div>

                    <div className="  review_content ps-2">
                      <div className="w-100 ">
                        <img
                          className="img_quotes_1 "
                          src={IMAGES.img_quotes_start}
                        ></img>
                      </div>
                      <span className="ps-4 pt-3 review_description">
                        {item.review}
                      </span>
                      <div className="w-100 d-flex flex-row-reverse pt-3">
                        <img
                          className="img_quotes_2 "
                          src={IMAGES.img_quotes_end}
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <img className="img_next" src={IMAGES.img_bt_prev}></img>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <img className="img_next" src={IMAGES.img_bt_next}></img>
        </button>
      </div>
    </section>
  );
};

export default Reviews;
