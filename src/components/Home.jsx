import { useDispatch, useSelector } from "react-redux";
import {
  getGabbieUccelli,
  getGattoTiragraffio,
  getGuinzagli,
} from "../Redux/action";
import { useEffect } from "react";
import { Card, Carousel, Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Homepage = () => {
  const token = useSelector((state) => state.token);
  const tiragraffiGatto = useSelector((state) => state.tiragraffiGatto);
  const dispatch = useDispatch();
  const guinzagli = useSelector((state) => state.guinzagli);
  const gabbieUccelli = useSelector((state) => state.gabbieUccelli);

  useEffect(() => {
    if (token) {
      dispatch(getGabbieUccelli(token));
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (token) {
      dispatch(getGuinzagli(token));
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (token) {
      dispatch(getGattoTiragraffio(token));
      console.log("ecco il token", token);
    }
  }, [dispatch, token]);

  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  return (
    //1)ROW CAROUSEL
    <div className="bg bg-warning-subtle">
      <Link to="/tiragraffi" style={{ textDecoration: "none" }}>
        <h2 className="mt-2 mb-2 text-black">Tiragraffi Per Gatto</h2>
      </Link>
      <Container>
        <Carousel>
          {tiragraffiGatto ? (
            chunkArray(tiragraffiGatto, 5).map((chunk, index) => (
              <Carousel.Item key={index}>
              
                <div className="d-flex justify-content-between  align-items-center">
                  {chunk.map((prodotto, idx) => (
                    <Card
                      key={idx}
                      className="col-12 col-sm-6 col-md-4 col-lg-3 custom-card"
                    >
                      <Card.Img
                        variant="top"
                        src={prodotto.immagine}
                        alt={prodotto.nome}
                        style={{
                          height: "300px",
                          width: "300px",
                          objectFit: "cover",
                        }}
                      />
                      <Card.Body>
                        <Card.Title className="custom-card-title">
                          {prodotto.nome}
                        </Card.Title>
                        <ListGroup.Item className="custom-card-text">
                          Prezzo: €{prodotto.prezzo.toFixed(2)}
                        </ListGroup.Item>
                      </Card.Body>
                      <ListGroup className="list-group-flush"></ListGroup>
                    </Card>
                   
                  ))}
                </div>
                
              </Carousel.Item>
            ))
          ) : (
            <Carousel.Item>
              <p>Caricamento in corso...</p>
            </Carousel.Item>
          )}
        </Carousel>
      </Container>
      {/* 2)ROWCAROUSEL  */}

      <Link to="/guizagli" style={{ textDecoration: "none" }}>
        <h2 className="mt-2 mb-2 text-black">Guizagli Per Cane</h2>
      </Link>
      <Container>
        <Carousel>
          {guinzagli ? (
            chunkArray(guinzagli, 5).map((chunk, index) => (
              <Carousel.Item key={index}>
                <div className="d-flex justify-content-between  align-items-center">
                  {chunk.map((prodotto, idx) => (
                    <Card
                      key={idx}
                      className="col-12 col-sm-6 col-md-4 col-lg-2 custom-card"
                    >
                      <Card.Img
                        variant="top"
                        src={prodotto.immagine}
                        alt={prodotto.nome}
                        style={{
                          height: "150px",
                          width: "auto",
                          objectFit: "cover",
                        }}
                      />
                      <Card.Body>
                        <Card.Title className="custom-card-title">
                          {prodotto.nome}
                        </Card.Title>
                        <ListGroup.Item className="custom-card-text">
                          Prezzo: €{prodotto.prezzo.toFixed(2)}
                        </ListGroup.Item>
                      </Card.Body>
                      <ListGroup className="list-group-flush"></ListGroup>
                    </Card>
                  ))}
                </div>
              </Carousel.Item>
            ))
          ) : (
            <Carousel.Item>
              <p>Caricamento in corso...</p>
            </Carousel.Item>
          )}
        </Carousel>
      </Container>

      <Link to="/gabbie" style={{ textDecoration: "none" }}>
        <h2 className="mt-2 mb-2 text-black">Gabbie Per Uccello</h2>
      </Link>
      <Container>
        <Carousel>
          {gabbieUccelli ? (
            chunkArray(gabbieUccelli, 5).map((chunk, index) => (
              <Carousel.Item key={index}>
                <div className="d-flex justify-content-between  align-items-center">
                  {chunk.map((prodotto, idx) => (
                    <Card
                      key={idx}
                      className="col-12 col-sm-6 col-md-4 col-lg-2  custom-card"
                    >
                      <Card.Img
                        variant="top"
                        src={prodotto.immagine}
                        alt={prodotto.nome}
                        style={{ height: "150px", objectFit: "cover" }}
                      />
                      <Card.Body>
                        <Card.Title className="custom-card-title">
                          {prodotto.nome}
                        </Card.Title>
                        <ListGroup.Item className="custom-card-text">
                          Prezzo: €{prodotto.prezzo.toFixed(2)}
                        </ListGroup.Item>
                      </Card.Body>
                      <ListGroup className="list-group-flush"></ListGroup>
                    </Card>
                  ))}
                </div>
              </Carousel.Item>
            ))
          ) : (
            <Carousel.Item>
              <p>Caricamento in corso...</p>
            </Carousel.Item>
          )}
        </Carousel>
      </Container>
    </div>
  );
};
export default Homepage;
