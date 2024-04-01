// AdminInterface.js
import React from "react";
import "./AdminInterface.css";
import { useState } from "react";
import {
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { ListArtPiece } from "../ArtPieceList/ListArtPiece";
import { ClientsList } from "../ClientsList/ClientsList";
import { CreationsList } from "../CreationsList/CreationsList";
import { OrdersList } from "../OrdersList/OrdersList";

const AdminInterface = () => {
  const navigate = useNavigate();
  const [openSideBar,setOpenSideBar]=useState(false);
  const toggleSidebar = () => {
    setOpenSideBar(!openSideBar);
  };
  const handleLogOut = () => {
    navigate("/");
  };
  return (
    
    <div className="admin-interface">
      
      <div className="side-nav-bar">
        <nav className="side-nav-bar">
          <ul>
            <h1 className="font">Welcome</h1>
            <li>
              <Link to="AdminInterface/art-pieces" className="no-underline">
                Manage Art Pieces
              </Link>
            </li>
            <li>
              <Link to="AdminInterface/clients" className="no-underline">
                Manage Clients
              </Link>
            </li>{" "}
            <li>
              <Link to="AdminInterface/creations" className="no-underline">
                Manage Creations
              </Link>
            </li>
            <li>
              <Link to="AdminInterface/orders" className="no-underline">
                Manage Orders
              </Link>
            </li>
            <button class="Btn logout" onClick={handleLogOut}>
              <div class="sign">
                <svg viewBox="0 0 512 512">
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                </svg>
              </div>

              <div class="text">Logout</div>
            </button>
          </ul>
        </nav>
      </div>

      {/* Content area */}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminInterface />}>
        <Route path="AdminInterface/art-pieces" element={<ListArtPiece />} />
        <Route path="AdminInterface/clients" element={<ClientsList />} />
        <Route path="AdminInterface/creations" element={<CreationsList />} />
        <Route path="AdminInterface/orders" element={<OrdersList />} />
      </Route>
    </Routes>
  );
};

export { AdminInterface, AdminRoutes };
