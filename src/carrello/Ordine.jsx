import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      {ultimoOrdine ? (
        <div>
          <div>
            <h3>Ordine</h3>
            <p>ID Ordine: {ultimoOrdine.idOrdine}</p>
            <p>Totale da pagare: €{ultimoOrdine.totaleDaPagare}</p>
            {ultimoOrdine.utente && (
              <div>
                <p>
                  Utente: {ultimoOrdine.utente.nome}{" "}
                  {ultimoOrdine.utente.cognome}
                </p>
                <p>Email: {ultimoOrdine.utente.email}</p>
                <p>Indirizzo: {ultimoOrdine.utente.indirizzo}</p>
              </div>
            )}
            <h4>Dettagli ordine:</h4>
            <ul>
              {ultimoOrdine.dettagliOrdine &&
                ultimoOrdine.dettagliOrdine.map((dettaglio) => (
                  <li key={dettaglio.idProdotto}>
                    <img
                      src={dettaglio.immagine}
                      alt={dettaglio.nome}
                      style={{
                        maxWidth: "100px",
                        maxHeight: "100px",
                        marginRight: "10px",
                      }}
                    />
                    <p>Nome prodotto: {dettaglio.nome}</p>
                    <p>Descrizione: {dettaglio.descrizione}</p>
                    <p>Prezzo: €{dettaglio.prezzo.toFixed(2)}</p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Non ci sono ordini disponibili.</p>
      )}
    </div>
  );
};
export default Ordine;
