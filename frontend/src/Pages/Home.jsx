import  { useContext } from "react";
import Hero from "../components/Hero";
import HeroSlider from '../components/HeroSlider'
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to HealthHub Medical Institute | Your Trusted Healthcare Provider"
        }
        
      />
    
      <Biography url={"https://img.freepik.com/premium-photo/healthcare-showcase-doctor-displays-stethoscope-medical-icons-hospital-vertical-mobile-wa_896558-37948.jpg?w=360"} />
      <WhyChooseUs/>
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
