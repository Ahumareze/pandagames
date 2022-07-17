import React, {useState} from 'react';

//styles
import classes from './auth.module.css';

//compoennts
import { Header, Loader } from '../../components';
import LoginForm from './components/forms/LoginForm';
import SignupForm from './components/forms/SignupForm';
import { useSelector, useDispatch } from 'react-redux';
import VerifyEmail from './components/modals/verifyEmail';
import * as actions from '../../redux/actions';
import ErrorScreen from './components/modals/ErrorScreen';
import Animation from './components/animation/Animation';
import PasswordReset from './components/passwordReset/PasswordReset';
import ResetModal from './components/passwordReset/ResetModal';

function Auth(props) {
    //init
    const dispatch = useDispatch();

    //local state
    const [isLogin, setIsLogin] = useState(false);
    const [resetPass, setResetPass] = useState(false);

    //redux state
    const isLoading = useSelector(state => state.loading);
    const verifyScreen = useSelector(state => state.verifyScreen);
    const errorMessage = useSelector(state => state.errorMessage);
    const resetEmail = useSelector(state => state.resetEmail);

    const closeVerifyModal = () => {
        dispatch(actions.setVerifyScreen(null));
        setIsLogin(true)
    };

    let form = <SignupForm toggle={() => setIsLogin(true)}/>;
    if(isLogin){
        form = <LoginForm toggle={() => setIsLogin(false)} resetPass={() => setResetPass(true)} />
    }

    return (
        <div className={classes.authPage}>
            <Header active={isLogin ? 'Login' : 'Register'} toggle={(e) => setIsLogin(e)} />
            <div className={classes.container}>
                {resetPass ? <PasswordReset back={() => setResetPass(false)} /> : form}
                <div className={classes.animationDiv}>
                    <Animation />
                </div>
            </div>
            {isLoading && <Loader />}
            {verifyScreen && <VerifyEmail email={verifyScreen} onClick={closeVerifyModal} />}
            {errorMessage && <ErrorScreen message={errorMessage} close={() => dispatch(actions.setErrorMessage(null))} />}
            {resetEmail && <ResetModal email={resetEmail} onClick={() => dispatch(actions.setResetModal(null))} /> }
        </div>
    );
}

export default Auth;