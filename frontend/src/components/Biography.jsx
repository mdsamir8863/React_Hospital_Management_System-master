
const Biography = ({url}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img style={{borderRadius:"20px"}} src={url} alt="our story image" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Our Story</h3>
          <p style={{color:"gray"}}>
            At HealthHub Medical Institute, we are dedicated to providing exceptional healthcare services to our patients. Our team of experienced professionals is committed to delivering personalized care that addresses the unique needs of each individual. We believe in fostering a culture of compassion, innovation, and excellence in everything we do.
          </p>
          <p style={{fontWeight:"bold"}}>Our Vision</p>
          <p style={{color:"gray"}}>
            Our vision is to be the leading healthcare provider in the region, recognized for our commitment to quality, patient satisfaction, and community engagement. We strive to create a healthier tomorrow by providing accessible, affordable, and high-quality healthcare services today.
          </p>
          <p style={{fontWeight:"bold"}}>Our Mission</p>
          <p style={{color:"gray"}}>
            Our mission is to deliver comprehensive healthcare services that meet the evolving needs of our patients and the community. We aim to achieve this by investing in our people, embracing the latest technologies, and fostering partnerships that promote health and wellness.
          </p>
          <p style={{fontWeight:"bold"}}>Our Values</p>
          <p style={{color:"gray"}}>
            At HealthHub Medical Institute, we value compassion, integrity, respect, and excellence. We believe that these values are essential in guiding our actions and decisions, ensuring that we always put the needs of our patients first.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
