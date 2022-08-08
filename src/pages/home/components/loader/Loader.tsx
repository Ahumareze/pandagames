import React from 'react';

//styles
import classes from './loader.module.css';

function Loader() {
    const collections = Array(4).fill(0);

    const Item = () => {
        return(
            <div className={classes.Item}>
                <div className={classes.img} />
                <div className={classes.Itemtext} />
            </div>
        )
    }
    return (
        <section className={classes.section}>
            <div className={classes.bannerContainer}>
                <div className={classes.banner} />
                <div className={classes.linksContainer}>
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </div>
            <div className={classes.collectionsContainer}>
                {collections.map((i, idx) => (
                    <Item
                        key={idx}
                    />
                ))}
            </div>
        </section>
    );
}

export default Loader;