import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    collections: null,
    fetchError: false,
    selectedGame: null,
    cartData: null
};

export type IRootState = ReturnType<typeof reducer>;

const reducer = (state = initialState, action: any) =>{
    switch(action.type){
        case(actionTypes.SETLOADING):
            return {...state, loading: action.value};
        case(actionTypes.SETCOLLECTIONS):
            return {...state, collections: action.value};
        case(actionTypes.SETFETCHERROR):
            return {...state, fetchError: action.value};
        case(actionTypes.SETGAME):
            return {...state, selectedGame: action.value};
        case(actionTypes.SETCARTDATA):
            return {...state, cartData: action.value}
    }
    return state;
};

export default reducer