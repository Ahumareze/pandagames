import React from 'react';

//styles
import classes from './collection.module.css';

//images
import banner from '../../../../assets/devImages/banners/b1.jpg';

function Collection() {
    return (
        <div className={classes.container}>
            <img src={banner} alt='' />
            <p className={classes.title}>Action</p>
        </div>
    );
}

export default Collection;