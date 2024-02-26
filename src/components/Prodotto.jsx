import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ActionTypes } from "../Redux/action";
import { ArrowLeft } from "react-bootstrap-icons";
import { RiShoppingCartLine } from "react-icons/ri";

const Prodotto = () => {
  const token = useSelector((state) => state.token);
  const { idProdotto } = useParams();
  const [prodotto, setProdotto] = useState(null);
  const dispatch = useDispatch();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Verifico che l'ID sia una stringa valida prima di eseguire la chiamata API
    if (idProdotto && typeof idProdotto === "string") {
      fetch(`http://localhost:3001/prodotti/${idProdotto}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Dati ricevuti:", data);
          setProdotto(data);
        })
        .catch((error) => {
          console.error(
            "Errore durante il recupero dei dettagli del prodotto:",
            error
          );
        });
    }
  }, [idProdotto, token]);
  if (!prodotto) {
    return <p>Caricamento in corso...</p>;
  }
  const handleGoBack = () => {
    window.history.back();
  };

  const handleAddToCart = (prodotto,) => {
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
    <Container fluid className="mt-3">
      <Card style={{ maxWidth: "80%" }}>
        <Link
          to="#"
          onClick={handleGoBack}
          style={{ position: "absolute", left: "10px", top: "10px" }}
          className="text-success"
        >
          <ArrowLeft size={20} />
        </Link>
        <Row>
          <Col sm={6}>
            <Card.Img
              className="prodotto-image"
              variant="top"
              src={prodotto.immagine}
              alt={prodotto.nome}
            />
          </Col>
          <Col sm={6} className="mt-3">
            <Card.Body>
              <Card.Title>
                <h1>{prodotto.nome}</h1>
              </Card.Title>
              <Card.Body className="text-custom">
                <Card.Text className="mt-1">
                  <h4>Descrizione:</h4>
                  {prodotto.descrizione}
                </Card.Text>
                <Card.Text>Prezzo: €{prodotto.prezzo.toFixed(2)}</Card.Text>
                <Card.Text>Categoria: {prodotto.categoria}</Card.Text>
                <Card.Text>Tipo di animale: {prodotto.tipoAnimale}</Card.Text>
              </Card.Body>
              <RiShoppingCartLine
                      onClick={() =>
                        handleAddToCart(prodotto)
                      }
                      className={`my-cart-icon my-button text-success ${
                        isAnimating ? "animate" : ""
                      }`}
                    />
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Prodotto;
