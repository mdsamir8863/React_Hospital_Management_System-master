import '../styles/services.css'
import Departments from '../components/Departments';

const Services = () => {
  return (
    <>
      <header className="header">
      <div className="overColor">
        <h1>Services</h1>
        <p>Explore our comprehensive range of medical services tailored to meet your healthcare needs.</p>

      </div>
      </header>
      <Departments />
    </>
  )
}

export default Services