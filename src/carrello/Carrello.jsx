import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { ActionTypes, aggiungiOrdine } from "../Redux/action";
import { useNavigate } from "react-router-dom";
import StripeOption1 from "../components/Stripe";

const Carrello = () => {
  const token = useSelector((state) => state.token);
  const carrello = useSelector((state) => state.carrello);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const prodottiPerIlCheckout = carrello.map((prodotto) => {
    return {
        price: prodotto.priceId,
        quantity: 1
    };
});
  const procediAlOrdine = () => {
    const listaProdotti = carrello.map((prodotto) => prodotto.idProdotto);
    const body = { listaProdotti };
    dispatch(aggiungiOrdine(token, body)).then((data) => {
      console.log(data);
      navigate("/ordine/" + data);
    });
    dispatch({ type: ActionTypes.SVUOTA_CARRELLO });
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
        <div>
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
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        Prezzo: €{prodotto.prezzo.toFixed(2)}
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              );
            })}
          </Row>
          <span className="f fs-4">
            totale da pagare:=€{totale().toFixed(2)}
          </span>
          <Button onClick={procediAlOrdine}>Procedi all'ordine</Button>
          <StripeOption1 prodottiPerIlCheckout={prodottiPerIlCheckout}/>
          {/* <Button onClick={makePayment}>procedi al Pagamento</Button> */}
        </div>
      ) : (
        <p>totale={totale}</p>
      )}
    </div>
  );
};
export default Carrello;
