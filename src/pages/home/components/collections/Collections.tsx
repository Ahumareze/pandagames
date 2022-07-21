import React, { useEffect, useState } from 'react';

//styles
import classes from './collections.module.css';

//data
import collections from '../../../../assets/data/collections';
import Banner from './Banner';
import Item from './Item';

function Collections() {
    const [active, setActive] = useState<any>();
    const [selected, setSelected] = useState<number>(0)

    useEffect(() => {
        setActive(collections[3])
    }, []);

    const updateBanner = (e: number) => {
        setActive(collections[e]);
        setSelected(e)
    }

    return (
        <div className={classes.container}>
            <Banner title={active?.title} image={active?.image} details={active?.details} />
            <div className={classes.linksContainer}>
                {collections.map((i, idx) => (
                    <Item 
                        name={i.name}
                        image={i.miniImage}
                        active={idx === selected}
                        id={idx}
                        key={idx}
                        onClick={(e) => updateBanner(e)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Collections;