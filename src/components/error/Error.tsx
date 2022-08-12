import React, { FC } from 'react';

//types
import { ErrorProps } from '../../types';

//styles
import classes from './error.module.css';

//image
import amongus from '../../assets/images/amongus.png'

const Error:FC<ErrorProps> = ({title, details}):JSX.Element => {
    return (
        <div className={classes.container}>
            <img src={amongus} alt='' />
            <h2>{title}</h2>
            <p>{details}</p>
        </div>
    );
}

export default Error;