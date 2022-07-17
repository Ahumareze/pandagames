import React from 'react';

//styles
import classes from './sucess.module.css';

//components
import Lottie from 'react-lottie';

import animation from '../../assets/animations/done.json';

function Success({type, close}) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className={classes.container} onClick={close}>
            <div className={classes.main}>
                <Lottie
                    options={defaultOptions}
                    height={120}
                    width={120}
                />
                <h3>Request Successful</h3>
                <p>Your {type} request has been placed and is on pending, please contact customer care or the admins on how to proceed</p>
            </div>
        </div>
    );
}

export default Success;