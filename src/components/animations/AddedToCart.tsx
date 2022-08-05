import React, { FC } from 'react';

//styles
import classes from './animations.module.css';

//components
import { PrimaryButton, SecondaryButton } from '../buttons/Button';
// import Lottie from 'react-lottie';

//types
import { AddedToCartProps } from '../../types';
import { useNavigate } from 'react-router-dom';

//animations
// import doneAnimation from '../../assets/lotties/lf30_editor_6sn3wk1s.json';

const AddedToCart:FC<AddedToCartProps> = ({game, price, onClose}) => {
    //intialize
    const navigate = useNavigate();

    return (
        <div className={classes.addedToCartContainer}>
            <div className={classes.mainItem}>
                <h3>Game added to cart</h3>
                <p className={classes.details}>Your game - {game} at the price of N{(price).toLocaleString()} has been successfully added to cart</p>
                <div className={classes.actionButtons}>
                    <SecondaryButton title={'Close'} onClick={onClose} />
                    <PrimaryButton title={'view Cart'} onClick={() => navigate('/cart')}/>
                </div>
            </div>
        </div>
    );
}

export default AddedToCart;