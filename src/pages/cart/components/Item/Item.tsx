import React, { FC } from 'react';

//styles
import classes from './Item.module.css';

//types
import { CartItemProps } from '../../../../types';

//images
import banner from '../../../../assets/devImages/games/genshin.jpg';

//icons
import macos from '../../../../assets/icons/macos.png';
import ps4 from '../../../../assets/icons/ps4.png';
import windows from '../../../../assets/icons/windows.png';
import { FiX } from 'react-icons/fi';


const Item:FC<CartItemProps> = ({title, image, price}):JSX.Element => {
    return (
        <div className={classes.container}>
            <img className={classes.mainImage} src={image} alt=''/>

            <div className={classes.details}>
                <div>
                    <h3>{title}</h3>
                    <p>${price.toFixed(2)}</p>
                </div>
                <div className={classes.platforms}>
                    <img alt='' src={ps4} />
                    <img alt='' src={macos} />
                    <img alt='' src={windows} />
                </div>
            </div>

            <div className={classes.delete}>
                <FiX />
            </div>
        </div>
    );
}

export default Item;