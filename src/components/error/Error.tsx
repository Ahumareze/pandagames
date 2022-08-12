import React, { FC } from 'react';

//types
import { ErrorProps } from '../../types';

//styles
import classes from './error.module.css';

//image
import amongus from '../../assets/images/amongus.png'

const Error:FC<ErrorProps> = ({details}):JSX.Element => {
    return (
        <div className={classes.container}>
            
        </div>
    );
}

export default Error;