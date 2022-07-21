import React from 'react';

//styles
import classes from './game.module.css';

//devImages
import freefire from '../../assets/devImages/games/freefire.jpeg';

function Game() {
    return (
        <div className={classes.container}>
            <img className={classes.mainImage} src={freefire} />
            <h4>Free Fire 2</h4>
            <div className={classes.extraTags}>

            </div>
        </div>
    );
}

export default Game;