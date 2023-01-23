import React, { useState, useRef } from 'react';
import '../pagestyle/register-events.css';
import emailjs from '@emailjs/browser'
import { FormControl, Form, Button } from 'react-bootstrap'



const RegisterEvents = () => {

  const form = useRef();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_651nglq', 'template_4p7maha', form.current, 'utZP25tjcR_kMIURO')
      .then((result) => {
        console.log(result.text);
        setEmail("");setUserName("");setMessage("")
      }, (error) => {
        console.log(error.text);
      });

  }


  // const RegisterEvents = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    // const { name, email, value } = e.target;
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value


    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
  // return name === 'firstName' ? setFirstName(value) : setLastName(value);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(`Hello, ${userName} ${lastName}! You will recieve an email about this event.`);
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  {/* <form className="form">
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <br />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <br />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />

      </form>
      <button className="button" type="button" onClick={handleFormSubmit}>
        Submit
      </button> */}

  return (

    <div className='registerevents-container'>
      <div className='registerevents-card'>
        <div className='form'>
          <Form ref={form} onSubmit={sendEmail}>
            <label for="contact-name">Name</label>
            <input type="text" className='form-control' value={userName} onChange={(e) => setUserName(e.target.value)} id="contact-name" placeholder="Your Name" name="user_name" />
            <label for="contact-email">Email</label>
            <input type="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} id="contact-email" placeholder='Your Email' name="user_email" />
            <label for="contact-message">Message</label>
            <textarea name="message" className='form-control' value={message} onChange={(e) => setMessage(e.target.value)} id="contact-message" placeholder='Your Message' />
            <input type="submit" className='btn btn-primary' onClick={handleFormSubmit}/>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default RegisterEvents;

