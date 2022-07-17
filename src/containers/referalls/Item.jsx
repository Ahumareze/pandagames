import React from 'react';

//styles
import classes from './referalls.module.css';

function Item({fullname}) {
    const profile = fullname.charAt(0, 1)
    return (
        <div className={classes.item}>
            <div className={classes.profile}>{profile}</div>
            <p>{fullname}</p>
        </div>
    );
}

export default Item;