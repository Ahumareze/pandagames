import React from 'react';

//styles
import classes from './Item.module.css';

//images
import banner from '../../../../assets/devImages/games/genshin.jpg';

//icons
import macos from '../../../../assets/icons/macos.png';
import ps4 from '../../../../assets/icons/ps4.png';
import windows from '../../../../assets/icons/windows.png';

function Item() {
    return (
        <div className={classes.container}>
            <img className={classes.mainImage} src={banner} alt=''/>
            <div className={classes.details}>
                <h3>Genshin Impact</h3>
                <p>$39.99</p>
                <div className={classes.platforms}>
                    <img alt='' src={ps4} />
                    <img alt='' src={macos} />
                    <img alt='' src={windows} />
                </div>
            </div>
        </div>
    );
}

export default Item;