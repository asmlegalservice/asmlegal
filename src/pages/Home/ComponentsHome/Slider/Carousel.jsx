import { useState, useEffect, useRef } from "react";
import "./Carousel.css";

import img1 from "../../../../assets/courtImg1.jpg";
import img2 from "../../../../assets/courtImg2.jpg";
import img3 from "../../../../assets/courtImg3.jpg";
import img4 from "../../../../assets/courtImg4.jpg";
import img5 from "../../../../assets/courtImg5.jpg";

const slides = [
  {
    image: img1,
    text: "Deeper Understanding, Better Solutions",
    disc: "A lawyer is a trained professional who advises and represents clients in legal matters"
  },
  {
    image: img2,
    text: "Legal Support You Can Rely On",
    disc: "Lawyers help individuals and businesses understand and follow the law."
  },
  {
    image: img3,
    text: "Deeper Understanding, Better Solutions",
    disc: "Lawyers help individuals and businesses understand and follow the law."
  },
  {
    image: img4,
    text: "Legal Strength. Proven Results",
    disc: "A good lawyer protects rights and works toward fair outcomes."
  },
  {
    image: img5,
    text: "Your Trusted Legal Partner",
    disc: "We provide expert legal guidance and representation for all your needs."
  }
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const prevIndexRef = useRef(0);

  const changeSlide = (newIndex) => {
    if (newIndex === index || animating) return;
    setAnimating(true);
    prevIndexRef.current = index;
    setIndex(newIndex);
    setTimeout(() => setAnimating(false), 800);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide((index + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [index, animating]);

  const goToPrevious = () => {
    const newIndex = index === 0 ? slides.length - 1 : index - 1;
    changeSlide(newIndex);
  };

  const goToNext = () => {
    changeSlide((index + 1) % slides.length);
  };

  return (
    <div className="carousel-banner">

      {slides.map((slide, i) => {

        let classname = "carousel-slide";
        if (i == index) {
          classname += " active";
        }
        else if (i === prevIndexRef.current) {
          classname += " prev";
        } else {
          classname += " next";
        }
        return (
          <div
            key={i}
            className={classname}
          >
            <div className="slide-bg" style={{ backgroundImage: `url(${slide.image})` }} />
          </div>
        )
      })}

      <div className="carousel-overlay" />

      <div className="text-container">
        <div className="text-wrapper">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`text-slide ${i === index ? 'active' : ''} ${i === prevIndexRef.current && animating ? 'exit' : ''}`}
            >
              <h1 className="banner-text">{slide.text}</h1>
              {/* {slide.disc && <p className="banner-disc">{slide.disc}</p>} */}
              <button className=" btn-r-consultation"> Request Consultation </button>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`indicator ${i === index ? "active" : ""}`}
            onClick={() => changeSlide(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Arrow Navigation */}
      <button className="carousel-arrow carousel-arrow-left" onClick={goToPrevious}>
        ‹
      </button>
      <button className="carousel-arrow carousel-arrow-right" onClick={goToNext}>
        ›
      </button>
    </div>
  );
}