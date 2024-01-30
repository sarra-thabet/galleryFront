import React from 'react';
import './CreationsList.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import "../ArtPieceList/ListArtPiece.css";
import "../ArtPieceList/pagination.css";
import CreateCreation from './CreateCreation';
import Pagination from "react-js-pagination";


export function CreationsList() {
    const [creations, setCreations] = useState([]);
    const [showCreationModal, setShowCreationModal] = useState(false);
    const [showEditCreationModal, setShowEditCreationModal] = useState(false);
    const [selectedCreation, setSelectedCreation] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);
  
    const openCreationModal = () => {
      setShowCreationModal(true);
    };
  
    const closeCreationModal = () => {
      setShowCreationModal(false);
    };
    const openEditCreationModal = (creation) => {
      setSelectedCreation(creation);
      setShowEditCreationModal(true);
    };
  
    const closeEditCreationModal = () => {
      setSelectedCreation(null);
      setShowEditCreationModal(false);
    };
    useEffect(() => {
      axios
        .get("http://localhost/art-gallery/backend/creationsApi.php/api")
        .then((response) => {
            console.log(response.data);
            const creationsArray = Array.isArray(response.data) ? response.data : [response.data];
            console.log(response.data);
            setCreations(creationsArray);
        })
        .catch((error) => {
          console.error("Error fetching Creations:", error);
        });
    }, []);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCreations = creations.slice(indexOfFirstItem, indexOfLastItem);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
    
    const handleDeleteCreation = (id) => {
      if (window.confirm("Are you sure you want to delete this Creation?")) {
        axios
          .delete("http://localhost/art-gallery/backend/creationsApi.php/api", {
            data: { id: id },
          })
          .then((response) => {
            // Handle successful deletion
            console.log(response.data);
            // Reload the art pieces after deletion
            axios
              .get("http://localhost/art-gallery/backend/creationsApi.php/api")
              .then((response) => {
                setCreations(response.data);
              })
              .catch((error) => {
                console.error("Error fetching Creations:", error);
              });
          })
          .catch((error) => {
            // Handle error during deletion
            console.error("Error deleting Creation:", error);
          });
      }
    };
  
    return (
      <>
        <div className="container ml-3">
          <h2>Creations List</h2>
          <button class="Btn" onClick={openCreationModal}>
            <div class="sign">+</div>
            <div class="text">Add </div>
          </button>
  
          <table className="table table-hover ">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Material</th>
                <th>Size</th>
                <th>Description</th>
                <th>Price</th>
                <th>Image</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {currentCreations.map((creation) => (
                <tr key={creation.id}>
                  <td>{creation.id}</td>
                  <td>{creation?.name}</td>
                  <td>{creation?.material}</td>
                  <td>{creation?.size}</td>
                  <td>{creation?.description}</td>
                  <td>{creation?.price}</td>
                  <td>
                    <img
                      src={creation?.image}
                      alt={`Creation ${creation.id}`}
                      style={{ maxWidth: "200px", maxHeight: "150px" }}
                    />
                  </td>
                  <td style={{ width: "70px" }}>
                    <button
                      class="delete-button"
                      onClick={() => handleDeleteCreation(creation.id)}
                    >
                      <svg class="delete-svgIcon" viewBox="0 0 448 512">
                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                      </svg>
                    </button>
                  </td>
                  <td style={{ width: "70px" }}>
                    <button class="edit-button"  onClick={() => openEditCreationModal(creation)} >
                      <svg class="edit-svgIcon" viewBox="0 0 512 512">
                        <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
  
          <div className="pagination">
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={itemsPerPage}
              totalItemsCount={creations.length}
              pageRangeDisplayed={4}
              onChange={handlePageChange}
              itemClass="page-item"
              linkClass="page-link"
            />
          </div>
   
          <CreateCreation
            showCreationModal={showCreationModal}
            closeCreationModal={closeCreationModal}
         
          />
        </div>
        {//<EditCreation  showEditCreationModal={showEditCreationModal}
           // closeEditCreationModal={closeEditCreationModal}
            //</>creationToEdit={selectedCreation}></EditCreation>// 
        }
      </>
    );
  }
  
