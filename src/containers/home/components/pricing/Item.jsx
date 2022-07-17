import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../../../../components';

//styles
import classes from './pricing.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Item({children, name, percent, roi, weeks, commision, min, max}) {
    //initialize
    const history = useHistory();
    AOS.init();

    return (
        <div className={classes.item} data-aos="fade-up">
            <div className={classes.iconContainer}>
                {children}
            </div>
            <h3>{name}</h3>
            <div className={classes.details}>
                <p>{weeks} Weeks Duration</p>
                <p>{commision}% Referral Commission</p>
                <p>Weekly ROI Model: {roi}% Weekly</p>
                <p>Minimum Investment ${min}</p>
                <p>Maximum Investment {max}</p>
            </div>
            <Button name={'Register'} onClick={() => history.push('/accounts')} />
        </div>
    );
}

export default Item;