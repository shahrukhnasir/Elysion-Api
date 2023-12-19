import Slider from "react-slick";
import { NextArrow, PreviousArrow } from "./SliderArrow";
import styles from "../CustomSlider/CustomSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
const CustomSlider = ({
  children,
  speed = 500,
  slidesToShow = 3,
  slidesToScroll = 1,
  prevArrow = false,
  nextArrow = false,
  isBreak = true,
  dots = false,
}) => {
  const [activeDot, setActiveDot] = useState(0);
  const settings = {
    dots: dots,
    // dotsClass: `slick-dots ${styles.dots}`,
    infinite: true,
    speed: speed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    prevArrow: prevArrow && <PreviousArrow />,
    nextArrow: nextArrow && <NextArrow />,
    beforeChange: (prev, next) => setActiveDot(next),
    appendDots: (dots) => (
      <ul>
        {dots.map((item, index) => {
          return <li className={styles.li} key={index}>{item.props.children}</li>;
        })}
      </ul>
    ),
    customPaging: (i) => (
      <div
        className={
          i === activeDot ? styles.activeftslick__dots : styles.ftslick__dots
        }
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: slidesToShow,
          slidesToScroll: slidesToScroll,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: isBreak && 3,
          slidesToScroll: slidesToScroll,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: slidesToScroll,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: slidesToScroll,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: slidesToScroll,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: slidesToScroll,
        },
      },
    ],
  };
  return (
    <div className={styles.container}>
      <Slider {...settings} className={styles.slickSlider}>
        {children}
      </Slider>
    </div>
  );
};
export default CustomSlider;
