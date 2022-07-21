import React, { FC } from 'react';

//types
import { BannerProps } from '../../../../types';

//styles
import classes from './collections.module.css';

//data
import collections from '../../../../assets/data/collections';

const Banner:FC<BannerProps> = ({title, image, details}) => {
    return (
        <div className={classes.banner} style={{backgroundImage: `url(${image})`}}>
            <div className={classes.backdrop}>
                <div className={classes.main}>
                    <h2>{title}</h2>
                    <p>{details}</p>
                    <div className={classes.button}>Browse collection</div>
                </div>
            </div>
        </div>
    );
}

export default Banner;