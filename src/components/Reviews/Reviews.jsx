import "bootstrap/dist/css/bootstrap.css";
import IMAGES from "../../Images/Images";
import React, { useRef } from "react";

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
  const reviewsContainerRef = useRef(null);

  const scrollReviews = (direction) => {
    const container = reviewsContainerRef.current;
    console.log(container);
    const scrollAmount = container.clientWidth;

    if (direction === 1) {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <section className="reviews_father hidden" id="reviews">
      <h1 className="title">Что говорят наши ученики</h1>

      <div className="reviews_container" ref={reviewsContainerRef}>
        {reviews.map((item, index) => {
          return (
            <div className="review_box">
              <div className="cont">
                <div className="img_box ">
                  <img
                    className="img_review"
                    src={item.photo}
                    alt="Reviewer Image"
                  ></img>
                  <div className="name_box flex-column">
                    <h5>{item.name}</h5>
                    <div className="d-flex">
                      <img src={IMAGES.img_icon_stars} className="img_stars" />
                      <img src={IMAGES.img_icon_stars} className="img_stars" />
                      <img src={IMAGES.img_icon_stars} className="img_stars" />
                      <img src={IMAGES.img_icon_stars} className="img_stars" />
                      <img src={IMAGES.img_icon_stars} className="img_stars" />
                    </div>
                  </div>
                </div>
                <div className="review_content ps-2">
                  <div className="w-100 ">
                    <img
                      className="img_quotes_1"
                      src={IMAGES.img_quotes_start}
                      alt="Quote Start"
                    ></img>
                  </div>
                  <span className="ps-4 pt-3 review_description">
                    {item.review}
                  </span>
                  <div className="w-100 d-flex flex-row-reverse pt-3">
                    <img
                      className="img_quotes_2"
                      src={IMAGES.img_quotes_end}
                      alt="Quote End"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttons_container">
        <div className="buttons_box">
          <img
            src={IMAGES.img_bt_prev}
            className="img_next"
            onClick={() => scrollReviews(-1)}
          ></img>
          <img
            src={IMAGES.img_bt_next}
            className="img_next"
            onClick={() => scrollReviews(1)}
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
