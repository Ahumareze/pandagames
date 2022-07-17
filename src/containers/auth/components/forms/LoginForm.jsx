import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

//styles
import classes from '../../auth.module.css';

//comonents
import Input from '../inputs/Input';
import PasswordInput from '../inputs/PasswordInput';

import { login } from '../../../../redux/actions';

function LoginForm({toggle, resetPass}) {
    //init
    const dispatch = useDispatch();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const onLogin = () => {
        dispatch(login(email, password))
    };

    return (
        <div className={classes.formContainer}>
            <h2>Login</h2>
            <p className={classes.intro}>Login to your Apexcorp account to continue</p>
            <div className={classes.mainFormContainer}>
                <Input title={'Email'} onChange={(e) => setEmail(e)} />
                <PasswordInput onChange={(e) => setPassword(e)} />
                <button className={classes.authButton} onClick={onLogin}>Login to account</button>
                <p className={classes.forgotPassword} onClick={resetPass}>Forgot password?</p>
                <p className={classes.extraLink} onClick={toggle}>Sign up instead</p>
            </div>
        </div>
    );
}

export default LoginForm;