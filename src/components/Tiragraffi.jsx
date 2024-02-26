import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ActionTypes, getGattoTiragraffio } from "../Redux/action";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";

const Tiragraffi = () => {
  const token = useSelector((state) => state.token);
  const tiragraffiGatto = useSelector((state) => state.tiragraffiGatto);
  const dispatch = useDispatch();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (token) {
      dispatch(getGattoTiragraffio(token));
    }
  }, [dispatch, token]);
 
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

  return (
    <div>
      <h2>Tiragraffi per gatti</h2>
      <Container>
        <Row>
          {tiragraffiGatto ? (
            tiragraffiGatto.map((prodotto, index) => (
              <Col md={3} key={index}>
                <Card
                  className="col-12 col-sm-6 col-md-4 col-lg-3"
                  style={{ width: "200px", marginBottom: "20px" }}
                >
                  <Link
                    to={`/prodotti/${prodotto.idProdotto}`}
                    className="text-black"
                    style={{ textDecoration: "none" }}
                  >
                    <Card.Img
                      variant="top"
                      src={prodotto.immagine}
                      alt={prodotto.nome}
                      style={{
                        height: "200px",
                        width: "200px",
                        objectFit: "cover",
                      }}
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
export default Tiragraffi;
