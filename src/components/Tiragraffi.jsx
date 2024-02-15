import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getGattoTiragraffio } from "../Redux/action";
import { useEffect } from "react";

const Tiragraffi = () => {
  const token = useSelector((state) => state.token);
  const tiragraffiGatto = useSelector((state) => state.tiragraffiGatto);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getGattoTiragraffio(token));
      console.log("ecco il token", token);
    }
  }, [dispatch, token]);

  return (
    <div>
      <h2>Tiragraffi per gatti</h2>
      <Container>
        <Row>
          {tiragraffiGatto ? (
            tiragraffiGatto.map((prodotto, index) => (
              <Col md={3} key={index}>
                <Card style={{ width: "15rem", marginBottom: "20px" }}>
                  <Card.Img
                    variant="top"
                    src={prodotto.immagine}
                    alt={prodotto.nome}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body className="custom-card-body">
                    <Card.Title className="custom-card-title">
                      {prodotto.nome}
                    </Card.Title>
                    <Card.Text className="custom-card-text">
                      {prodotto.descrizione}
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      Prezzo: €{prodotto.prezzo.toFixed(2)}
                    </ListGroup.Item>
                    {/* Altri dettagli del prodotto se necessario */}
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
export default Tiragraffi;
