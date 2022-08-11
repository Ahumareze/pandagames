import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    collections: null,
    collection: null,
    games: null,
    fetchError: false,
    selectedGame: null,
    cartData: null,
    openSideBar: false,
    searchData: null,
    homeData: null
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
            return {...state, cartData: action.value};
        case(actionTypes.OPENSIDEBAR):
            return {...state, openSideBar: action.value};
        case(actionTypes.SETCOLLECTION):
            return {...state, collection: action.value};
        case(actionTypes.SETGAMES):
            return {...state, games: action.value};
        case(actionTypes.SETSEARCHDATA):
            return {...state, searchData: action.value};
        case(actionTypes.SETHOMEDATA):
            return {...state, homeData: action.value};

    }
    return state;
};

export default reducer