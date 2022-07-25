import React, { FC } from 'react';

//types
import { ButtonProps } from '../../types';

//styles
import classes from './buttons.module.css';

const PrimaryButton:FC<ButtonProps> = ({title, onClick}):JSX.Element => {
    return (
        <div className={classes.pContainer} onClick={onClick}>
            {title}
        </div>
    );
}

const SecondaryButton:FC<ButtonProps> = ({title, onClick}):JSX.Element => {
    return(
        <div className={classes.sContainer} onClick={onClick}>
            {title}
        </div>
    )
}

export {
    PrimaryButton,
    SecondaryButton
}