import React, { useState } from 'react';
import { Form, Alert, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';


import Auth from '../../utils/auth';
import { LOGIN_USER } from '../../utils/mutations';

const LoginForm = () => {
  const [userLoginData, setUserLoginData] = useState({
    email: '',
    password: '',
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login, { error }] = useMutation(LOGIN_USER);

  if (error) {
    console.error(error);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserLoginData({ ...userLoginData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userLoginData },
      });

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserLoginData({
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
        Something went wrong with your login credentials!
      </Alert>

      <Form.Group style={{ marginBottom: '2%' }}>
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your email"
          name="email"
          onChange={handleInputChange}
          value={userLoginData.email}
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
          value={userLoginData.password}
          required
        />
        <Form.Control.Feedback type="invalid">
          Password is required!
        </Form.Control.Feedback>
      </Form.Group>
      <center>
        <Button
          disabled={!(userLoginData.email && userLoginData.password)}
          type="submit"
          className="button"
        >
          Login
        </Button>
      </center>
    </Form>
  );
};

export default LoginForm;
