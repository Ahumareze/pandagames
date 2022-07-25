import React from 'react';

//styles
import classes from './Item.module.css';

//images
import banner from '../../../../assets/devImages/games/genshin.jpg';

function Item() {
    return (
        <div className={classes.container}>
            <img className={classes.mainImage} src={banner}/>
            <div className={classes.details}>

            </div>
        </div>
    );
}

export default Item;