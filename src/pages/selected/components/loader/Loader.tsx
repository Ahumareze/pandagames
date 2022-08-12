import React from 'react';

//styles
import classes from './loader.module.css';

function Loader() {
    return (
        <div className={classes.container}>
            <div>
                <div className={classes.h2} />
                <div className={classes.introDiv}>
                    <div className={classes.introText1}/>
                    <div className={classes.introText1}/>
                    <div className={classes.introText2}/>
                </div>
                <div className={classes.mainImage}/>
                <div className={classes.miniImages}>
                <div className={classes.mainImagesContainer}>
                    <div />
                    <div />
                    <div />
                </div>
            </div>
            </div>
            <div className={classes.purchaseDiv}>
                <div className={classes.h2} />
                <div className={classes.purchasePlatformContianer}>
                    <div />
                    <div />
                    <div />
                </div>
            </div>
        </div>
    );
}

export default Loader;