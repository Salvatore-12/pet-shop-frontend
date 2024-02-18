import { useSelector } from "react-redux";
import { Card, Col, ListGroup, Row } from "react-bootstrap";

const Carrello = () => {
  const token = useSelector((state) => state.token);
  const carrello = useSelector((state) => state.carrello);
 
  //const payload={listaProdotti:[]}
  //const aggiungiprodottiOrdine =()=>{for (let i = 0; i < carrello.length; i++) {
  //payload.listaProdotti.push(carrello[i].id)
  //}}

  const totale = () => {
    let totale = 0;
    for (let i = 0; i < carrello.length; i++) {
      totale += carrello[i].prezzo;
    }
    return totale;
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
        </div>
      ) : (
        <p>totale={totale}</p>
      )}
    </div>
  );
};
export default Carrello;
