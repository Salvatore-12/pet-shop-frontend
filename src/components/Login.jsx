import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/action";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const body = {
    email: email,
    password: password,
  };

  const [error, setError] = useState(false);

  const token = localStorage.getItem("token");

  console.log(token);
  return (
    <div
      className="background-image"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1513013156887-d2bf241c8c82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcwfHxjYW5lJTIwaGQlMjBvcnJpenpvbnRhbGV8ZW58MHx8MHx8fDA%3D")`,
        minHeight: "100vh",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        className="fw-bold text-success w-100 fw-bolder "
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row className="justify-content-evenly align-align-items-center w-50 h-50 mb-1 mt-5">
          <Col>
            <Form>
              <Form.Group className="mb-3 text-black" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="inserisci l'Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3 text-black" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="inserisci la Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    console.log(body);
                  }}
                />
              </Form.Group>
              <Row>
                <Col md={2} className="justify-content-center">
                  <Button
                    className="text-bg-success text-black border-0 fw-medium"
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(login(body));
                      navigate("/home");
                    }}
                  >
                    Accedi
                  </Button>
                </Col>

                <Col md={2}>
                  <Button
                    className="text-bg-success text-black border-0 fw-medium"
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/register");

                    }}
                  >
                    Registrati
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
