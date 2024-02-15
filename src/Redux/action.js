
export const ActionTypes = {
    //1)
    SET_GATTO_TIRAGRAFFI: "SET_GATTO_TIRAGRAFFI",
    SET_UTENTE_TOKEN: "SET_UTENTE_TOKEN",
    LOGOUT_UTENTE: "LOGOUT_UTENTE",
    SET_ERROR: "SET_ERROR"
   
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


export const LOGIN = "LOGIN"

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

