import React from 'react';

//styles
import classes from './banners.module.css';

//images
import image from '../../../../assets/devImages/games/genshin.jpg';

const Banners = ({image: string}) => {
    return (
        <div className={classes.container}>
            <img className={classes.bannerImage} src={image} alt='' />
            <div className={classes.miniImages}>
                <div className={classes.mainImagesContainer}>
                    <img src={image} alt='' />
                    <img src={image} alt='' />
                    <img src={image} alt='' />
                    <img src={image} alt='' />
                </div>
            </div>
        </div>
    );
}

export default Banners;