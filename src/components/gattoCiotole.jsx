import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { ActionTypes, getCiotoleGatto } from "../Redux/action";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";

const GattoCiotole=()=>{
const token = useSelector((state) => state.token);
const ciotoleGatto = useSelector((state) => state.ciotoleGatto);
const dispatch = useDispatch();
const [isAnimating, setIsAnimating] = useState(false);

useEffect(() => {
if (token) {

  dispatch(getCiotoleGatto(token));  
}

},[dispatch, token])

const handleAddToCart = (prodotto) => {
  setIsAnimating(true);
  dispatch({
    type: ActionTypes.AGGIUNGI_ALCARRELLO,
    payload: prodotto,
  });

  setTimeout(() => {
    setIsAnimating(false);
  }, 1000);
};

return(

<div>
      <h2>Ciotole Per Gatti</h2>
      <Container>
        <Row>
      {ciotoleGatto ? (
        ciotoleGatto.map((prodotto, index) => (
            <Col md={3} key={index}>
          <Card className="col-12 col-sm-6 col-md-4 col-lg-2 custom-card text-truncate" style={{ width: "15rem", marginBottom: "20px" }}>
          <Link  to={`/prodotti/${prodotto.idProdotto}`} className="text-black" style={{ textDecoration: 'none'}}>
            <Card.Img
              variant="top"
              src={prodotto.immagine}
              alt={prodotto.nome}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="custom-card-body">
              <Card.Title className="text-truncate fs-6 w-100">{prodotto.nome}
              </Card.Title>
              <Card.Text className="custom-card-text text-truncate">{prodotto.descrizione}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Prezzo: €{prodotto.prezzo.toFixed(2)}</ListGroup.Item>
            </ListGroup>
            </Link>
            <Card.Body>
            <RiShoppingCartLine
                      onClick={() => handleAddToCart(prodotto)}
                      className={`my-cart-icon my-button text-success ${
                        isAnimating ? "animate" : ""
                      }`}
                    />
                  </Card.Body>
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
export default GattoCiotole