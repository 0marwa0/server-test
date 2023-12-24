import React, { useRef, useEffect, useState } from "react";
// import arrowLfet from "../../assets/icons/icon-long-arrow-left.svg";
// import arrowRight from "../../assets/icons/icon-long-arrow-right.svg";
// import slide1 from "../../assets/slideImage/slide1.png";
// import slide2 from "../../assets/slideImage/slide2.png";
// import slide3 from "../../assets/slideImage/slide3.png";
// import slide4 from "../../assets/slideImage/slide4.png";

import { Splide, SplideSlide } from "@splidejs/react-splide";
function MultiCarousel(props) {
  const splideRef = useRef(null);

  useEffect(() => {
    const splide = splideRef.current.splide;

    const handlePrevClick = () => {
      const currentSlide = splide.index;
      if (currentSlide > 0) {
        splide.go(currentSlide - 1);
      }
    };

    const handleNextClick = () => {
      const currentSlide = splide.index;
      if (currentSlide < splide.length - 1) {
        splide.go(currentSlide + 1);
      }
    };

    document.getElementById("prev").addEventListener("click", handlePrevClick);
    document.getElementById("next").addEventListener("click", handleNextClick);

    return () => {
      document
        .getElementById("prev")
        .removeEventListener("click", handlePrevClick);
      document
        .getElementById("next")
        .removeEventListener("click", handleNextClick);
    };
  }, []);

  return (
    <div>
      <div className="container-layout">
        <div className="slide-button-container ">
          <button id="prev" className="slide-button ">
            {/* <img src={arrowLfet} /> */}
          </button>
          <button id="next" className="slide-button ">
            {/* <img src={arrowRight} /> */}
          </button>
        </div>
      </div>

      <Splide
        ref={splideRef}
        options={{
          rewind: true,
          width: "100%",
          perPage: 4.5,
          // gap: "3rem",
          pagination: false,
          focus: 0,
          perMove: 1,
          // mediaQuery: "min",

          breakpoints: {
            1000: {
              perPage: 4,
            },
            767: {
              perPage: 2,
            },
            640: {
              perPage: 1,
            },
          },
          focus: "center",
          gap: "0.2rem",
        }}
      >
        <SplideSlide>
          <img
            src="https://fakeimg.pl/300/"
            alt="Yacht image"
            className={` ${props.scrollDirection} card-move card1-move card-move  slide-item`}
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://fakeimg.pl/300/"
            alt="Yacht image"
            className={` ${props.scrollDirection} card-move card2-move card-move  slide-item`}
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://fakeimg.pl/300/"
            alt="Yacht image"
            className={` ${props.scrollDirection} card-move card3-move card-move  slide-item`}
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://fakeimg.pl/300/"
            alt="Yacht image"
            className={` ${props.scrollDirection} card-move card4-move card-move  slide-item`}
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://fakeimg.pl/300/"
            alt="Yacht image"
            className={` ${props.scrollDirection} card-move card5-move card-move  slide-item`}
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://fakeimg.pl/300/"
            alt="Yacht image"
            className={` ${props.scrollDirection} card-move card5-move card-move  slide-item`}
          />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default MultiCarousel;
