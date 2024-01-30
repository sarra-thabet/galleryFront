import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import './Header.css'; 
export const Header = () => {
  return (
    <div className="header-component">
      <div>
        <nav
          className="navbar1 navbar navbar-expand-lg transparent"
          data-bs-theme="light"
        >
          <div className="container-fluid">
            <a className="navbar-brand font" href="#">
              Selsebil Chebbi Arts
            </a>

            <div className="collapse navbar-collapse" id="navbarColor03">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Portfolio">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="btn-admin">
                <a className="nav-link" href="/adminlogin">
                  <FontAwesomeIcon icon={faUser} style={{ color: "#000000" }} />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
