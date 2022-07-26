import React, { FC } from 'react';
import { SelectedBannerProps } from '../../../../types';

//styles
import classes from './banners.module.css';


const Banners:FC<SelectedBannerProps> = ({img1, img2, img3, img4}):JSX.Element => {
    return (
        <div className={classes.container}>
            <img className={classes.bannerImage} src={img1} alt='' />
            <div className={classes.miniImages}>
                <div className={classes.mainImagesContainer}>
                    <img src={img1} alt='' />
                    <img src={img2} alt='' />
                    <img src={img3} alt='' />
                    <img src={img4} alt='' />
                </div>
            </div>
        </div>
    );
}

export default Banners;