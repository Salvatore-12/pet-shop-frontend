import { ActionTypes,LOGIN } from "./action";

const initialstate = {
    token: localStorage.getItem("token") || null,
    tiragraffiGatto: null,
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
