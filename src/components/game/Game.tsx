import React, { FC } from 'react';

//styles
import classes from './game.module.css';

//types
import { GameProps } from '../../types';


//icons
import ps4 from '../../assets/icons/ps4.png';
import macos from '../../assets/icons/macos.png';
import windows from '../../assets/icons/windows.png';


const Game:FC<GameProps> = ({title, image, price}):JSX.Element => {
    return (
        <div className={classes.container}>
            <img className={classes.mainImage} src={image} />
            <h4>{title}</h4>
            <div className={classes.extraTags}>
                <div className={classes.price}>${(price).toFixed(2)}</div>
                <div className={classes.platforms}>
                    <img src={ps4} />
                    <img src={macos} />
                    <img src={windows} />
                </div>
            </div>
        </div>
    );
}

export default Game;