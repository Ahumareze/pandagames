import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    selectedGame: null
};

export type IRootState = ReturnType<typeof reducer>;

const reducer = (state = initialState, action: any) =>{
    switch(action.type){
        case(actionTypes.SETLOADING):
            return {...state, loading: action.value};
        case(actionTypes.SETGAME):
            return {...state, selectedGame: action.value};
    }
    return state;
};

export default reducer