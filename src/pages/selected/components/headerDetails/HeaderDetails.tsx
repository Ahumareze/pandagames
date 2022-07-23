import React from 'react';

//icons
import { FiStar } from 'react-icons/fi';
import { MdStar } from 'react-icons/md';

//styles
import classes from './headerDetails.module.css';

function HeaderDetails() {

    const Stars = () => {
        return(
            <div className={classes.starsContainer}>
                <MdStar />
                <MdStar />
                <FiStar className={classes.unstared} />
                <FiStar className={classes.unstared} />
                <FiStar className={classes.unstared} />
            </div>
        )
    }

    return (
        <div className={classes.container}>
            <h2>Genshin Impact</h2>
            <div className={classes.details}>
                <Stars />
                <p className={classes.genre}>Adventure</p>
                <p className={classes.age}>Age 7+</p>
            </div>
        </div>
    );
}

export default HeaderDetails;