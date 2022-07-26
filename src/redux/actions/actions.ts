import * as actionTypes from './actionTypes';

import games from "../../assets/data/games";

export const fetchGames = (id: number) => {
    return (dispatch: any) => {
        dispatch(setGame(games[id]))
    }
};

const setGame = (value: any) => {
    return{
        type: actionTypes.SETGAME,
        value
    }
}