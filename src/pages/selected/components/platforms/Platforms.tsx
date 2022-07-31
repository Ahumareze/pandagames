import React, { FC } from 'react';

//styles
import classes from './platforms.module.css';

//images
import macos from '../../../../assets/icons/macos.png';
import ps4 from '../../../../assets/icons/ps4.png';
import windows from '../../../../assets/icons/windows.png';
import { platformsProps } from '../../../../types';

interface PlatformProps{
    value: string
}

const Platform:FC<PlatformProps> = ({value}):JSX.Element => {

    let container;

    if(value === 'ps4'){
        container = <img src={ps4} alt='' /> 
    }else if(value === 'macos'){
        container = <img src={macos} alt='' />
    }else if(value === 'windows'){
        container = <img src={windows} alt='' />
    };

    return(
        <>
            {container}
        </>
    )
}

const Platforms:FC<platformsProps> = ({platforms}):JSX.Element => {
    
    // console.log(platforms)

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