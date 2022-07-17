import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    loading: false,
    verifyScreen: null,
    errorMessage: null,
    userData: null,
    success: false,
    resetEmail: null,
    referrals: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.SETTOKEN):
            return {...state, token: action.value};
        case(actionTypes.SETLOADING):
            return {...state, loading: action.value};
        case(actionTypes.SETVERIFYSCREEN):
            return {...state, verifyScreen: action.value};
        case(actionTypes.SETERRORMESSAGE):
            return {...state, errorMessage: action.value};
        case(actionTypes.SETUSERDATA):
            return {...state, userData: action.value};
        case(actionTypes.SETSUCCESSSCREEN):
            return {...state, success: action.value};
        case(actionTypes.RESETEMAIL):
            return {...state, resetEmail: action.value};
        case(actionTypes.SETREFERRALS):
            return {...state, referrals: action.value};
    }
    return state
};

export default reducer