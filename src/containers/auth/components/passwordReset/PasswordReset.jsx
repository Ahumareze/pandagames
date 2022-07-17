import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

//styles
import classes from '../../auth.module.css';
import Input from '../inputs/Input';
import * as actions from '../../../../redux/actions';

function PasswordReset({back}) {
    const dispatch = useDispatch();
    const [email, setEmail] = useState();

    const resetPassword = () => {
        dispatch(actions.resetPassword(email));
    }

    return (
        <div className={classes.formContainer}>
            <h2>Reset Password</h2>
            <p className={classes.intro}>Enter email to reset password</p>
            <div className={classes.mainFormContainer}>
                <Input title={'Email'} onChange={(e) => setEmail(e)} />
                <button className={classes.authButton} onClick={resetPassword}>Reset Password</button>
                <p className={classes.extraLink2} onClick={back}>Back to login</p>
            </div>
        </div>
    );
}

export default PasswordReset;