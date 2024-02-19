import { useDispatch, useSelector } from "react-redux";
import { getOrdini } from "../Redux/action";
import { useEffect } from "react";

const Ordine = () => {
  const token = useSelector((state) => state.token);
  const ordine = useSelector((state) => state.ordine);
  console.log("tatam",ordine);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrdini(token));
  }, [dispatch, token]);
  return (
    <div>
    {ordine && ordine.length > 0 ? (
      <div>
        {ordine.map((singoloOrdine) => (
          <div key={singoloOrdine.idOrdine}>
            <h3>Ordine</h3>
            <p>ID Ordine: {singoloOrdine.idOrdine}</p>
            <p>Totale da pagare: €{singoloOrdine.totaleDaPagare}</p>
            {singoloOrdine.utente && (
              <div>
                <p>Utente: {singoloOrdine.utente.nome} {singoloOrdine.utente.cognome}</p>
                <p>Email: {singoloOrdine.utente.email}</p>
                <p>Indirizzo: {singoloOrdine.utente.indirizzo}</p>
              </div>
            )}
            <h4>Dettagli ordine:</h4>
            <ul>
              {singoloOrdine.dettagliOrdine && singoloOrdine.dettagliOrdine.map((dettaglio) => (
                <li key={dettaglio.idProdotto}>
                  <img src={dettaglio.immagine} alt={dettaglio.nome} style={{ maxWidth: "100px", maxHeight: "100px", marginRight: "10px" }} />
                  <p>Nome prodotto: {dettaglio.nome}</p>
                  <p>Descrizione: {dettaglio.descrizione}</p>
                  <p>Prezzo: €{dettaglio.prezzo.toFixed(2)}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ) : (
      <p>Non ci sono ordini disponibili.</p>
    )}
  </div>
  );
};
export default Ordine;
