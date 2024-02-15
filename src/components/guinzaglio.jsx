import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGuinzagli } from "../Redux/action";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";

const Guinzaglio = () => {
  const token = useSelector((state) => state.token);
  const guinzagli = useSelector((state) => state.guinzagli);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getGuinzagli(token));
    }
  }, [dispatch, token]);

  return (
    <div>
      <h2>Guinzagli per cani</h2>
      <Container>
        <Row>
      {guinzagli ? (
        guinzagli.map((prodotto, index) => (
            <Col md={3} key={index}>
          <Card style={{ width: "15rem", marginBottom: "20px" }}>
            <Card.Img
              variant="top"
              src={prodotto.immagine}
              alt={prodotto.nome}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="custom-card-body">
              <Card.Title className="custom-card-title">{prodotto.nome}
              </Card.Title>
              <Card.Text className="custom-card-text">{prodotto.descrizione}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Prezzo: €{prodotto.prezzo.toFixed(2)}</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        ))
      ) : (
        <p>Caricamento in corso...</p>
      )}
      </Row>
      </Container>
    </div>
  );
};
export default Guinzaglio;
