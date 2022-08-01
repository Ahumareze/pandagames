//components
import * as actionTypes from './actionTypes';
import axios from 'axios';

//utilities
import games from "../../assets/data/games";
import backendLink from '../../utilities/backendLink';
import { cartName } from '../../utilities/localNames';

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

export const addToCart = (item: object) => {
    return (dispatch: (e: object) => void) => {
        const localData = localStorage.getItem(cartName);
        let arr = [];
        if(localData){
            const parsedData = JSON.parse(localData);
            parsedData.push(item);
            localStorage.setItem(cartName, JSON.stringify(parsedData));
        }else{
            arr.push(item);
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

const setCartData = (value: Array<object>) => {
    return{
        type: actionTypes.SETCARTDATA,
        value
    }
}

export const fetchGames = (id: number) => {
    return (dispatch: any) => {
        dispatch(setGame(games[id]))
    }
};

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