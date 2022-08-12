import React, { FC } from 'react';

//styles
import classes from './platforms.module.css';

//types
import { platformsProps } from '../../../../types';

interface PlatformProps{
    value: any
}

const Platform:FC<PlatformProps> = ({value}):JSX.Element => {
    return(
        <p className={classes.psImg}>{value.name}</p>
    )
}

const Platforms:FC<platformsProps> = ({platforms}):JSX.Element => {

    return (
        <div className={classes.container}>
            <p>Platforms</p>
            <div className={classes.icons}>
                {platforms.map((i, idx) => (
                    <Platform value={i} key={idx} />
                ))}
            </div>
        </div>
    );
}

export default Platforms;