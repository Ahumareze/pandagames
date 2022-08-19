//components
import * as actionTypes from './actionTypes';
import axios from 'axios';

//utilities
import backendLink from '../../utilities/backendLink';
import { cartName } from '../../utilities/localNames';
import { GameProps } from '../../types';

export const fetchHomeData = () => {
    return (dispatch: (e: object) => void) => {

        dispatch(setLoading(true));
        dispatch(setErrorMessage(false));

        axios.get(backendLink + '/home').then(r => {
            let newArr: any[] = [];
            let recomendedArr: any[] = [];

            r.data.new.map((i: Array<object>) => newArr.unshift(i));

            const data = {
                ...r.data,
                new: newArr,
            }


            dispatch(setLoading(false));
            dispatch(setHomeData(data));
        }).catch(e => {
            dispatch(setLoading(false));
            dispatch(setErrorMessage(true));
        })
    }
}

export const fetchCollections = () => {
    return (dispatch: (e: object) => void) => {

        dispatch(setLoading(true));
        dispatch(setErrorMessage(false));

        axios.get(backendLink + '/collections').then(r => {
            dispatch(setLoading(false));
            dispatch(setCollections(r.data));
        }).catch(e => {
            dispatch(setLoading(false));
            dispatch(setErrorMessage(true));
        })
    }
};

export const fetchCollection = (category: string) => {
    return (dispatch: (e: object) => void) => {

        dispatch(setLoading(true));
        dispatch(setErrorMessage(false));

        axios.post(backendLink + '/collection', {category}).then(r => {
            dispatch(setLoading(false))
            dispatch(setCollection(r.data));
        }).catch(e => {
            dispatch(setLoading(false));
            dispatch(setErrorMessage(true));
        });

    }
};

export const fetchSelected = (id: string) => {
    return(dispatch: (e: object) => void) => {

        dispatch(setLoading(true));

        axios.post(backendLink + '/selected', {id}).then(r => {
            dispatch(setGame(r.data));
            dispatch(setLoading(false));
        }).catch(e => {
            dispatch(setLoading(false));
        })

    }
};

export const fetchGames = () => {
    return(dispatch: (e: object) => void) => {
        dispatch(setLoading(true));
        dispatch(setErrorMessage(false));

        axios.get(backendLink + '/games').then(r => {
            let arr: string[] = [];
            
            r.data.map((i: any) => {
                arr.push(i.name);
                return null
            });

            dispatch(setLoading(false));
            dispatch(setGames(r.data.splice(0, 8)));
            dispatch(setSearchData(arr));
            
        }).catch(e => {
            dispatch(setLoading(false));
            dispatch(setErrorMessage(true));
        })
    }
};

export const searchGames = (name: string) => {
    return(dispatch: (e: object) => void) => {
        dispatch(setLoading(true));

        axios.post(backendLink + '/search', {name}).then(r => {
            dispatch(setGames(r.data));
            dispatch(setLoading(false))
        }).catch(e => {
            dispatch(setLoading(false));
        })
    }
};

const setHomeData = (value: Array<object>) => {
    return{
        type: actionTypes.SETHOMEDATA,
        value
    }
}

const setSearchData = (value: Array<string>) => {
    return{
        type: actionTypes.SETSEARCHDATA,
        value
    }
}

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
            dispatch(setCartData(JSON.parse(localData)));
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

const setCollections = (value: Array<object>) => {
    return{
        type: actionTypes.SETCOLLECTIONS,
        value
    }
};

const setErrorMessage = (value: boolean) => {
    return{
        type: actionTypes.SETERRORMESSAGE,
        value
    }
}

const setGame = (value: any) => {
    return{
        type: actionTypes.SETGAME,
        value
    }
}