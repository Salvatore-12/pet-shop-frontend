import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ActionTypes } from "../Redux/action";

const Prodotto = () => {
  const token = useSelector((state) => state.token);
  const { idProdotto } = useParams(); // Utilizzo di useParams per ottenere il parametro 'id' dall'URL
  const [prodotto, setProdotto] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    // Verifica che l'ID sia una stringa valida prima di eseguire la chiamata API
    if (idProdotto && typeof idProdotto === "string") {
      // Effettua una chiamata API per ottenere i dettagli del prodotto utilizzando l'ID
      fetch(`http://localhost:3001/prodotti/${idProdotto}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Aggiungi il token nell'intestazione Authorization
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Dati ricevuti:", data);
          setProdotto(data); // Aggiorna lo stato con i dettagli del prodotto ottenuti dalla chiamata API
        })
        .catch((error) => {
          console.error(
            "Errore durante il recupero dei dettagli del prodotto:",
            error
          );
        });
    }
  }, [idProdotto, token]); // Esegui l'effetto solo quando l'ID o il token cambiano

  // Se il prodotto è ancora in fase di caricamento o non è stato trovato, mostra un messaggio di caricamento
  if (!prodotto) {
    return <p>Caricamento in corso...</p>;
  }
  return (
    <Container fluid className="mt-3">
      <Card style={{ maxWidth: "80%" }}>
        {" "}
        {/* Imposta la larghezza massima della card */}
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
            </Card.Body>
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
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Prodotto;
