import { ActionTypes, LOGIN } from "./action";

const initialstate = {
    token: localStorage.getItem("token") || null,
    tiragraffiGatto: null,
    ciotoleGatto: null,
    cuccieLettiniGatto: null,
    crocchetteGatto: null,
    ciboUmidoGatto:null,
    giochiGatto: null,
    guinzagli: null,
    ciotoleCane:null,
    crocchetteCane:null,
    ciboUmidoCane:null,
    giochiCane:null,
    cuccieCane:null,
    abbigliamentoCane:null,
    gabbieUccelli: null,
    accessoriGabbieUccelli:null,
    mangimeUccelli:null,
    carrello: [],
    ordine: {},
    error: null,
    loadingAggiungiAlCarrello: true,
    errorAggiungiAlCarrello: null,
    utimoOrdine:null


};
console.log(initialstate);
const reducer = (state = initialstate, action) => {
    switch (action.type) {

        case ActionTypes.AGGIUNGI_ALCARRELLO:
            return {
                ...state,
                carrello: [...state.carrello, action.payload]

            };

        case ActionTypes.RIMUOVI_DAL_CARRELLO:
            return {
              ...state,
              carrello: state.carrello.filter(
                (prodotto) => prodotto.idProdotto !== action.payload
              ),
            };      
        case ActionTypes.ACCESSORI_GABBIE_UCCELLI:
            return {
                ...state,
                accessoriGabbieUccelli: action.payload,
            };

        case ActionTypes.MANGIME_UCCELLI:
            return {
                ...state,
                mangimeUccelli: action.payload,
            };

        case ActionTypes.SET_GIOCHI_GATTO:
            return {
                ...state,
                giochiGatto: action.payload,
            };

        case ActionTypes.SET_CIBOUMIDO_GATTO:
            return {
                ...state,
                ciboUmidoGatto: action.payload,
            };
            
        case ActionTypes.ABBIGLIAMENTO_CANE:
            return {
                ...state,
                abbigliamentoCane: action.payload,
            };

        case ActionTypes.CUCCIE_CANE:
            return {
                ...state,
                cuccieCane: action.payload,
            };

        case ActionTypes.SET_GIOCHI_CANE:
            return {
                ...state,
                giochiCane: action.payload,
            };

        case ActionTypes.SET_CIBO_UMIDO_CANE:
            return {
                ...state,
                ciboUmidoCane: action.payload,
            };

        case ActionTypes.SET_CROCCHETTE_CANE:
            return {
                ...state,
                crocchetteCane: action.payload,
            };

        case ActionTypes.SET_CIOTOLE_CANE:
            return {
                ...state,
                ciotoleCane: action.payload,
            };

        case ActionTypes.SVUOTA_CARRELLO:
            return {
                ...state,
                carrello: []
            };

        case ActionTypes.AGGIUNGI_ULTIMO_ORDINE:
            return {
                ...state,
                ultimoOrdine: action.payload
            };

        case ActionTypes.SET_ORDINE:
            console.log('Dati ordine ricevuti:', action.payload)
            return {
                ...state,
                ordine: action.payload
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
