import React from 'react';

//styles
import classes from './header.module.css';

//components
import Searchbar from '../searchbar/Searchbar';

function Header() {
    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <div className={classes.logoContainer}>PandaGames</div>
                <div className={classes.secondContainer}>
                    <Searchbar />
                    <div className={classes.links}>Discover</div>
                    <div className={classes.links}>Cart</div>
                    <div className={classes.links}>Register</div>
                </div>
            </div>
        </div>
    );
}

export default Header;