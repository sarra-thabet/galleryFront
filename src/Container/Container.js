import React from "react";
import "./Container.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Container = () => {
  return (
    <div className="container1">
      <div>
          <nav
            className="navbar navbar-expand-lg transparent"
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
              <div className='btn-admin'>  
              <a className="nav-link" href="/adminlogin">
                <FontAwesomeIcon icon={faUser} style={{ color: "#000000" }} />
                
              </a>
              </div>
            </div>
            </div>
          </nav>
        </div>
      <div className="container2">
        <h1 className="font">Presentez votre marque</h1>
        <p>
          Acceuillez les visiteurs sur votre site a l'aide d'une bréve
          introduction qui vous vous ressemble
        </p>
        <button className="container-btn">S'avoir Plus</button>
      </div>
    </div>
  );
};

export default Container;
