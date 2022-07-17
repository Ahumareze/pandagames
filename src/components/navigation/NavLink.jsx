import React from 'react';

//styles
import classes from './navigation.module.css';

function NavLink({children, name, active, onClick}) {
    return (
        <div className={`${classes.navLink} ${active && classes.activeLink}`} onClick={onClick}>
            {children}
            <p>{name}</p>
        </div>
    );
}

export default NavLink;