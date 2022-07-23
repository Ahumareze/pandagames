import React from 'react';

//icons
import { FiChevronRight } from 'react-icons/fi';

//components
import { Game } from '../../../../components';

//styles
import classes from './categories.module.css';

//data
import games from '../../../../assets/data/games';


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
                {games.map((i, idx) => (
                    <Game
                        title={i.title}
                        image={i.image}
                        price={i.price}
                        key={idx}
                        id={i.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default Categories;