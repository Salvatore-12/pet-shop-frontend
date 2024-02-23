import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StripeOption1 from "../components/Stripe";
import { Card, Col, Row } from "react-bootstrap";

const Ordine = () => {
  const token = useSelector((state) => state.token);
  console.log(token);
  const param = useParams();
  const [ultimoOrdine, setUltimoOrdine] = useState(null);
  

  const getUltimoOrdine = () => {
    const URL = "http://localhost:3001/ordine/" + param.idOrdine;

    fetch(URL, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nella richiesta");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUltimoOrdine(data);
      })
      .catch((error) => {
        console.error("Si è verificato un errore:", error);
      });
  };
  useEffect(() => {
    getUltimoOrdine();
  }, []);

  return (
    <div className="container">
    {ultimoOrdine ? (
      <div>
        <h3>Dettagli dell'ordine</h3>

        <div className="separator"></div>

        <Card>
          <Card.Body>
            <Card.Title>ID Ordine: {ultimoOrdine.idOrdine}</Card.Title>
            <Card.Text>Totale da pagare: €{ultimoOrdine.totaleDaPagare}</Card.Text>
          </Card.Body>
        </Card>

        <div className="separator"></div>

        <Card>
          <Card.Body>
            {ultimoOrdine.utente && (
              <>
                <Card.Title>Dati Utente</Card.Title>
                <Card.Text>Nome: {ultimoOrdine.utente.nome} {ultimoOrdine.utente.cognome}</Card.Text>
                <Card.Text>Email: {ultimoOrdine.utente.email}</Card.Text>
                <Card.Text>Indirizzo: {ultimoOrdine.utente.indirizzo}</Card.Text>
              </>
            )}
          </Card.Body>
        </Card>

        <div className="separator"></div>

        <Card>
          <Card.Body>
            <Card.Title>Prodotti</Card.Title>
            <Row>
              {ultimoOrdine.dettagliOrdine &&
                ultimoOrdine.dettagliOrdine.map((dettaglio) => (
                  <Col md={4} key={dettaglio.idProdotto}>
                    <Card>
                      <Card.Img variant="top" src={dettaglio.immagine} />
                      <Card.Body>
                        <Card.Title>{dettaglio.nome}</Card.Title>
                        <Card.Text>{dettaglio.descrizione}</Card.Text>
                        <Card.Text>Prezzo: €{dettaglio.prezzo.toFixed(2)}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </Card.Body>
        </Card>

        <div className="separator"></div>

        {/* Renderizza il componente StripeOption1 e passa i dati dell'ordine */}
        <StripeOption1 ordine={ultimoOrdine} />
      </div>
    ) : (
      <p>Non ci sono ordini disponibili.</p>
    )}
  </div>

  );
};
export default Ordine;
