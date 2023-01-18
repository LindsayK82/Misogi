import React, { useState } from 'react';
import { Form, Alert, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';


import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';

const SignupForm = () => {
  const [userSignupData, setUserSignupData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [addUser, { error }] = useMutation(ADD_USER);

  if (error) {
    console.error(error);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserSignupData({ ...userSignupData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: { ...userSignupData },
      });

      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserSignupData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
      <Alert
        dismissible
        onClose={() => setShowAlert(false)}
        show={showAlert}
        variant="danger"
      >
        Something went wrong with your signup!
      </Alert>

      <Form.Group style={{ marginBottom: '2%' }}>
        <Form.Label htmlFor="username">Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your username"
          name="username"
          onChange={handleInputChange}
          value={userSignupData.username}
          required
        />
        <Form.Control.Feedback type="invalid">
          Username is required!
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group style={{ marginBottom: '2%' }}>
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your email"
          name="email"
          onChange={handleInputChange}
          value={userSignupData.email}
          required
        />
        <Form.Control.Feedback type="invalid">
          Email is required!
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group style={{ marginBottom: '2%' }}>
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Your password"
          name="password"
          onChange={handleInputChange}
          value={userSignupData.password}
          required
        />
        <Form.Control.Feedback type="invalid">
          Password is required!
        </Form.Control.Feedback>
      </Form.Group>
      <center>
        <Button
          disabled={
            !(
              userSignupData.username &&
              userSignupData.email &&
              userSignupData.password
            )
          }
          type="submit"
          className="purple"
        >
          Sign Up
        </Button>
      </center>
    </Form>
  );
};

export default SignupForm;
