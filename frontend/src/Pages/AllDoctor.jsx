import "../styles/allDoctors.css"
import wIcon from '../assets/WhatsApp_icon.png'
import { Link } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AllDoctor = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const {
          data,
        } = await axios.get("http://localhost:4000/api/v1/user/doctors", {
          withCredentials: true,
        });
        setDoctors(data.doctors); // Fixed by uncommenting this line to update the state with fetched doctors
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchDoctors();
  }, []);
  return (
    <>
      <header className="header">
        <div className="overColor">
          <h1>Our Doctors</h1>
          <p>Meet our team of experienced doctors and medical professionals dedicated to providing the best care for our patients.</p>
        </div>
      </header>

      <div className="container">
      <div className="doctor-cards">
      {doctors && doctors.length > 0 ? (
          doctors.map((doctor) => (
            <div className="doctor-card" key={doctor._id}>
          <img style={{borderRadius:"50%", width:"15rem", height:"15rem"}} src={doctor.docAvatar && doctor.docAvatar.url} alt="Doctor Avatar" />
          <h5 style={{padding:"10px 0"}}>{`${doctor.firstName} ${doctor.lastName}`}</h5>
          <p>{doctor.doctorDepartment}</p>
          <div className="actions">
            {/* <Link to='/message'>Message</Link> */}
            <a href={`mailto:${doctor.email}`} className="social-link w-inline-block fixed bottom-10 right-1" style={{ width: '4.8rem', height:"4rem", backgroundColor:"black" }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width:"100%", height:'100%'}}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
           

            </a>
            <a href={`https://wa.me/${doctor.phone}`} target="_blank" rel="noopener noreferrer" className="social-link w-inline-block fixed bottom-10 right-1" style={{ width: '4.8rem',height:"4rem" , backgroundColor:"black" }}>
              <img style={{width:"100%", height:"100%"}} src={wIcon} alt="" />
            </a>
            <a href={`tel:${doctor.phone}`} className="social-link w-inline-block fixed bottom-10 right-1" style={{ width: '4.8rem',height:"4rem" , backgroundColor:"black" }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width:"100%", height:'100%'}}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>

            </a>
          </div>
        </div>
          ))
        ) : (
          <h1>No Registered Doctors Found!</h1>
        )}
      </div>
    </div>
      
    </>
  )
}

export default AllDoctor