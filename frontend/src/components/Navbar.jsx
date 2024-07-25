import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../main";
// import logo from "../assets/logo3.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('/');

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/" className="logo-img">
          Health<span style={{ color: "#ffce00" }}>Hub</span>
        </Link>
      </div>
      <div className="navLinks">
        <div className="links">
          <Link to="/" className={`link ${activeTab === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/appointment" className={`link ${activeTab === '/appointment' ? 'active' : ''}`}>
            Appointment
          </Link>
          <Link to="/about" className={`link ${activeTab === '/about' ? 'active' : ''}`}>
            About
          </Link>
        </div>
        <div className="buttons">
          {isAuthenticated ? (
            <button onClick={handleLogout} className="logoutBtn btn">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="loginBtn btn">
                Login
              </Link>
              <Link to="/register" className="registerBtn btn">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
