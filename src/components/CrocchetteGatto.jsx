import { useDispatch, useSelector } from "react-redux";
import { ActionTypes, getCrocchetteGatto } from "../Redux/action";
import { useEffect } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CrochetteGatto = ()=>{
    const token = useSelector((state) => state.token);
    const crocchetteGatto = useSelector((state) => state.crocchetteGatto);
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (token) {
        dispatch(getCrocchetteGatto(token));
      }
    }, [dispatch, token]);
return(
   <div>
    <h2>Guinzagli per cani</h2>
    <Container>
      <Row>
    {crocchetteGatto ? (
      crocchetteGatto.map((prodotto, index) => (
          <Col md={3} key={index}>
        <Card style={{ width: "15rem", marginBottom: "20px" }}>
        <Link  to={`/prodotti/${prodotto.idProdotto}`} className="text-black" style={{ textDecoration: 'none'}}>
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
};
export default CrochetteGatto

