import React, { FC } from 'react';

//types
import { BackgroundProps } from '../../types';

//styles
import classes from './background.module.css';

//assets
import exploreImage from '../../assets/images/EXPLORE.png'


const Background:FC<BackgroundProps> = ({children, bubbles, explore}) => {

    const animation = (
        <div className={classes.bubbles}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    );

    const exploreContainer = (
        <div className={classes.explore}>
            <img alt='' src={exploreImage} />
        </div>
    )
    
    return (
        <div className={classes.container}>
            {bubbles && animation}
            {explore && exploreContainer}
            <div className={classes.main}>
                {children}
            </div>
        </div>
    );
}

export default Background;