import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = ({img}) => {
  return (
    <>
      <Hero
        title={"Learn More About Us | HealthHub Medical Institute"}
        imageUrl={"https://img.freepik.com/free-vector/online-doctor-concept_23-2148512070.jpg?t=st=1721992139~exp=1721995739~hmac=faca7a361304c2b9ce003c408829ca5786fbf6d3e0fdccb6c330ea0b7526299f&w=740"}
      />
      <Biography
        imageUrl1="https://img.freepik.com/free-vector/online-doctor-concept_23-2148512070.jpg?t=st=1721992139~exp=1721995739~hmac=faca7a361304c2b9ce003c408829ca5786fbf6d3e0fdccb6c330ea0b7526299f&w=740"
      />
    </>
  );
};

export default AboutUs;
