import React from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';

const Signup = () => {
  // const userRef = useRef();
  // const passwordRef = useRef();
  // const passwordConfirmRef = useRef();
  // // const [user, setUser] = useState('');
  // // const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  // // const [userError, setUserError] = useState('');
  // // const [passwordError, setPasswordError] = useState('');
  // const [loading, setLoading] = useState(false);
  // // const [hasAccount, setHasAccount] = useState(false);

  // handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (passwordRef.current.value !== passwordConfirmRef.current.value) {
  //     return setError('Passwords do not match');
  //   }

  //   try {
  //     setError('');
  //     setLoading(true);
  //     await Signup(userRef.current.value, passwordRef.current.value);
  //   } catch {
  //     setError('Failed to create an account');
  //   }

  //   setLoading(false);
  // };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Card>
          <Card.Body>
            <h2 className="text-left mb-4 font-weight-bold">Sign Up</h2>
            {/* {error && <Alert variant="danger">{error}</Alert>} */}
            <Form>
              <Form.Group id="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  //  ref={userRef}
                  required
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  //  ref={passwordRef}
                  required
                />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  // ref={passwordConfirmRef}
                  required
                />
              </Form.Group>
              <Button
                // disabled={loading}
                className="w-100 text-center mt-2"
                type="submit"
              >
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? Log In
        </div>
      </div>
    </Container>
  );
};

export default Signup;
