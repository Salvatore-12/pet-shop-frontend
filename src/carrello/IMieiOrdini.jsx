import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrdiniUtente } from "../Redux/action";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const IMieiOrdini = () =>{
const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const ordini = useSelector((state) => state.ordiniUtente || []); // assicuriamoci che non sia null

  useEffect(() => {
    if (token) {
      dispatch(OrdiniUtente(token));
    }
  }, [token, dispatch]);

  if (!token) return <p>Devi effettuare il login per vedere i tuoi ordini.</p>;

  return (
    <div className="container mt-4">
      <h3>I miei ordini</h3>

      {ordini.length === 0 ? (
        <p>Non hai ancora effettuato ordini.</p>
      ) : (
        <Row>
          {ordini.map((ordine) => (
            <Col md={4} key={ordine.idOrdine} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>ID Ordine: {ordine.idOrdine}</Card.Title>
                  <Card.Text>Totale: €{ordine.totaleDaPagare.toFixed(2)}</Card.Text>
                  <Card.Text>
                    Prodotti: {ordine.dettagliOrdine ? ordine.dettagliOrdine.length : 0}
                  </Card.Text>
                  <Link to={`/ordine/${ordine.idOrdine}`}>
                    <Button variant="primary">Vedi dettagli</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
export default IMieiOrdini