import React from 'react';

//styles
import classes from './header.module.css';

function Item({children, name, active, navigate}) {
    return (
        <div className={classes.item} style={active ? {color: '#FCD535', opacity: 1} : {}} onClick={() => navigate()} >
            {children}
            <p>{name}</p>
        </div>
    );
}

export default Item;