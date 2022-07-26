import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    cart: null
};

export type IRootState = ReturnType<typeof reducer>;

const reducer = (state = initialState, action: any) =>{
    switch(action.type){
        case(actionTypes.SETLOADING):
            return {...state, loading: action.value}
    }
    return state;
};

export default reducer