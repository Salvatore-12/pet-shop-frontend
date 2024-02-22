export const LOGIN = "LOGIN"

export const ActionTypes = {
    //1)SEZIONE GATTO
    SET_GATTO_TIRAGRAFFI: "SET_GATTO_TIRAGRAFFI",
    SET_CIOTOLE_GATTO: "SET_CIOTOLE_GATTO",
    SET_CUCCIELETTINI_GATTO: "SET_CUCCIELETTINI_GATTO",
    SET_GIOCHI_GATTO: "SET_GIOCHI_GATTO",
    SET_CROCCHETTE_GATTO: "SET_CROCCHETTE_GATTO",
    SET_CIBOUMIDO_GATTO:" SET_CIBOUMIDO_GATTO",
    //2)SEZIONE CANE
    SET_GUINZAGLIO: " SET_GUINZAGLIO",
    SET_CIOTOLE_CANE: "SET_CIOTOLE_CANE",
    SET_CROCCHETTE_CANE: "SET_CROCCHETTE_CANE",
    SET_CIBO_UMIDO_CANE: " SET_CIBO_UMIDO_CANE",
    SET_GIOCHI_CANE: "SET_GIOCHI_CANE",
    CUCCIE_CANE: "CUCCIE_CANE",
    //3)SEZIONE UCCELLO
    SET_GABBIE_UCCELLI: "SET_GABBIE_UCCELLI",
    MANGIME_UCCELLI:"MANGIME_UCCELLI",
    ACCESSORI_GABBIE_UCCELLI:"ACCESSORI_GABBIE_UCCELLI",
    //4)SETTAGIO GENERALE 
    SET_UTENTE_TOKEN: "SET_UTENTE_TOKEN",
    LOGOUT_UTENTE: "LOGOUT_UTENTE",
    SET_ERROR: "SET_ERROR",
    //5)CARRELLO
    AGGIUNGI_ALCARRELLO: " AGGIUNGI_ALCARRELLO",
    SET_ORDINE: 'SET_ORDINE',
    AGGIUNGI_ULTIMO_ORDINE: "AGGIUNGI_ULTIMO_ORDINE",
    SVUOTA_CARRELLO: "SVUOTA_CARRELLO"


};

export const setAccessoriGabbieUccelli = (AccessoriGabbieUccelli) => ({
    type: ActionTypes.ACCESSORI_GABBIE_UCCELLI,
    payload: AccessoriGabbieUccelli
})

