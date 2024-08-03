import HeroSlider from '../components/HeroSlider'
const Hero = ({ title }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Welcome to HealthHub Medical Institute, where your health and well-being are our top priorities. Our state-of-the-art facility is staffed by a team of dedicated professionals who are committed to providing you with the highest quality care. We understand that each patient is unique, which is why we tailor our services to meet your individual needs. Whether you're in need of routine care or facing a more complex medical issue, we're here to guide you on your journey to optimal health and wellness.
          </p>
        </div>
        <div className="banner">
        <HeroSlider />
        </div>
      </div>
    </>
  );
};

export default Hero;
