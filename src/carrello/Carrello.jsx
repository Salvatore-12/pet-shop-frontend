import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { ActionTypes, aggiungiOrdine } from "../Redux/action";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Carrello = () => {
  const token = useSelector((state) => state.token);
  const carrello = useSelector((state) => state.carrello);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const procediAlOrdine = () => {
    const listaProdotti = carrello.map((prodotto) => prodotto.idProdotto);
    const body = { listaProdotti };
    dispatch(aggiungiOrdine(token, body)).then((data) => {
      console.log(data);
      navigate("/ordine/" + data);
    });
    dispatch({ type: ActionTypes.SVUOTA_CARRELLO });
  };

  const rimuoviDalCarrello = (idProdotto) => {
    dispatch({
      type: ActionTypes.RIMUOVI_DAL_CARRELLO,
      payload: idProdotto,
    });
  };

  const totale = () => {
    if (!carrello || carrello.length === 0) {
      return 0;
    }

    let totale = 0;
    for (let i = 0; i < carrello.length; i++) {
      if (carrello[i] && carrello[i].prezzo) {
        totale += carrello[i].prezzo;
      }
    }
    return typeof totale === "number" ? totale : 0;
  };
  console.log(totale());
  return (
    <div>
      {carrello ? (
        <div className="mb-5">
          <h2>Ecco il tuo carrello</h2>
          <Row className="ms-2">
            {carrello.map((prodotto, i) => {
              return (
                <Col md={3} key={i}>
                  <Card style={{ width: "15rem", marginBottom: "20px" }}>
                    <Card.Img
                      variant="top"
                      src={prodotto.immagine}
                      alt={prodotto.nome}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <Card.Body className="custom-card-body">
                      <Card.Title className="custom-card-title">
                        {prodotto.nome}
                      </Card.Title>
                      <Card.Text className="custom-card-text">
                        {prodotto.descrizione}
                      </Card.Text>

                      <ListGroup.Item>
                        Prezzo: €{prodotto.prezzo.toFixed(2)}
                      </ListGroup.Item>

                      <FaTrash
                       className="text-success"
                        style={{
                          cursor: "pointer",
                          display: "block",
                          margin: "auto",
                        }}
                        onClick={() => rimuoviDalCarrello(prodotto.idProdotto)}
                      />
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
          <span className="f fs-4">
            totale da pagare:=€{totale().toFixed(2)}
          </span>
          <Button className="ms-3 mb-3 bg-success text-black" onClick={procediAlOrdine}>Procedi all'ordine</Button>
        </div>
      ) : (
        <p>totale={totale}</p>
      )}
    </div>
  );
};
export default Carrello;
