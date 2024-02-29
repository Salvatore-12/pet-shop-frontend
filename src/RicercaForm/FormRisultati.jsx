
import { useState } from "react";
import {  Card, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { ActionTypes } from "../Redux/action";
import { RiShoppingCartLine } from "react-icons/ri";
const FormRisultati = () => {
  const dispatch = useDispatch();
  const [isAnimating, setIsAnimating] = useState(false);
  const location = useLocation();
  const searchResults = location.state.searchResults;

  
  if (!searchResults || searchResults.length === 0) {
    return <div>Nessun risultato trovato</div>;
  }

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
      <h1>Risultati della ricerca</h1>
      <Row xs={1} md={2} lg={3} className="g-4 mx-4">
        {searchResults.map((prodotto, index) => (
          <Col key={index}>
            <Link
              to={`/prodotti/${prodotto.idProdotto}`}
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <Card className="col-12 col-sm-6 col-md-4 col-lg-2 custom-card text-truncate"  style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={prodotto.immagine}
                  alt="Immagine prodotto"
                  className="img-fluid"
                />
                <Card.Body className="custom-card-body">
                  <Card.Title className="text-truncate fs-6 w-100">{prodotto.nome}</Card.Title>
                  <Card.Text className="custom-card-text text-truncate">{prodotto.descrizione}</Card.Text>
                  <Card.Text>
                    <strong>Prezzo:</strong> {prodotto.prezzo} €
                  </Card.Text>
                  <Card.Text>
                    <strong>Categoria:</strong> {prodotto.categoria}
                  </Card.Text>
                  <Card.Text>
                    <strong>Tipo di animale:</strong> {prodotto.tipoAnimale}
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                    <RiShoppingCartLine
                      onClick={() => handleAddToCart(prodotto)}
                      className={`my-cart-icon my-button text-success ${
                        isAnimating ? "animate" : ""
                      }`}
                    />
                    </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FormRisultati;
