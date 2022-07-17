import React from 'react';

//styles
import classes from '../../auth.module.css';

function Input({title, onChange}) {
    return (
        <div className={classes.inputItem}>
            <p>{title}</p>
            <input onChange={(e) => onChange(e.target.value)} />
        </div>
    );
}

export default Input;