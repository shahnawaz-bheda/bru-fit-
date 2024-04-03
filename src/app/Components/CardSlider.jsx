"use client";
import React, { useEffect, useState } from "react";
import Swiper from "swiper/bundle";
import "swiper/css";
import "./CardSlider.css";

const CardSlider = ({ data }) => {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    const slider = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {data.map((card, index) => (
          <div key={index} className="swiper-slide">
            <div className="w-full bg-white ">
              {/* <Image
                src={card.imageUrl}
                alt={"MediPract " + card.title}
                width={0}
                height={0}
                sizes="100vw"
                className="object-cover"
                style={{ width: "100%", height: "auto" }} // optional
              /> */}
              <img src={card.imageUrl}
                className="object-cover" />
            </div>
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
      <div className="custom-swiper-nav">
        <div className="swiper-button-prev custom-button-prev">
          <button className="btn btn-circle text-black bg-gradient-to-r from-gray-100 to-gray-300 rounded-full">
            <span style={{ transform: "scale(1.5)" }}>←</span>
          </button>
        </div>
        <div className="swiper-button-next custom-button-next">
          <button className="btn btn-circle text-black bg-gradient-to-r from-gray-100 to-gray-300 rounded-full">
            <span style={{ transform: "scale(1.5)" }}>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
