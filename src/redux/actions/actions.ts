//components
import * as actionTypes from './actionTypes';
import axios from 'axios';

//utilities
import games from "../../assets/data/games";
import backendLink from '../../utilities/backendLink';

export const fetchCollections = () => {
    return (dispatch: any) => {
        dispatch(setLoading(true));
        axios.get(backendLink + '/collections').then(r => {
            dispatch(setLoading(false));
            dispatch(setCollections(r.data));
        }).catch(e => {
            dispatch(setLoading(false));
            dispatch(setFetchError(true));
        })
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