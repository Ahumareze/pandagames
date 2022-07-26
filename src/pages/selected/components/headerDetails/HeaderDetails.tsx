import React, { FC } from 'react';

//icons
import { FiStar } from 'react-icons/fi';
import { MdStar } from 'react-icons/md';
import { SelectedHeaderProps, StarsProps } from '../../../../types';

//styles
import classes from './headerDetails.module.css';

const stars = Array(5).fill(0);



const Stars:FC<StarsProps> = ({rated}):JSX.Element => {
    let container;

    if(rated){
        container = <MdStar />
    }else{
        container = <FiStar className={classes.unstared} />
    }
    return(
        <>
            {container}
        </>
    )
}

const HeaderDetails:FC<SelectedHeaderProps> = ({title, rating, collection}):JSX.Element => {

    return (
        <div className={classes.container}>
            <h2>{title}</h2>
            <div className={classes.details}>
                <div className={classes.starsContainer}>
                    {stars.map((i, idx) => (
                        <Stars
                            rated={rating >= idx + 1}
                            key={idx}
                        />
                    ))}
                </div>
                <p className={classes.genre}>{collection.name}</p>
                <p className={classes.age}>Age 7+</p>
            </div>
        </div>
    );
}

export default HeaderDetails;