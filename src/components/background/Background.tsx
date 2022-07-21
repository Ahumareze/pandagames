import React, { FC } from 'react';

//styles
import classes from './background.module.css';

interface backgroundProps{
    children: any
}

const Background:FC<backgroundProps> = ({children}) => {
    return (
        <div className={classes.container}>
            {children}
        </div>
    );
}

export default Background;