import React from 'react';

//styles
import classes from './empty.module.css';

//components
import Lottie from 'react-lottie';

import animation from '../../assets/animations/emptypage.json';

function EmptyScreen(props) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className={classes.container}>
            <div>
                <Lottie
                    options={defaultOptions}
                    height={150}
                    width={150}
                />
                <p>Please reload page is this screen persists</p>
            </div>
        </div>
    );
}

export default EmptyScreen;