import React from 'react';

//styles
import classes from './loader.module.css';

//components
import Lottie from 'react-lottie';

//animations
import animation from '../../../../assets/lotties/lf30_editor_amcwjx4e.json';

function Loader() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className={classes.mainContainer}>
            <Lottie
                options={defaultOptions}
                height={120}
                width={120}
            />
        </div>
    );
}

export default Loader;