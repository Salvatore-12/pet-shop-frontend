import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";



const FormRisultati = () => {
    const token = useSelector((state) => state.token);
    const location = useLocation();
    const searchQuery = decodeURIComponent(location.pathname.split("/")[2]);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
  
    
    const fetchResults = async () => {
        try {
          if (!searchQuery) {
            console.error("La query di ricerca non è definita");
            return;
          }
      
          const token = localStorage.getItem('jwtToken');
          const response = await fetch(
            `http://localhost:3001/prodotti/prodotti-per-parte-del-nome?parteDelNome=${encodeURIComponent(searchQuery)}`,
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          );
      
          if (!response.ok) {
            throw new Error('Errore nella richiesta HTTP');
          }
      
          const data = await response.json();
          setResults(data);
          setLoading(false);
        } catch (error) {
          console.error("Errore durante la ricerca:", error);
        }
      };
          
          useEffect(() => {
            fetchResults();
          }, [searchQuery]);
  
    return (
      <div>
        <h1>Risultati della ricerca per: {searchQuery}</h1>
        {loading ? (
          <p>Caricamento...</p>
        ) : (
          <div>
            {results.map((prodotto) => (
              <div key={prodotto.idProdotto}>
                <img src={prodotto.immagine} alt={prodotto.nome} />
                <p>{prodotto.nome}</p>
                <p>{prodotto.descrizione}</p>
                <p>{prodotto.prezzo}</p>
                {/* Aggiungi altre informazioni del prodotto se necessario */}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default FormRisultati;