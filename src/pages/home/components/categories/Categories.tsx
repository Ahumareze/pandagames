import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Game } from '../../../../components';

//styles
import classes from './categories.module.css';

function Categories() {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <p className={classes.title}>Trending 🔥</p>
                <div className={classes.showAll}>
                    <div>
                        <p>Show all</p>
                        <FiChevronRight size={18} />
                    </div>
                </div>
            </div>

            <div className={classes.gamesContainer}>
                <Game />
                <Game />
                <Game />
                <Game />
            </div>
        </div>
    );
}

export default Categories;