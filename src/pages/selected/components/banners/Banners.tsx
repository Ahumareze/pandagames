import React, { FC, useState } from 'react';

//types
import { SelectedBannerProps } from '../../../../types';

//styles
import classes from './banners.module.css';


const Banners:FC<SelectedBannerProps> = ({img1, img2, img3}):JSX.Element => {
    const [active, setActive] = useState<string>(img1);

    return (
        <div className={classes.container}>
            <img className={classes.bannerImage} src={active} alt='' />
            <div className={classes.miniImages}>
                <div className={classes.mainImagesContainer}>
                    <img src={img1} alt='' style={active === img1 ? {opacity: 1} : {}} onClick={() => setActive(img1)}/>
                    <img src={img2} alt='' style={active === img2 ? {opacity: 1} : {}} onClick={() => setActive(img2)}/>
                    <img src={img3} alt='' style={active === img3 ? {opacity: 1} : {}} onClick={() => setActive(img3)}/>
                </div>
            </div>
        </div>
    );
}

export default Banners;