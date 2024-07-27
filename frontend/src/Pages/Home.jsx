import  { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to HealthHub Medical Institute | Your Trusted Healthcare Provider"
        }
        
      />
      <Biography imageUrl={"https://img.freepik.com/free-vector/online-doctor-concept_23-2148512070.jpg?t=st=1721992139~exp=1721995739~hmac=faca7a361304c2b9ce003c408829ca5786fbf6d3e0fdccb6c330ea0b7526299f&w=740"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
