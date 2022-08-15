import React, { FC } from 'react';

//styles
import classes from './Item.module.css';

//types
import { CartItemProps } from '../../../../types';

//icons
import { FiX } from 'react-icons/fi';

//component
import { useNavigate } from 'react-router-dom';


const Item:FC<CartItemProps> = ({title, image, price, id, onDelete, prices}):JSX.Element => {
    //initialize
    const navigate = useNavigate();
    
    const handleNavigate = () => {
        navigate('/games/' + id)
    };

    return (
        <div className={classes.container}>
            <img className={classes.mainImage} src={image} alt=''/>

            <div className={classes.details}>
                <div>
                    <h3 onClick={handleNavigate}>{title}</h3>
                    <p>N{price.toLocaleString()}</p>
                </div>
                <div className={classes.platforms}>
                    {prices.map(i => (
                        <p>{i.name}</p>
                    ))}
                </div>
            </div>

            <div className={classes.delete} onClick={onDelete}>
                <FiX />
            </div>
        </div>
    );
}

export default Item;