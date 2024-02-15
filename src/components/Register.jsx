import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [indirizzo, setIndirizzo] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const payload = {
    nome: nome,
    cognome: cognome,
    email: email,
    indirizzo: indirizzo,
    password: password,
  };

  const registroUtente = () => {
    fetch("http://localhost:3001/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("error on login");
        }
      })
      .then((data) => {
        console.log(data);
        alert("Registered correctly!");
        setTimeout(() => {
          navigate("/login");
        }, 500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="background-image"
         style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1513013156887-d2bf241c8c82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcwfHxjYW5lJTIwaGQlMjBvcnJpenpvbnRhbGV8ZW58MHx8MHx8fDA%3D")`,
        minHeight: "100vh",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
     }}>
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
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                registroUtente();
              }}
            >
              <Form.Group
                className="mb-3 mt-3"
                onChange={(e) => {
                  setNome(e.target.value);
                }}
              >
                <Form.Label className="fw-semibold">Nome</Form.Label>
                <Form.Control type="text" placeholder="Inserisci nome" />
              </Form.Group>

              <Form.Group
                className="mb-3 mt-3"
                onChange={(e) => {
                  setCognome(e.target.value);
                }}
              >
                <Form.Label className="fw-semibold">Cognome</Form.Label>
                <Form.Control type="text" placeholder="Inserisci cognome" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="inserisci l'Email" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group
                className="mb-3 mt-3"
                onChange={(e) => {
                  setIndirizzo(e.target.value);
                }}
              >
                <Form.Label className="fw-semibold">Address</Form.Label>
                <Form.Control type="text" placeholder="Inserisci indirizzo" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="inserisci la Password"
                />
              </Form.Group>
              <Row>
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
    </div>
  );
};

export default Register;
