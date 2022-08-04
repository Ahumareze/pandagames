import React, { FC } from 'react';

//styles
import classes from './animations.module.css';

//components
import { PrimaryButton, SecondaryButton } from '../buttons/Button';

//types
import { AddedToCartProps } from '../../types';

const AddedToCart:FC<AddedToCartProps> = ({game, price, onClose}) => {
    return (
        <div className={classes.addedToCartContainer}>
            <div className={classes.mainItem}>
                <h3>Game successfuly added to cart</h3>
                <p className={classes.details}>Your game - {game} at the price of N{(price).toLocaleString()} has been successfully added to cart</p>
                <div className={classes.actionButtons}>
                    <SecondaryButton title={'Close'} onClick={onClose} />
                    <PrimaryButton title={'view Cart'} onClick={() => console.log('open cart')}/>
                </div>
            </div>
        </div>
    );
}

export default AddedToCart;