export const getAccessoriGabbieUccelli = (token) => async (dispatch) => {
    const URLMangime = "http://localhost:3001/prodotti/Accessori-gabbie-uccelli";
    try {
        const response = await fetch(URLMangime, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        if (response.ok) {
            const data = await response.json();
            dispatch(setAccessoriGabbieUccelli(data));
            console.log("Dati ricevuti:", data);
            return data;
        } else {
            const errorMessage = await response.text();
            if (response.status === 401) {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
            } else {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati dei mangimi" });
            }
            throw new Error(errorMessage || "Errore durante la richiesta dei dati dei tiragraffi");
        }
    } catch (error) {
        console.error("Errore:", error);
        // Invia un'azione di errore al reducer
        dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dati dei tiragraffi" });
    }
};

export const setMangimeUccelli = (MangimeUccelli) => ({
    type: ActionTypes.MANGIME_UCCELLI,
    payload: MangimeUccelli
})

export const getMangimeUccelli = (token) => async (dispatch) => {
    const URLMangime = "http://localhost:3001/prodotti/mangime-uccelli";
    try {
        const response = await fetch(URLMangime, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        if (response.ok) {
            const data = await response.json();
            dispatch(setMangimeUccelli(data));
            console.log("Dati ricevuti:", data);
            return data;
        } else {
            const errorMessage = await response.text();
            if (response.status === 401) {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
            } else {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati dei mangimi" });
            }
            throw new Error(errorMessage || "Errore durante la richiesta dei dati dei tiragraffi");
        }
    } catch (error) {
        console.error("Errore:", error);
        // Invia un'azione di errore al reducer
        dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dati dei tiragraffi" });
    }
};

export const setCiboUmidoGatto = (CiboUmidoGatto) => ({
    type: ActionTypes.SET_CIBOUMIDO_GATTO,
    payload: CiboUmidoGatto
})

export const getCiboUmidoGatto = (token) => async (dispatch) => {
    const URLCiboUmidoGatto = "http://localhost:3001/prodotti/cibo-umido-gatto";
    try {
        const response = await fetch(URLCiboUmidoGatto, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        if (response.ok) {
            const data = await response.json();
            dispatch(setCiboUmidoGatto(data));
            console.log("Dati ricevuti:", data);
            return data;
        } else {
            const errorMessage = await response.text();
            if (response.status === 401) {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
            } else {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati dei tiragraffi" });
            }
            throw new Error(errorMessage || "Errore durante la richiesta dei dati dei tiragraffi");
        }
    } catch (error) {
        console.error("Errore:", error);
        // Invia un'azione di errore al reducer
        dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dati dei tiragraffi" });
    }
};

export const setCuccieCane = (CuccieCane) => ({
    type: ActionTypes.CUCCIE_CANE,
    payload: CuccieCane
})

export const getCuccieCane = (token) => async (dispatch) => {
    const URLCrocchetteGatto = "http://localhost:3001/prodotti/cuccie-lettini-cane";
    try {
        const response = await fetch(URLCrocchetteGatto, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        if (response.ok) {
            const data = await response.json();
            dispatch(setCuccieCane(data));
            console.log("Dati ricevuti:", data);
            return data;
        } else {
            const errorMessage = await response.text();
            if (response.status === 401) {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
            } else {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati dei tiragraffi" });
            }
            throw new Error(errorMessage || "Errore durante la richiesta dei dati dei tiragraffi");
        }
    } catch (error) {
        console.error("Errore:", error);
        // Invia un'azione di errore al reducer
        dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dati dei tiragraffi" });
    }
};

export const setGiochiCane = (giochiCane) => ({
    type: ActionTypes.SET_GIOCHI_CANE,
    payload: giochiCane
})

export const getGiochiCane = (token) => async (dispatch) => {
    const URLCrocchetteGatto = "http://localhost:3001/prodotti/giochi-per-cane";
    try {
        const response = await fetch(URLCrocchetteGatto, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        if (response.ok) {
            const data = await response.json();
            dispatch(setGiochiCane(data));
            console.log("Dati ricevuti:", data);
            return data;
        } else {
            const errorMessage = await response.text();
            if (response.status === 401) {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
            } else {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati dei tiragraffi" });
            }
            throw new Error(errorMessage || "Errore durante la richiesta dei dati dei tiragraffi");
        }
    } catch (error) {
        console.error("Errore:", error);
        // Invia un'azione di errore al reducer
        dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dati dei tiragraffi" });
    }
};

export const setCiboUmidoCane = (ciboUmidoCane) => ({
    type: ActionTypes.SET_CIBO_UMIDO_CANE,
    payload: ciboUmidoCane
})

export const setCrocchetteCane = (crocchetteCane) => ({
    type: ActionTypes.SET_CROCCHETTE_CANE,
    payload: crocchetteCane
})

export const getCiboUmidoCane = (token) => async (dispatch) => {
    const URLCrocchetteGatto = "http://localhost:3001/prodotti/cibo_umido-cane";
    try {
        const response = await fetch(URLCrocchetteGatto, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        if (response.ok) {
            const data = await response.json();
            dispatch(setCiboUmidoCane(data));
            console.log("Dati ricevuti:", data);
            return data;
        } else {
            const errorMessage = await response.text();
            if (response.status === 401) {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
            } else {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati dei tiragraffi" });
            }
            throw new Error(errorMessage || "Errore durante la richiesta dei dati dei tiragraffi");
        }
    } catch (error) {
        console.error("Errore:", error);
        // Invia un'azione di errore al reducer
        dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dati dei tiragraffi" });
    }
};


export const getCrocchetteCane = (token) => async (dispatch) => {
    const URLCrocchetteGatto = "http://localhost:3001/prodotti/crocchette_cane";
    try {
        const response = await fetch(URLCrocchetteGatto, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        if (response.ok) {
            const data = await response.json();
            dispatch(setCrocchetteCane(data));
            console.log("Dati ricevuti:", data);
            return data;
        } else {
            const errorMessage = await response.text();
            if (response.status === 401) {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
            } else {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati dei tiragraffi" });
            }
            throw new Error(errorMessage || "Errore durante la richiesta dei dati dei tiragraffi");
        }
    } catch (error) {
        console.error("Errore:", error);
        // Invia un'azione di errore al reducer
        dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dati dei tiragraffi" });
    }
};


export const setCiotoleCane = (ciotoleCane) => ({
    type: ActionTypes.SET_CIOTOLE_CANE,
    payload: ciotoleCane
})

export const getCiotoleCane = (token) => async (dispatch) => {
    const URLCrocchetteGatto = "http://localhost:3001/prodotti/ciotole_per-cane";
    try {
        const response = await fetch(URLCrocchetteGatto, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        if (response.ok) {
            const data = await response.json();
            dispatch(setCiotoleCane(data));
            console.log("Dati ricevuti:", data);
            return data;
        } else {
            const errorMessage = await response.text();
            if (response.status === 401) {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
            } else {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati dei tiragraffi" });
            }
            throw new Error(errorMessage || "Errore durante la richiesta dei dati dei tiragraffi");
        }
    } catch (error) {
        console.error("Errore:", error);
        // Invia un'azione di errore al reducer
        dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dati dei tiragraffi" });
    }
};

export const setOrdini = (ordini) => ({
    type: ActionTypes.SET_ORDINE,
    payload: ordini
});


export const getOrdini = (token) => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:3001/ordine/utente', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Errore durante il recupero degli ordini');
        }

        const ordini = await response.json();
        dispatch({ type: ActionTypes.SET_ORDINE, payload: ordini });
    } catch (error) {
        console.error('Errore durante il recupero degli ordini:', error);
    }
};
export const aggiungiOrdine = (token, body) => {
    return async () => {
        const URL = "http://localhost:3001/ordine/crea-ordine"
        try {
            const res = await fetch(URL, {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });
            if (res.ok) {
                const data = await res.json()
                console.log(data)
                localStorage.setItem("idOrdine", data.idOrdine)
                return localStorage.getItem("idOrdine")
            } else {
                throw new Error("Something went wrong.");
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const setGiochiGatto = (giochiGatto) => ({
    type: ActionTypes.SET_GIOCHI_GATTO,
    payload: giochiGatto
});

export const getGiochiGatto = (token) => async (dispatch) => {
    const URLGiochiGatto = "http://localhost:3001/prodotti/giochi-gatto";
    try {
        const response = await fetch(URLGiochiGatto, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        if (response.ok) {
            const data = await response.json();
            dispatch(setGiochiGatto(data));
            console.log("Dati ricevuti:", data);
            return data;
        } else {
            const errorMessage = await response.text();
            if (response.status === 401) {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
            } else {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati dei tiragraffi" });
            }
            throw new Error(errorMessage || "Errore durante la richiesta dei dati dei tiragraffi");
        }
    } catch (error) {
        console.error("Errore:", error);
        // Invia un'azione di errore al reducer
        dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dati dei tiragraffi" });
    }
};

export const setCrocchetteGatto = (crocchetteGatto) => ({
    type: ActionTypes.SET_CROCCHETTE_GATTO,
    payload: crocchetteGatto
});

export const getCrocchetteGatto = (token) => async (dispatch) => {
    const URLCrocchetteGatto = "http://localhost:3001/prodotti/crocchette-gatto";
    try {
        const response = await fetch(URLCrocchetteGatto, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        if (response.ok) {
            const data = await response.json();
            dispatch(setCrocchetteGatto(data));
            console.log("Dati ricevuti:", data);
            return data;
        } else {
            const errorMessage = await response.text();
            if (response.status === 401) {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
            } else {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati dei tiragraffi" });
            }
            throw new Error(errorMessage || "Errore durante la richiesta dei dati dei tiragraffi");
        }
    } catch (error) {
        console.error("Errore:", error);
        // Invia un'azione di errore al reducer
        dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dati dei tiragraffi" });
    }
};

export const setCuccieLettinoGatto = (CuccieLettinoGatto) => ({
    type: ActionTypes.SET_CUCCIELETTINI_GATTO,
    payload: CuccieLettinoGatto
});

export const getCuccieELettini = (token) => async (dispatch) => {
    const URLCuccieLettiniGatto = "http://localhost:3001/prodotti/cuccie-lettini-gatto";
    try {
        const response = await fetch(URLCuccieLettiniGatto, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        if (response.ok) {
            const data = await response.json();
            dispatch(setCuccieLettinoGatto(data));
            console.log("Dati ricevuti:", data);
            return data;
        } else {
            const errorMessage = await response.text();
            if (response.status === 401) {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
            } else {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati dei tiragraffi" });
            }
            throw new Error(errorMessage || "Errore durante la richiesta dei dati dei tiragraffi");
        }
    } catch (error) {
        console.error("Errore:", error);
        // Invia un'azione di errore al reducer
        dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dati dei tiragraffi" });
    }
};

export const setCiotoleGatto = (ciotoleGatto) => ({
    type: ActionTypes.SET_CIOTOLE_GATTO,
    payload: ciotoleGatto
});

export const setGabbieUccelli = (gabbie) => ({
    type: ActionTypes.SET_GABBIE_UCCELLI,
    payload: gabbie
});

export const getCiotoleGatto = (token) => async (dispatch) => {
    const URLgatto = "http://localhost:3001/prodotti/ciotole-gatto";
    try {
        const response = await fetch(URLgatto, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        if (response.ok) {
            const data = await response.json();
            dispatch(setCiotoleGatto(data));
            console.log("Dati ricevuti:", data);
            return data;
        } else {
            const errorMessage = await response.text();
            if (response.status === 401) {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
            } else {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati dei tiragraffi" });
            }
            throw new Error(errorMessage || "Errore durante la richiesta dei dati dei tiragraffi");
        }
    } catch (error) {
        console.error("Errore:", error);
        // Invia un'azione di errore al reducer
        dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dati dei tiragraffi" });
    }
};

export const getGabbieUccelli = (token) => async (dispatch) => {
    const URLGuinzagli = "http://localhost:3001/prodotti/prodotti-gabbie-uccelli";
    try {
        const response = await fetch(URLGuinzagli, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        if (response.ok) {
            const data = await response.json();
            dispatch(setGabbieUccelli(data));
            console.log("Dati ricevuti:", data);
            return data;
        } else {
            const errorMessage = await response.text();
            if (response.status === 401) {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
            } else {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati dei tiragraffi" });
            }
            throw new Error(errorMessage || "Errore durante la richiesta dei dati dei tiragraffi");
        }
    } catch (error) {
        console.error("Errore:", error);
        // Invia un'azione di errore al reducer
        dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dati dei tiragraffi" });
    }
};

export const setGuinzagli = (guinzagli) => ({
    type: ActionTypes.SET_GUINZAGLIO,
    payload: guinzagli
});
export const getGuinzagli = (token) => async (dispatch) => {
    const URLGuinzagli = "http://localhost:3001/prodotti/prodotti-cane-guinzagli";
    try {
        const response = await fetch(URLGuinzagli, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        if (response.ok) {
            const data = await response.json();
            dispatch(setGuinzagli(data));
            console.log("Dati ricevuti:", data);
            return data;
        } else {
            const errorMessage = await response.text();
            if (response.status === 401) {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
            } else {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati dei tiragraffi" });
            }
            throw new Error(errorMessage || "Errore durante la richiesta dei dati dei tiragraffi");
        }
    } catch (error) {
        console.error("Errore:", error);
        // Invia un'azione di errore al reducer
        dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dati dei tiragraffi" });
    }
};

export const setError = (errorMessage) => ({
    type: ActionTypes.SET_ERROR,
    payload: errorMessage
});


export const logoutUtente = () => ({
    type: ActionTypes.LOGOUT_UTENTE
});

export const setUtenteToken = (token) => ({
    type: ActionTypes.SET_UTENTE_TOKEN,
    payload: token
});
//2)
export const setGattoTiragraffi = (tiragraffi) => ({
    type: ActionTypes.SET_GATTO_TIRAGRAFFI,
    payload: tiragraffi
});




export const login = (body) => {
    return async (dispatch) => {
        const URL = "http://localhost:3001/auth/login"
        try {
            const res = await fetch(URL, {
                method: "POST",
                body: JSON.stringify(body),
                headers: { "Content-Type": "application/json" }
            });
            if (res.ok) {
                const data = await res.json()
                dispatch({
                    type: LOGIN,
                    payload: data.token,
                });
                console.log(data)
                localStorage.setItem("token", data.token)
            } else {
                throw new Error("Something went wrong.");
            }
        } catch (error) {
            console.log(error);
        }
    };
};
//3)
export const getGattoTiragraffio = (token) => async (dispatch) => {
    const URL = "http://localhost:3001/prodotti/prodotti-gatto-tiragraffi";
    try {
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        if (response.ok) {
            const data = await response.json();
            dispatch(setGattoTiragraffi(data));
            console.log("Dati ricevuti:", data);
            return data;
        } else {
            const errorMessage = await response.text();
            if (response.status === 401) {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
            } else {
                // Invia un'azione di errore al reducer
                dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati dei tiragraffi" });
            }
            throw new Error(errorMessage || "Errore durante la richiesta dei dati dei tiragraffi");
        }
    } catch (error) {
        console.error("Errore:", error);
        // Invia un'azione di errore al reducer
        dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dati dei tiragraffi" });
    }

};

