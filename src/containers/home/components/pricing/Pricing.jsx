import React from 'react';
import Item from './Item';

//styles
import classes from './pricing.module.css';

import { FaStar, FaTrophy } from 'react-icons/fa';
import {BsAwardFill} from 'react-icons/bs';
import {IoDiamondSharp} from 'react-icons/io5';

function Pricing(props) {
    return (
        <div className={classes.container}>
            <h2>Investment <span>Packages</span></h2>
            <p className={classes.intro}>Below are the available investment plans we have for our amiable clients to partake in</p>
            <div className={classes.itemsContainer}>
                <Item name={'Basic'} weeks='Two' roi='7' commision={'3'} min='200' max='$999' >
                    <BsAwardFill />
                </Item>
                <Item name={'Advanced'} weeks='Three' roi='12' commision={'6'} min='1,000' max='$9,999'  >
                    <FaStar />
                </Item>
                <Item name={'Pro'} weeks='Four' roi='17' commision={'9'} min='10,000' max='$49,999'>
                    <FaTrophy />
                </Item>
                <Item name={'Ultra'} weeks='Five' roi='22' commision={'12'} min='50,000' max='unlimited'>
                    <IoDiamondSharp />
                </Item>
            </div>
        </div>
    );
}

export default Pricing;