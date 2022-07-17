import React from 'react';

//styles
import classes from '../../auth.module.css';

//components
import Lottie from 'react-lottie';

import animation from '../../../../assets/animations/lf30_editor_2k4q78w3.json';

function Animation(props) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className={classes.rightAnimation}>
            <Lottie
                options={defaultOptions}
                height={320}
                // width={350}
            />
        </div>
    );
}

export default Animation;