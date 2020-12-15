import React, { useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import { logo } from '../../assets';
import { setCookie } from '../../utils/cookie';
import { authService } from '../../services';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoginLoading] = useState(false);

  const onSubmitLogin = () => {
    setLoginLoading(true);
    authService
      .login(username, password)
      .then((res) => {
        console.log(res);
        const cookieToken = res.token;
        const cookieUser = {
          userId: res.userId,
          username: res.username,
        };
        setCookie('userData', JSON.stringify(cookieUser), 10000);
        setCookie('token', JSON.stringify(cookieToken), 10000);
        window.location.replace('/home');
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoginLoading(false);
      });
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <div className="text-center mb-3">
          <img alt="logo" src={logo} />
        </div>
        <Card>
          <Card.Body>
            <h2 className="text-left mb-4 font-weight-bold">Login</h2>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmitLogin();
              }}
            >
              <Form.Group id="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <Button
                disabled={loading}
                className="w-100 text-center mt-2"
                type="submit"
                value="submit"
              >
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Don&apos;t have an account?
          <a href="signup"> Sign Up </a>
        </div>
      </div>
    </Container>
  );
};

export default Login;
