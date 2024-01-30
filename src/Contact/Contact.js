import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import ClientsForm from "../ClientsForm/ClientsForm";
function Contact() {
  return (
    <div className="contact" >
      <div className="contact-content">
      <div className="contact-title font">
        <FontAwesomeIcon icon={faPalette} style={{ color: "#B197FC" }} />
        <h1 id="contact">Contact</h1>
      </div>
      <ClientsForm/>
      </div>
      <div className="contact-img">
      </div>
    </div>
  );
}

export default Contact;
