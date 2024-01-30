import React from "react";
import "./SellCreations.css";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";
export const SellCreations = () => {
  const [creations, setCreations] = useState([]);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    axios
      .get("http://localhost/art-gallery/backend/creationsApi.php/api")
      .then((response) => {
        const creationsArray = Array.isArray(response.data)
          ? response.data
          : [response.data];
        setCreations(creationsArray);
      })
      .catch((error) => {
        console.error("Error fetching Creations:", error);
      });
  }, []);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const screenWidth = window.innerWidth;
      // Adjust the number of slidesToShow based on screen width
      if (screenWidth < 500) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    // Call the function on component mount and window resize
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };
  return (
    <div className="sell-creations">
       <div className="contact-title font">
        <FontAwesomeIcon icon={faPalette} style={{ color: "#B197FC" }} />
        <h1 id="contact">Sell Creation</h1>
      </div>
      <div className="sell-creations-content">
      <Slider {...settings}>
        {creations.map((creation) => (
          <div class="sell-creations-card">
            <div key={creation.id}>
              <div class="sell-creations-card-img">
                <img src={creation.image}></img>
              </div>
              <div class="sell-creations-card-title">{creation.name}</div>
              <div class="sell-creations-card-subtitle">
                {creation.description}
                <br></br>
                {creation.size}
              </div>
              <hr class="sell-creations-card-divider"></hr>
              <div class="sell-creations-card-footer">
                <div class="sell-creations-card-price">{creation.price}</div>
                <button class="sell-creations-card-btn" ><Link to={`/checkout/${creation.id}`}>Order</Link>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
                    <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                    <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                    <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};
