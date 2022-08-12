import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//types
import { BannerProps } from '../../../../types';

//styles
import classes from './collections.module.css';

const Banner:FC<BannerProps> = ({title, image, details, link}) => {
    //initialize
    const navigate = useNavigate();

    //local state
    const [animate, setAnimate] = useState<boolean>(true);

    useEffect(() => {
        updateAnimate()
    }, [title]);

    const updateAnimate = () => {
        setAnimate(true);
        setTimeout(() => {
            setAnimate(false)
        }, (1200));
    }

    return (
        <div className={classes.banner} style={{backgroundImage: `url(${image})`}}>
            <div className={`${classes.backdrop} ${animate && classes.animate}`}>
                <div className={classes.main}>
                    <h2>{title}</h2>
                    <p>{details}</p>
                    <div className={classes.button}  onClick={() => navigate('/collections' + link)}>Browse collection</div>
                </div>
            </div>
        </div>
    );
}

export default Banner;