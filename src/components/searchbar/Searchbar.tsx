import React from 'react';

//styles
import classes from '../header/header.module.css';

//icons
import {FiSearch} from 'react-icons/fi';

function Searchbar() {
    return (
        <div className={classes.searhBar}>
            <input placeholder='Search games...' />
            <div className={classes.searchButton}>
                <FiSearch size={18} />
            </div>
        </div>
    );
}

export default Searchbar;