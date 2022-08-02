import React, { FC } from 'react';

//styles
import classes from './Item.module.css';

//types
import { CartItemProps } from '../../../../types';

//icons
import macos from '../../../../assets/icons/macos.png';
import ps4 from '../../../../assets/icons/ps4.png';
import windows from '../../../../assets/icons/windows.png';
import { FiX } from 'react-icons/fi';

//component
import { useNavigate } from 'react-router-dom';


const Item:FC<CartItemProps> = ({title, image, price, id, onDelete}):JSX.Element => {
    //initialize
    const navigate = useNavigate();
    
    const handleNavigate = () => {
        navigate('/games/' + id)
    }

    return (
        <div className={classes.container}>
            <img className={classes.mainImage} src={image} alt=''/>

            <div className={classes.details}>
                <div>
                    <h3 onClick={handleNavigate}>{title}</h3>
                    <p>N{price.toLocaleString()}</p>
                </div>
                <div className={classes.platforms}>
                    <img alt='' src={ps4} />
                    <img alt='' src={macos} />
                    <img alt='' src={windows} />
                </div>
            </div>

            <div className={classes.delete} onClick={onDelete}>
                <FiX />
            </div>
        </div>
    );
}

export default Item;