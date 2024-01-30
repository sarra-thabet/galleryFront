import axios from "axios";
import React, { useState, useEffect } from "react";
import "../ArtPieceList/CreateArtPiece.css";

export default function EditArtPiece({
  showEditModal,
  closeEditModal,
  artPieceToEdit,
}) {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: null,
  });
  const handleChange = (event) => {
    if (event.target.name === "image") {
      const file = event.target.files[0];
      setInputs({ ...inputs, image: file });
    } else {
      setInputs({ ...inputs, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append("title", inputs.title);
    formData.append("description", inputs.description);
    formData.append("image", inputs.image);

    // Make an API call to update the art piece
    axios
      .put(
        `http://localhost/art-gallery/backend/artpieceApi.php/api?id=${artPieceToEdit.id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )
      .then((response) => {
        console.log(response.data);
        // Close the modal or perform any other action
        closeEditModal();
        // Optionally, you can refresh the art pieces list after the update
        // ...
      })
      .catch((error) => {
        console.error("Error updating art piece:", error);
      });
  };

  useEffect(() => {
    // Populate form fields if artPieceToEdit is provided
    if (artPieceToEdit) {
      setInputs({
        title: artPieceToEdit.title,
        description: artPieceToEdit.description,
        image: null, // You might need to handle images differently
      });
    }
  }, [artPieceToEdit]);

  return (
    <>
      <div className={`modal ${showEditModal ? "show" : ""}`}>
        <div className="modal-content">
          <span className="close" onClick={closeEditModal}>
            &times;
          </span>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                placeholder="Art Piece Name"
                type="text"
                id="title"
                name="title"
                value={inputs.title}
                onChange={handleChange}
                requiredclass="input"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <textarea
                placeholder="Art Piece Description"
                id="description"
                name="description"
                value={inputs.description}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label class="custum-file-upload" for="file">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill=""
                    viewBox="0 0 24 24"
                  >
                    <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                    <g
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      id="SVGRepo_tracerCarrier"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill=""
                        d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <div class="text">
                  <span>Click to upload image</span>
                </div>
                <input
                  type="file"
                  id="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-dark">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
