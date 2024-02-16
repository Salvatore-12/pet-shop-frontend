import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { getGabbieUccelli } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const GabbiePerUccelli=()=>{
    const token = useSelector((state) => state.token);
    const gabbieUccelli = useSelector((state) => state.gabbieUccelli);
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (token) {
        dispatch(getGabbieUccelli(token));
      }
    }, [dispatch, token]);
return(
   <div>
    <h2>Guinzagli per cani</h2>
    <Container>
      <Row>
    {gabbieUccelli ? (
      gabbieUccelli.map((prodotto, index) => (
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
  </div>);
}
export default GabbiePerUccelli