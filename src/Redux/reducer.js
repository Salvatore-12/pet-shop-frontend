import { ActionTypes, LOGIN } from "./action";

const initialstate = {
    token: localStorage.getItem("token") || null,
    tiragraffiGatto: null,
    ciotoleGatto: null,
    cuccieLettiniGatto: null,
    crocchetteGatto: null,
    giochiGatto: null,
    guinzagli: null,
    gabbieUccelli: null,
    carrello: [],
    ordine: {},
    error: null,
    loadingAggiungiAlCarrello: true,
    errorAggiungiAlCarrello: null,


};
console.log(initialstate);
const reducer = (state = initialstate, action) => {
    switch (action.type) {
       

        case ActionTypes.SET_ORDINE:
            console.log('Dati ordine ricevuti:', action.payload)
            return {
                ...state,
                ordine: action.payload
            };
      
        case ActionTypes.AGGIUNGI_ALCARRELLO:
            return {
                ...state,
                carrello: [...state.carrello, action.payload]

            };
        
        case ActionTypes.SET_UTENTE_TOKEN:
            return {
                ...state,
                token: action.payload,
            };
        case ActionTypes.SET_GATTO_TIRAGRAFFI:
            return {
                ...state,
                tiragraffiGatto: action.payload,
            };

        case ActionTypes.SET_CIOTOLE_GATTO:
            return {
                ...state,
                ciotoleGatto: action.payload,
            };

        case ActionTypes.SET_CUCCIELETTINI_GATTO:
            return {
                ...state,
                cuccieLettiniGatto: action.payload,
            };

        case ActionTypes.SET_CROCCHETTE_GATTO:
            return {
                ...state,
                crocchetteGatto: action.payload,
            };

        case ActionTypes.SET_GIOCHI_GATTO:
            return {
                ...state,
                giochiGatto: action.payload,
            };

        case ActionTypes.SET_GUINZAGLIO:
            return {
                ...state,
                guinzagli: action.payload,
            };

        case ActionTypes.SET_GABBIE_UCCELLI:
            return {
                ...state,
                gabbieUccelli: action.payload,
            };

        case ActionTypes.SET_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case LOGIN:
            return {
                ...state,
                token: action.payload,
            };


        default: return state;
    }

}
export default reducer
