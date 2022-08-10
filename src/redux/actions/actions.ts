//components
import * as actionTypes from './actionTypes';
import axios from 'axios';

//utilities
import backendLink from '../../utilities/backendLink';
import { cartName } from '../../utilities/localNames';
import { GameProps } from '../../types';

export const fetchCollections = () => {
    return (dispatch: (e: object) => void) => {

        dispatch(setLoading(true));

        axios.get(backendLink + '/collections').then(r => {
            dispatch(setLoading(false));
            dispatch(setCollections(r.data));
        }).catch(e => {
            dispatch(setLoading(false));
            dispatch(setFetchError(true));
        })
    }
};

export const fetchCollection = (category: string) => {
    return (dispatch: (e: object) => void) => {

        dispatch(setLoading(true))

        axios.post(backendLink + '/collection', {category}).then(r => {
            dispatch(setLoading(false))
            dispatch(setCollection(r.data));
            console.log(r.data)
        }).catch(e => {
            console.log(e);
            dispatch(setLoading(false))
        });

    }
};

export const fetchSelected = (id: string) => {
    return(dispatch: (e: object) => void) => {

        dispatch(setLoading(true));

        axios.post(backendLink + '/selected', {id}).then(r => {
            dispatch(setGame(r.data));
            console.log(r.data)
            dispatch(setLoading(false));
        }).catch(e => {
            console.log(e.response)
            dispatch(setLoading(false));
        })

    }
};

export const fetchGames = () => {
    return(dispatch: (e: object) => void) => {
        dispatch(setLoading(true));

        axios.get(backendLink + '/games').then(r => {
            dispatch(setLoading(false));
            console.log(r.data)
        }).catch(e => {
            dispatch(setLoading(false));
            console.log(e)
        })
    }
};

const setGames = (value: Array<object>) => {
    return{
        type: actionTypes.SETGAMES,
        value
    }
}


export const addToCart = (item: object) => {
    return (dispatch: (e: object) => void) => {
        const localData = localStorage.getItem(cartName);
        let arr = [];
        if(localData){
            const parsedData = JSON.parse(localData);
            parsedData.push(item);
            dispatch(setCartData(parsedData));
            localStorage.setItem(cartName, JSON.stringify(parsedData));
        }else{
            arr.push(item);
            dispatch(setCartData(arr));
            localStorage.setItem(cartName, JSON.stringify(arr));
        }
    }
};

export const fetchCartData = () => {
    return (dispatch: (e: object) => void) => {
        const localData = localStorage.getItem(cartName);
        if(localData){
            dispatch(setCartData(JSON.parse(localData)))
        }
    }
};

export const removeItem = (id: number) => {
    return (dispatch: (e: object) => void) => {
        const localData = localStorage.getItem(cartName);
        if(localData){
            let parsedData = JSON.parse(localData);
            parsedData.splice(id, 1);
            dispatch(setCartData(parsedData));
            localStorage.setItem(cartName, JSON.stringify(parsedData));
        }
    }
};

const setCollection = (value: Array<GameProps>) => {
    return {
        type: actionTypes.SETCOLLECTION,
        value
    }
}

export const openSideBar = (value: boolean) => {
    return{
        type: actionTypes.OPENSIDEBAR,
        value
    }
}

const setCartData = (value: Array<object>) => {
    return{
        type: actionTypes.SETCARTDATA,
        value
    }
}

const setLoading = (value: boolean) => {
    return{
        type: actionTypes.SETLOADING,
        value
    }
};

const setCollections = (value: any) => {
    return{
        type: actionTypes.SETCOLLECTIONS,
        value
    }
};

const setFetchError = (value: any) => {
    return{
        type: actionTypes.SETFETCHERROR,
        value
    }
}

const setGame = (value: any) => {
    return{
        type: actionTypes.SETGAME,
        value
    }
}