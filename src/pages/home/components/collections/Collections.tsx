import React from 'react';

//styles
import classes from './collections.module.css';

//data
import collections from '../../../../assets/data/collections';

function Collections() {
    return (
        <div className={classes.container}>
            <div className={classes.banner} style={{backgroundImage: `url(${collections[0].image})`}}>
                <div className={classes.backdrop}>
                    
                </div>
            </div>
            <div className={classes.linksContainer}></div>
        </div>
    );
}

export default Collections;