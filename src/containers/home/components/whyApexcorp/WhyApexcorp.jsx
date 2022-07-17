import React from 'react';

//styles
import classes from './whyapexcorp.module.css';

//components
import Item from '../services/Item';

import AOS from 'aos';
import 'aos/dist/aos.css';

//images
const img1 = require('../../../../assets/images/icons/01.png');
const img2 = require('../../../../assets/images/icons/02.png');
const img3 = require('../../../../assets/images/icons/03.png');
const img4 = require('../../../../assets/images/icons/04.png');
const img5 = require('../../../../assets/images/icons/05.png');
const img6 = require('../../../../assets/images/icons/06.png');


function WhyApexcorp(props) {
    AOS.init();

    return (
        <div className={classes.container} data-aos="fade-up">
            <h2>Why Choose <span>Apexcorp</span></h2>
            <p className={classes.intro}>Here are reasons why you should invest with us.</p>
            <div className={classes.main}>
                <Item image={img1} title='Fund Withdrawal' content={'Vertexcorp investment are able to withdraw funds and paid instantly.'} />
                <Item image={img2} title='Overview' content={'We are a legal company registred in the United States of America, providing its services to all countries.'}/>
                <Item image={img3} title='Security' content={'We are using one of the most sophisticated, encrypted and trusted protection against every possible aspect.'}/>
                <Item image={img4} title='Out Team' content={'Our professional and dedicated 24/7 support team will be accessible anytime any assistance is required.'}/>
                <Item image={img5} title='Guarantee' content={'We provide adequate insurance policy to our premium members.'}/>
                <Item image={img6} title='Diversification' content={'Our portfolio is diversified and taken care of by the most skilled crypto analysts and traders using automated trading bot and best strategies.'}/>
            </div>
        </div>
    );
}

export default WhyApexcorp;