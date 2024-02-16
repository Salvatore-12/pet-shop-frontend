import { ActionTypes,LOGIN } from "./action";

const initialstate = {
    token: localStorage.getItem("token") || null,
    tiragraffiGatto: null,
    ciotoleGatto:null,
    guinzagli:null,
    gabbieUccelli:null,
    error: null

};
console.log(initialstate);
const reducer = (state = initialstate, action) => {
    switch (action.type) {
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
