import "./AboutMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me-title font">
        <FontAwesomeIcon icon={faPalette} style={{ color: "#B197FC" }} />
        <h1>About Me</h1>
      </div>
      <div className="about-me-content">
        <div className="about-me-content-text">
          Expliquez qui vous etes ,d'ou vous venez,comment vous conctionnez et
          ce qui qui vous inspire.puissez dans votre créativité,comme vous savez
          si bien le faire.La facon dont vous racontez votre histoire en ligne
          peut faire toute la différence. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nostrum a, eius asperiores provident earum porro sed
          soluta, at voluptates, nesciunt nemo? Veniam repudiandae aliquid non,
          doloribus possimus voluptatum voluptas a natus, rem nisi consequatur
          omnis! Iure vitae quis nulla dolor illo eius at, ratione beatae, quo
          excepturi non quaerat eveniet!
        </div>
        <div className="about-me-content-image"></div>
      </div>
    </div>
  );
}

export default AboutMe;
