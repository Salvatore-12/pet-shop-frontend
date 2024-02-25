import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { ActionTypes, getAccessoriGabbieUccelli } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AccessoriGabbiePerUccelli=()=>{
    const token = useSelector((state) => state.token);
    const accessoriGabbieUccelli = useSelector((state) => state.accessoriGabbieUccelli);
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (token) {
        dispatch(getAccessoriGabbieUccelli(token));
      }
    }, [dispatch, token]);
return(
   <div>
    <h2>Accessori Gabbie Per Uccelli </h2>
    <Container>
      <Row>
    {accessoriGabbieUccelli ? (
      accessoriGabbieUccelli.map((prodotto, index) => (
          <Col md={3} key={index}>
        <Card style={{ width: "15rem", marginBottom: "20px" }}>
        <Link to={`/prodotti/${prodotto.idProdotto}`} className="text-black" style={{ textDecoration: 'none'}}>
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
          </Link>
          <Card.Body>
                    <Button
                      onClick={() => {
                        dispatch({
                          type: ActionTypes.AGGIUNGI_ALCARRELLO,
                          payload: prodotto,
                        });
                      }}
                    >
                      Aggiungi al carrello
                    </Button>
                  </Card.Body>
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
export default AccessoriGabbiePerUccelli