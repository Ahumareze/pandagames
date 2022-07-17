import React from 'react';
import { Button } from '../../../../components';

//styles
import classes from '../../auth.module.css';

function ResetModal({email, onClick}) {
    return (
        <div className={classes.modalBackground}>
            <div className={classes.modalMain}>
                <div className={classes.mainModalHeader}>
                    <h3>Reset Password</h3>
                </div>
                <p className={classes.verifyemailcontent}>A password reset link was sent to your email <span>{email}</span>. Reset Password then login to continue.</p>
                <p className={classes.verifyemailcontent} style={{opacity: 0.5}}>Can't find email? Check your spam folder</p>
                <Button name={'Back To Login'} onClick={onClick}/>
            </div>
        </div>
    );
}

export default ResetModal;