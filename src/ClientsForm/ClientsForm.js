import axios from 'axios';
import React, { useState } from 'react';
import './ClientsForm.css'
const ClientsForm = () => {
  const [inputs,setInputs]=useState({
    fname: '',
    lname: '',
    email: '',
    number: '',
    message: ''
  });
   const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
      setInputs((values)=>({...values,[name]:value }))
   }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost/art-gallery/backend/clientsApi.php',inputs);
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex">
        <label>
          <input required="" placeholder="" name='fname' value={inputs.fname} type="text" className="input" onChange={handleChange}/>
          <span>first name</span>
        </label>

        <label>
          <input required="" placeholder="" type="text" name='lname' value={inputs.lname} className="input" onChange={handleChange}/>
          <span>last name</span>
        </label>
      </div>

      <label>
        <input required="" placeholder="" type="email" name='email' value={inputs.email} className="input" onChange={handleChange}/>
        <span>email</span>
      </label>

      <label>
        <input required="" placeholder="" type="tel" name='number' value={inputs.number} className="input" onChange={handleChange}/>
        <span>contact number</span>
      </label>

      <label>
        <textarea required="" rows="3" placeholder="" name='message' value={inputs.message} className="input01" onChange={handleChange}></textarea>
        <span>message</span>
      </label>

      <button className="fancy" href="#">submit
        <span className="top-key"></span>
        <span className="text"></span>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
      </button>
    </form>
  );
};

export default ClientsForm;