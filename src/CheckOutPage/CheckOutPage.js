import React from "react";
import "./CheckOutPage.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PopUp from '../Popup/PopUp';
import axios from "axios";
export const CheckOutPage = () => {
  const [product, setProduct] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const { id } = useParams();
  const handleOrderConfirmation = (e) => {
    e.preventDefault();
    setShowPopup(true);

   
    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };
  useEffect(() => {
    axios
      .get(`http://localhost/art-gallery/backend/creationsApi.php/api?id=${id}`)
      .then((response) => {
        console.log(response.data);

        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Creations:", error);
      });
  }, [id]);

  return (
    <div className="check-out-page">
      <div className="check-out-page-product">
        <div class="check-out-page-card shadow">
        
          <img src={product.image} alt="Product Image"></img>
          <h1>{product.name}</h1>
          <h1> price :{product.price}</h1>
        </div>
      </div>
      <div className="check-out-page-form">
      <h1 className="font">Payment Information</h1>
      <form className="form" >
      <div className="flex">
        <label>
          <input required="" placeholder="" name='fname' type="text" className="input" />
          <span>first name</span>
        </label>

        <label>
          <input required="" placeholder="" type="text" name='lname' className="input" />
          <span>last name</span>
        </label>
      </div>

      <label>
        <input required="" placeholder="" type="email" name='email'className="input" />
        <span>email</span>
      </label>

      <label>
        <input required="" placeholder="" type="tel" name='number' className="input"/>
        <span>contact number</span>
      </label>
      <label>
        <input required="" placeholder="" type="text" name='number' className="input"/>
        <span>Country</span>
      </label>
     

      <button className="fancy" href="#" onClick={handleOrderConfirmation}>Order Now
        <span className="top-key"></span>
        <span className="text"></span>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
      </button>
    </form>
    {showPopup && (
        <PopUp
          message="Order passed successfully! Thank you."
          onClose={() => setShowPopup(false)}
        />
      )}
      </div>
    </div>
  );
};
