import React from 'react';

//styles
import classes from '../../auth.module.css';

//icons
import {FiEyeOff, FiEye} from 'react-icons/fi';
import { useState } from 'react';

function PasswordInput({onChange}) {
    const [secure, setSecure] = useState(true);

    let eye = (
        <div className={classes.eyeContainer} onClick={() => setSecure(prev => !prev)}>
            <FiEyeOff />
        </div>
    );
    if(!secure){
        eye = (
            <div className={classes.eyeContainer} onClick={() => setSecure(prev => !prev)}>
                <FiEye />
            </div>
        )
    }

    return (
        <div className={classes.PasswordinputItem}>
            <p>Password</p>
            <div className={classes.passInput}>
                <input type={secure ? 'password' : "false"} onChange={(e) => onChange(e.target.value)} />
                {eye}
            </div>
        </div>
    );
}

export default PasswordInput;