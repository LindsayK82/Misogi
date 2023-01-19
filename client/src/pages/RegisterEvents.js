import React, { useState } from 'react';
import '../pagestyle/register-events.css';

const RegisterEvents = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { name, email, value } = e.target;
  
      // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
      return name === 'firstName' ? setFirstName(value) : setLastName(value);
    };
  
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
  
      // Alert the user their first and last name, clear the inputs
      alert(`Hello ${firstName} ${lastName} ${email}`);
      setFirstName('');
      setLastName('');
      setEmail('');
    };
  return (
    <div>

<p>
        {/* Hello {firstName} {lastName} we will contact you at {email} */}
      </p>
      <form className="form">
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <br/>
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <br/>
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
        </button>
    </div>
  )
}

export default RegisterEvents;
