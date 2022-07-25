import React from 'react';

//styles
import classes from './platforms.module.css';

//images
import macos from '../../../../assets/icons/macos.png';
import ps4 from '../../../../assets/icons/ps4.png';
import windows from '../../../../assets/icons/windows.png';

function Platforms() {
    return (
        <div className={classes.container}>
            <p>Platforms</p>
            <div className={classes.icons}>
                <img src={ps4} alt='' />
                <img src={macos} alt='' />
                <img src={windows} alt='' />
            </div>
        </div>
    );
}

export default Platforms;