import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../main";
// import logo from "../assets/logo3.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("/");
  const [menuBar, setMenuBar] = useState(true);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  function clearCookies() {
    document.cookie.split(";").forEach(function (c) {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
  }

  const handleLogout = async () => {
    clearCookies();
    setIsAuthenticated(false);
  };
  const handleMenuBar = () => {
    setMenuBar(!menuBar);
  };

  return (
    <>
      <nav className="deskNav">
        <div className="logo">
          <Link to="/" className="logo-img">
            Health<span style={{ color: "#ffce00" }}>Hub</span>
          </Link>
        </div>

        <div className="navLinks">
          <div className="links">
            <Link
              onClick={handleMenuBar}
              to="/"
              className={`link ${activeTab === "/" ? "active" : ""}`}
            >
              Home
            </Link>
            <Link
              onClick={handleMenuBar}
              to="/services"
              className={`link ${activeTab === "/services" ? "active" : ""}`}
            >
              Services
            </Link>
            <Link
              onClick={handleMenuBar}
              to="/about"
              className={`link ${activeTab === "/about" ? "active" : ""}`}
            >
              About
            </Link>
            <Link
              onClick={handleMenuBar}
              to="/contact"
              className={`link ${activeTab === "/contact" ? "active" : ""}`}
            >
              Contact
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
      <nav className="mbNav">
        <div className="logo">
          <Link to="/" className="logo-img">
            Health<span style={{ color: "#ffce00" }}>Hub</span>
          </Link>
        </div>
        <button className="menuIcon" onClick={handleMenuBar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        {menuBar && (
          <>
            <div className="navLinks">
              <div className="links">
                <Link
                  onClick={handleMenuBar}
                  to="/"
                  className={`link ${activeTab === "/" ? "active" : ""}`}
                >
                  Home
                </Link>
                <Link
                  onClick={handleMenuBar}
                  to="/services"
                  className={`link ${
                    activeTab === "/services" ? "active" : ""
                  }`}
                >
                  Services
                </Link>
                <Link
                  onClick={handleMenuBar}
                  to="/about"
                  className={`link ${activeTab === "/about" ? "active" : ""}`}
                >
                  About
                </Link>
                <Link
                  onClick={handleMenuBar}
                  to="/contact"
                  className={`link ${activeTab === "/contact" ? "active" : ""}`}
                >
                  Contact
                </Link>
              </div>
              <div className="buttons">
                {isAuthenticated ? (
                  <button onClick={handleLogout} className="logoutBtn btn">
                    Logout
                  </button>
                ) : (
                  <>
                    <Link
                      onClick={handleMenuBar}
                      to="/login"
                      className="loginBtn btn"
                    >
                      Login
                    </Link>
                    <Link
                      onClick={handleMenuBar}
                      to="/register"
                      className="registerBtn btn"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
