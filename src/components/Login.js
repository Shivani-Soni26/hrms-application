import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { Button, Card, Container, Form } from 'react-bootstrap';
import config from '../common/config';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;

    // Validate email
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate password
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop form submission if validation fails
    }

    try {
      const response = await fetch(`${config.baseApiUrl}login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      console.log('Response Status:', response.status); // Log the response status

      if (response.ok) {
        const data = await response.json();
        console.log('Server Response:', data);

        const userId = data.user && data.user.length > 0 ? data.user[0].id : null;
        console.log('User ID:', userId);

        if (userId) {
          localStorage.setItem('userId', userId);

          const username = data.user && data.user.length > 0 ? `${data.user[0].firstname} ${data.user[0].lastname}`: 'DefaultName';
          console.log('Username:', username);
          localStorage.setItem('username', username);

          const role = data.user && data.user.length > 0 ? data.user[0].role : 'DefaultRole';
          console.log('ROLE:', role);
          localStorage.setItem('role', role);

          const roleName = data.user && data.user.length > 0 ? data.user[0].roleName : 'DefaultRole';
          console.log('ROLE:', roleName);
          localStorage.setItem('roleName', roleName);

          const token = data != null ? data.token : '';
          console.log('token:', token);
          localStorage.setItem('token', token);

          navigate('/layout/dashboard');
          window.location.reload();
        } else {
          console.error('User ID not available in the server response');
        }
      } else {
        const errorData = await response.json();

        if (response.status === 401) {
          // Unauthorized - wrong email or password
          setEmailError('Invalid email or password');
          setPasswordError('Invalid email or password');
        } else {
          console.error('Authentication failed');
        }
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };


  return (
    <div className='login-form'>
      <Container>
        <Card className='p-5 text-center'>
          <Card.Body>
            <img src={Logo} alt="Logo" className='mb-5 logo' />

            <h2 className='mb-5'>Login</h2>

            <Form className='text-start' onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  required
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmailChange}
                  isInvalid={!!emailError}
                />
                <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  isInvalid={!!passwordError}
                  required
                />
                <Form.Control.Feedback type="invalid">{passwordError}</Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" className='w-100 mt-4' type='submit'>
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Login;