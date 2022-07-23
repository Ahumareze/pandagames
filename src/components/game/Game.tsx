import React, { FC } from 'react';

//styles
import classes from './game.module.css';

//types
import { GameProps } from '../../types';


//icons
import ps4 from '../../assets/icons/ps4.png';
import macos from '../../assets/icons/macos.png';
import windows from '../../assets/icons/windows.png';
import { useNavigate } from 'react-router-dom';


const Game:FC<GameProps> = ({title, image, price, id}):JSX.Element => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/games/' + id)
    }

    return (
        <div className={classes.container} onClick={() => handleNavigate()}>
            <img className={classes.mainImage} src={image} alt='' />
            <h4>{title}</h4>
            <div className={classes.extraTags}>
                <div className={classes.price}>${(price).toFixed(2)}</div>
                <div className={classes.platforms}>
                    <img src={ps4} alt='' />
                    <img src={macos} alt='' />
                    <img src={windows} alt='' />
                </div>
            </div>
        </div>
    );
}

export default Game;