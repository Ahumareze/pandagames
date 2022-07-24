import React from 'react';

//styles
import classes from './banners.module.css';

//images
import image from '../../../../assets/devImages/games/genshin.jpg';

function Banners() {
    return (
        <div className={classes.container}>
            <img className={classes.bannerImage} src={image} />
            <div className={classes.miniImages}>
                <div className={classes.mainImagesContainer}>
                    <img src={image} />
                    <img src={image} />
                    <img src={image} />
                    <img src={image} />
                </div>
            </div>
        </div>
    );
}

export default Banners;