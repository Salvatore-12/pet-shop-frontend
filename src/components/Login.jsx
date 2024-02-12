import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
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
