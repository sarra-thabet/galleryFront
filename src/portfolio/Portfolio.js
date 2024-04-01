import "./Portfolio.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

import React ,{ useState, useEffect } from "react";
import axios from "axios";
import {Footer} from "../footer/Footer";

import { Header } from "../Header/Header";


function Portfolio() {
  const [artPieces, setArtPieces] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost/art-gallery/backend/artpieceApi.php/api")
      .then((response) => {
        setArtPieces(response.data);
      })
      .catch((error) => {
        console.error("Error fetching art pieces:", error);
      });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of cards to show at a time
    slidesToScroll: 4, // Number of cards to scroll when navigating
  };
  return (
    <>
       <Header></Header>
      <div className="container-portfolio">
      <div className="about-me-title font">
        <FontAwesomeIcon icon={faPalette} style={{ color: "#B197FC" }} />
        <h1>My Commissions</h1>
      </div>
        <div className="artpiece">
            {artPieces.map((artPiece) => (
              <div key={artPiece.id}>
                <div className="card">
                <img src={artPiece.image}></img>
                <div className="card__content">
                <p className="card__title">{artPiece.title}</p>
                <p className="card__description">{artPiece.description}</p>
                </div>
              </div>
              </div>
            ))}
          </div>
       
      </div>
      <Footer />
    </>
  );
}
export default Portfolio;
