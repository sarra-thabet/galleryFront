import axios from 'axios';
import React, { useState } from 'react';
import './ClientsForm.css';
import emailjs from "@emailjs/browser";

const ClientsForm = () => {
  const [inputs,setInputs]=useState({
    fname: '',
    lname: '',
    email: '',
    number: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

   const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
      setInputs((values)=>({...values,[name]:value }))
   }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost/art-gallery/backend/clientsApi.php',inputs);
    sendEmail();
    setInputs({ fname: '',
    lname: '',
    email: '',
    number: '',
    message: ''});
    setShowSuccess(true);
    setTimeout(() => {
      // Hide success message after resetting form
      setShowSuccess(false);
    }, 3000);
  }
  const sendEmail = () => {
    var templateParams = {
      fname: inputs.fname,
      lname: inputs.lname,
      email: inputs.email,
      phone: inputs.number,
      message: inputs.message
    };
   
    emailjs.send('service_5b2ayob', 'template_n34x5of', templateParams, 'U2h-2_CGnKAHC_cwe')
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
          console.log('FAILED...', error);
        });
  
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
     {/* Show success message if showSuccess is true */}
     {showSuccess && (
        <span name="success" className='success'>Form is submitted successfully</span>
      )}
    </form>
  );
};

export default ClientsForm;