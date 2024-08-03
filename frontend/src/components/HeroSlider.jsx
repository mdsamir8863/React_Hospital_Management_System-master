import Slider from 'react-slick';
import '../styles/heroSlider.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const departmentsArray = [
    {
        name: "Pediatrics",
        imageUrl: "https://navkaarhospitals.com/wp-content/uploads/2023/11/Pediatrics-navkaar-hospital-img.jpg",
    },
    {
        name: "Orthopedics",
        imageUrl: "https://rxdx.in/wp-content/uploads/2022/01/banner-orthopedic.jpg",
    },
    {
        name: "Cardiology",
        imageUrl: "https://www.getdoc.com/wp-content/uploads/2016/07/27faff5ddddd.jpg",
    },
    {
        name: "Neurology",
        imageUrl: "https://www.klehospital.org/wp-content/uploads/2023/04/neurology.jpg",
    },
    {
        name: "Oncology",
        imageUrl: "https://vishwarajhospital.com/wp-content/uploads/2023/07/Urological-Onco-BLog.jpg",
    },
    {
        name: "Radiology",
        imageUrl: "https://s3-us-west-2.amazonaws.com/utsw-patientcare-web-production/original_images/radiology-600x338.jpg",
    },
    {
        name: "Physical Therapy",
        imageUrl: "https://media.istockphoto.com/id/1501185765/photo/man-doing-physical-therapy-and-walking-on-bars.webp?b=1&s=170667a&w=0&k=20&c=O_ewXQaubYkHlHb-qOqZAqfVae4S5EZ7ogzj-rOHLKU=",
    },
    {
        name: "Dermatology",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeqVJSyPnUImcW6EMnK-UUbuXcr_NU8ZEa_g&s",
    },
    {
        name: "ENT",
        imageUrl: "https://www.manipalhospitals.com/jayanagar/uploads/specialities/facts_figures_photo/ent-hopital-jayanagar.jpg",
    },
];

const DepartmentSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="department-slider">
            <Slider {...settings}>
                {departmentsArray.map((department, index) => (
                    <div key={index} className="slide">
                        <img src={department.imageUrl} alt={department.name} />
                        <div className="overlay">
                            <h2>{department.name}</h2>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default DepartmentSlider;
