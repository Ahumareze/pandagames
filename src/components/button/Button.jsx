import React from 'react';

//styles
import classes from './button.module.css';

function Button({name, onClick}) {
    return (
        <div className={classes.container} onClick={onClick}>
            {name}
        </div>
    );
}

export default Button;