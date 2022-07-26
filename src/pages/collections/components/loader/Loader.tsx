import React from 'react';

//styles
import classes from './loader.module.css';

function Loader() {
    const collections = Array(8).fill(0);

    const Item = () => {
        return(
            <div className={classes.Item}>
                <div className={classes.img} />
                <div className={classes.Itemtext} />
            </div>
        )
    }

    return (
        <div className={classes.container}>
            <div className={classes.h2} />
            <div className={classes.introText1}/>
            <div className={classes.introText2}/>

            <div className={classes.collectionsContainer}>
                {collections.map((i, idx) => (
                    <Item
                        key={idx}
                    />
                ))}
            </div>
        </div>
    );
}

export default Loader;