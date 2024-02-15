import { Card, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getGattoTiragraffio, getTest } from "../Redux/action";
import { useEffect } from "react";

const Tiragraffi = () => {
  const token = useSelector((state) => state.token);
  const tiragraffiGatto = useSelector((state) => state.tiragraffiGatto);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getGattoTiragraffio(token));
      console.log("ecco il token", token);
    }
  }, [dispatch, token]);

  return (
    <div>
      <h2>Tiragraffi per gatti</h2>
      {tiragraffiGatto ? (
        tiragraffiGatto.map((prodotto, index) => (
          <Card key={index} style={{ width: "18rem", marginBottom: "20px" }}>
            <Card.Img
              variant="top"
              src={prodotto.immagine}
              alt={prodotto.nome}
            />
            <Card.Body>
              <Card.Title>{prodotto.nome}</Card.Title>
              <Card.Text>{prodotto.descrizione}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Categoria: {prodotto.categoria}</ListGroup.Item>
              <ListGroup.Item>Prezzo: {prodotto.prezzo}</ListGroup.Item>
              {/* Altri dettagli del prodotto se necessario */}
            </ListGroup>
          </Card>
        ))
      ) : (
        <p>Caricamento in corso...</p>
      )}
    </div>
  );
};
export default Tiragraffi;
