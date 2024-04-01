
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import Services from "../Servicees/Services";
import Container from "../Container/Container";
import {Footer} from "../footer/Footer";
import { SellCreations } from "../SellCreations/SellCreations";



const Home = () => {
  
  return (
    <div>
        
        <Container />
        <AboutMe />
        <Services />
        <SellCreations/>
        <Contact  />
        <Footer />
      
    </div>
  );
};
export default Home;
