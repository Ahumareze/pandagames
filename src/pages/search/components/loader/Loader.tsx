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
        <div>
            <Lottie
                options={defaultOptions}
                height={100}
                width={100}
            />
        </div>
    );
}

export default Loader;