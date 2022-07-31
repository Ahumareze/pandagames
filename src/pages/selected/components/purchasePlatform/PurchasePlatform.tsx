import React, { FC } from 'react';
import { PurchasePlatformProps } from '../../../../types';

//styles
import classes from './purchasePlatform.module.css';

//icons
import macos from '../../../../assets/icons/macos.png';
// import ps4 from '../../../../assets/icons/ps4.png';
// import windows from '../../../../assets/icons/windows.png';

const PurchasePlatform:FC<PurchasePlatformProps> = ({name, active, add, remove}):JSX.Element => {

    const clickHandler = () => {
        if(active){
            remove()
        }else{
            add()
        }
    }
    
    return (
        <div className={`${classes.contianer} ${active && classes.active}`} onClick={clickHandler}>
            <div className={classes.box}>
                <img src={macos} alt='' />
                <p>{name}</p>
            </div>
        </div>
    );
}

export default PurchasePlatform;