import React from 'react';

//styles
import classes from '../../auth.module.css';

import {BiMessageError} from 'react-icons/bi'
import { Button } from '../../../../components';

function ErrorScreen({message, close}) {
    return (
        <div className={classes.modalBackground}>
            <div className={classes.errorScreenMain}>
                <div className={classes.errorIcon}>
                    <BiMessageError />
                </div>
                <h3>Authentication Error</h3>
                <p>Message: {message}</p>
                <Button name={'Try Again'} onClick={close} />
            </div>
        </div>
    );
}

export default ErrorScreen;