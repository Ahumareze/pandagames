import React from 'react';
import { Button } from '../../../../components';

//styles
import classes from '../../auth.module.css';

function VerifyEmail({email, onClick}) {
    return (
        <div className={classes.modalBackground}>
            <div className={classes.modalMain}>
                <div className={classes.mainModalHeader}>
                    <h3>Verify Email</h3>
                </div>
                <p className={classes.verifyemailcontent}>A verification email was sent to <span>{email}</span>. Verify email to continue  </p>
                <p className={classes.verifyemailcontent} style={{opacity: 0.5}}>Can't find email? Check your spam folder</p>
                <Button name={'Back To Login'} onClick={onClick}/>
            </div>
        </div>
    );
}

export default VerifyEmail;