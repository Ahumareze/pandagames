import * as actionTypes from './actionTypes';
import { database, signin, signup, verificationEmail, resetLink, referrals } from '../../utilities/links';
import axios from 'axios';

const init = () => {
    return dispatch => {
        const id =  localStorage.getItem('@apexId');
        if(id){
            dispatch(setToken(id))
        }
    }
};

const register = (fullname, country, email, password, refCode) => {
    return dispatch => {
        dispatch(setLoader(true));
        axios.post(signup, {email, password})
            .then(r => {
                dispatch(postUserData(fullname, email, country, r.data.idToken, r.data.localId, refCode))
            })
            .catch(e => {
                dispatch(setLoader(false));
                if(e.response){
                    dispatch(setErrorMessage(e.response.data.error.message))
                }else{
                    dispatch(setErrorMessage('Network Error'))
            }
        })
    }
};

const login = (email, password) => {
    return dispatch => {
        dispatch(setLoader(true))
        axios.post(signin, {email, password}).then(r => {
            localStorage.setItem('@apexId', r.data.localId);
            dispatch(setToken(r.data.localId));
            dispatch(setLoader(false));
        }).catch(e => {
            dispatch(setLoader(false))
            if(e.response){
                dispatch(setErrorMessage(e.response.data.error.message))
            }else{
                dispatch(setErrorMessage('Network Error'))
            }
        })
    }
};


const postUserData = (fullname, email, country, idToken, id, refCode) => {

    const data = {
        fullname,
        email,
        country,
        image: 'https://res.cloudinary.com/ahumareze/image/upload/v1656313832/Group_88_2_yns8lv.png',
        id,
        balance: 0,
        withdraw: 0,
        deposit: 0,
        roi: 0,
        transactions: []
    }

    return dispatch => {
        axios.post(database, data)
            .then(r => {
                dispatch(sendVerifyEmail(email, idToken));
                console.log(r.data)
            }).catch(e => {
                dispatch(setLoader(false));
                if(e.response){
                    dispatch(setErrorMessage(e.response.data.error.message))
                }else{
                    dispatch(setErrorMessage('Network Error'))
                }
        });

        axios.post(referrals, {fullname, refCode}).then(r => {
            console.log(r.data)
        }).catch(e => {
            console.log(e)
        })
    }
};

const sendVerifyEmail = (email, id) => {
    const emailData = {
        requestType: 'VERIFY_EMAIL',
        idToken: id
    }
    return dispatch => {
        axios.post(verificationEmail, emailData).then(r => {
            dispatch(setLoader(false));
            dispatch(setVerifyScreen(r.data.email));
            console.log(r.data.email)
        }).catch(e => {
            console.log(e.response);
            dispatch(setLoader(false))
        })
    }
};

const updateProfile = (img, key, userData) => {
    return dispatch => {

        dispatch(setLoader(true))

        const formData = new FormData()
        formData.append('file', img);
        formData.append('upload_preset', 'kqiuojxc');

        axios.post('https://api.cloudinary.com/v1_1/ahumareze/image/upload', formData).then(r => {
            dispatch(updateMainProfile(r.data.url, key, userData));
        }).catch(e => {
            console.log(e);
            dispatch(setLoader(false))
        })
    }
}

const updateMainProfile = (url, key, userData) => {
    const data = {
        ...userData,
        image: url
    };

    return dispatch => {
        axios.put('https://apexcorpinvestment-default-rtdb.firebaseio.com/users/' + key + '.json', data).then(r => {
            dispatch(setLoader(false));
            console.log(r.data);
            window.location.reload()
        }).catch(e => {
            console.log(e);
            dispatch(setLoader(false))
        })
    }
};

const deposit = (data, userData) => {
    return dispatch => {
        dispatch(setLoader(true));
        
        let transactions = [];
        if(userData.transactions){
            transactions = [
                ...userData.transactions,
                data
            ];
        }else{
            transactions = [
                data
            ];
        };

        const mainData = {
            ...userData,
            transactions
        }
        
        axios.put('https://apexcorpinvestment-default-rtdb.firebaseio.com/users/' + userData.key + '.json', mainData).then(r => {
            console.log(r.data);
            dispatch(setLoader(false));
            dispatch(setSuccess(true))
            dispatch(setUserData(r.data));
        }).catch(e => {
            console.log(e);
            dispatch(setLoader(false))
        })
    }
}

const resetPassword = (email) => {
    
    return dispatch => {
        dispatch(setLoader(true));

        const data = {
            requestType: 'PASSWORD_RESET',
            email: email
        }
        
        axios.post(resetLink, data).then(r => {
            dispatch(setLoader(false));
            dispatch(setResetModal(email))
        }).catch(e => {
            dispatch(setLoader(false));
            if(e.response){
                dispatch(setErrorMessage(e.response.data.error.message))
            }else{
                dispatch(setErrorMessage('Network Error'))
            }
        })
    }
};

const fetchReferalls = (refCode) => {
    return dispatch => {
        axios.get(referrals).then(r => {
            let arr = [];
            Object.keys(r.data).map(i => {
                if(r.data[i].refCode === refCode){
                    arr.push(r.data[i])
                }
            });
            dispatch(setReferalls(arr))
        }).catch(e => {
            console.log(e)
        })
    }
};

const setReferalls = (value) => {
    return{
        type: actionTypes.SETREFERRALS,
        value
    }
}

const setResetModal = (value) => {
    return{
        type: actionTypes.RESETEMAIL,
        value
    }
}

const setSuccess = (value) => {
    return {
        type: actionTypes.SETSUCCESSSCREEN,
        value
    }
}

const logout = () => {
    return dispatch => {
        localStorage.removeItem('@apexId');
        dispatch(setToken(null))
    }
}

const setVerifyScreen = (value) => {
    return {
        type: actionTypes.SETVERIFYSCREEN,
        value
    }
}

const setLoader = (value) => {
    return {
        type: actionTypes.SETLOADING,
        value: value
    }
}

const setToken = (value) => {
    return{
        type: actionTypes.SETTOKEN,
        value
    }
}

const setErrorMessage = (value) => {
    return{
        type: actionTypes.SETERRORMESSAGE,
        value
    }
};

const setUserData = (value) => {
    return{
        type: actionTypes.SETUSERDATA,
        value
    }
}

const fetchData = () => {
    return dispatch => {
        dispatch(setLoader(true))
        const id = localStorage.getItem('@apexId');
        if(id){
            axios.get(database).then(r => {
                const users = r.data;
                Object.keys(users).map(i => {
                    if(users[i].id === id){
                        dispatch(setLoader(false));
                        dispatch(setUserData({...users[i], key: i}));
                    }
                    return null
                })
            }).catch(e => {
                console.log(e);
                dispatch(setLoader(false));
            })
        }
        
    }
}

export {
    init,
    register,
    login,
    setVerifyScreen,
    setErrorMessage,
    fetchData,
    logout,
    updateProfile,
    deposit,
    setSuccess,
    resetPassword,
    setResetModal,
    fetchReferalls
}