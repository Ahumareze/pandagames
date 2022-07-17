import React, { useState } from 'react';

//icons
import { RiHandCoinFill } from "react-icons/ri";
import {FaWallet} from 'react-icons/fa';
import { BsCashStack, BsBarChartFill } from "react-icons/bs";

//styles
import classes from './box.module.css';
import { FiEye, FiEyeOff } from 'react-icons/fi';

function Box({name, value}) {
    const [active, setActive] = useState(false);
    const [hidden, setHidden] = useState(false);

    let icon;
    if(name === 'Balance'){
        icon = <FaWallet size={25} className={classes.icon} style={active ? {color: '#FCD535'} : {}} />
    }else if(name === 'Total Deposit'){
        icon = <RiHandCoinFill size={25} className={classes.icon} style={active ? {color: '#FCD535'} : {}} />
    }else if(name === 'Amount Earned'){
        icon = <BsBarChartFill size={25} className={classes.icon} style={active ? {color: '#FCD535'} : {}} />
    }else{
        icon = <BsCashStack size={25} className={classes.icon} style={active ? {color: '#FCD535'} : {}} />
    }

    let balance = (
        <div className={classes.bottom}>
            <p className={classes.value}>${(value).toFixed(2)}</p>
            {name === 'Balance' && <FiEyeOff size={20} className={classes.eye} onClick={() => setHidden(prev => !prev)} />}
        </div>
    );
    if(hidden){
        balance = (
            <div className={classes.bottom}>
                <p className={classes.value}>*****</p>
                {name === 'Balance' && <FiEye size={20} className={classes.eye} onClick={() => setHidden(prev => !prev)} />}
            </div>
        )
    }

    return (
        <div className={classes.container} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} >
            <div className={classes.iconContainer}>
                {icon}
            </div>
            <p className={classes.boxTitle}>{name}</p>
            {balance}
        </div>
    );
}

export default Box;