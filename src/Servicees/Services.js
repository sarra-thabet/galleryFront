import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
function Services() {
  return (
    <div className="services">
      <div className="services-title font">
        <FontAwesomeIcon icon={faPalette} style={{ color: "#B197FC" }} />
        <h1>Services</h1>
      </div>
      <div className="services-all">
        <div className="services-creation">
          <div class="card">
            <h1 className="font">Sell creations</h1>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              quos eos quod sequi unde, earum tenetur dolorem pariatur minus?
              Dolor ducimus nihil obcaecati explicabo ab? Laudantium error
              tempore, repellendus adipisci vero 
            </p>
            <button className="container-btn" >Sell a Creation</button>
          </div>
        </div>
        <div className="services-commissions">
        <div class="card">
            <h1 className="font">Sell Commissions</h1>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              quos eos quod sequi unde, earum tenetur dolorem pariatur minus?
              Dolor ducimus nihil obcaecati explicabo ab? Laudantium error
              tempore, repellendus adipisci vero voluptatibus.
            </p>
            <button className="container-btn" ><a href="/portfolio">View Commissions</a> </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
