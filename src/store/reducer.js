import * as actionTypes from './actions';

const initialState ={
    cuentas:[],
    transferencias:[],
    errores:[],
}

const reducer = ( state = initialState, action) => {

    switch (action.type) {
        case actionTypes.GUARDAR_CUENTAS:
            return{
                ...state,
                errores: action.errores,
                cuentas: action.cuentas
            }
        case actionTypes.GUARDAR_TRANSFERENCIAS:
            return{
                ...state,
                transferencias: action.transferencias,
                errores: action.errores
            }
        default:
            return state;
    }
    return state;

}

export default reducer;