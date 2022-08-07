import React from 'react';

//styles
import classes from '../header.module.css';

//icons
import {FiSearch} from 'react-icons/fi';

function Searchbar() {
    return (
        <div className={classes.searhBar}>
            <div className={classes.mainSearchContainer}>
                <input placeholder='Search games...' />
            </div>
            <div className={classes.searchButton}>
                <FiSearch size={18} />
            </div>
        </div>
    );
}

export default Searchbar;