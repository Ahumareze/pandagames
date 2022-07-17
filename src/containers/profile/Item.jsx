import React from 'react';
import { FiChevronRight, FiDownload, FiLogOut, FiUpload, FiUsers } from 'react-icons/fi';

//styles
import classes from './profile.module.css';


function Item({name, onClick}) {

    let container = (
        <div className={classes.icon3}>
            <FiDownload />
        </div>
    )
    if(name === 'Withdraw'){
        container = (
            <div className={classes.iconContainer}>
                <FiUpload />
            </div>
        )
    }else if(name === 'Referrals'){
        container = (
            <div className={classes.icon4}>
                <FiUsers />
            </div>
        )
    }else if(name === 'Logout'){
        container = (
            <div className={classes.icon2}>
                <FiLogOut />
            </div>
        )
    }

    return (
        <div className={classes.item} onClick={onClick}>
            {container}
            <p>{name}</p>
            <FiChevronRight className={classes.chevron} />
        </div>
    );
}

export default Item;