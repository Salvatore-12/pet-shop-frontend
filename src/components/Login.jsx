import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const body = {
    email: email,
    password: password,
  };

  const [error, setError] = useState(false);

  const Login = () => {
    fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.ok) {
          navigate("/home");
          return res.json();
        } else {
          setError(true);
          throw new Error("error on login");
        }
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", "Bearer" + data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const token = localStorage.getItem("token");

  console.log(token);
  return (
    <Container
      className="immagine fw-bold text-success w-100 fw-bolder "
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="inserisci l'Email" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="inserisci la Password"
              />
            </Form.Group>
            <Row>
              <Col md={2} className="justify-content-center">
                <Button
                  className="text-bg-success text-black border-0 fw-medium"
                  type="submit"
                  onClick={() => {
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
                >
                  Registrati
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
