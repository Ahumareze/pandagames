import React, { FC, useEffect, useState } from 'react';

//styles
import classes from './collections.module.css';

//data
import Banner from './Banner';
import Item from './Item';
import Stats from './stats';

//utilities
import { width } from '../../../../utilities/dimensions';

interface CollectionsPropsObject{
    name: string,
    miniImage: string,
    image: string,
    link: string
}

interface CollectionsProps{
    collections: Array<CollectionsPropsObject>
}

const Collections:FC<CollectionsProps> = ({collections}):JSX.Element => {
    const [active, setActive] = useState<any>();
    const [selected, setSelected] = useState<number>(0)

    useEffect(() => {
        setActive(collections[0])
    }, []);

    const updateBanner = (e: number) => {
        setActive(collections[e]);
        setSelected(e)
    };

    const updateBannerTimeout = () => {
        
    }

    useEffect(() => {
        if(width < 1200){
            updateBannerTimeout();
        }
    }, []);

    return (
        <div className={classes.container}>
            <div>
                <Banner title={active?.title} image={active?.image} details={active?.details} link={active?.link} />
                <Stats />
            </div>
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