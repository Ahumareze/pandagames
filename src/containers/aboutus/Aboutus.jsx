import React, { useState } from 'react';
import { Header } from '../../components';

//styles
import classes from './aboutus.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

//assets
const img = require('../../assets/images/coin.png');
const doucument = require('../../assets/images/document.jpeg');

function Aboutus(props) {
    AOS.init();

    const [showmodal, setShowmodal] = useState(false);

    const modal = (
        <div className={classes.modal} onClick={() => setShowmodal(false)}>
            <img src={doucument.default} alt='' />
        </div>
    )

    return (
        <div className={classes.container}>
            <Header active={'About'} toggle={() => console.log('')}/>
            <h2>About <span>Us</span></h2>
            <p className={classes.intro}>We use our master strategy and automated trading software which enables us earn in every entry made not withstanding the market being bullish or bearish.</p>
            <div className={classes.main} data-aos="fade-up">
                <div>
                    <p>Apexcorp investment is an automated online investment platform that is a top secured and profitable option for you. Part of Apexexcorp investment - the team of professional traders focusing mainly on Bitcoin and other cryptocurrencies trading over multiple Exchanges and markets. Headquartered in Massachusetts, Apexcorp investment is already becoming the Panam's fastest-growing FinTech company. Our name is synonymous with productive and profitable trading solutions where our investors need little to no trading experience at all. With Apexcorp investment, investors choose one of our three simple investment designs, make a deposit and sit back while our experts take the control.</p>
                    <div className={classes.breaker}/>
                    <p>Month after Month, our company shows excellent trading results. However, with additional financial capital and by using all the opportunities and the accumulated expertise, the company and it's shareholders can secure additional dividends. So, we have decided to expand operations and raise additional funds through online investments. For that, we have created the online platform Vertex Corp. All funds raised through this platform will be used to increase capital turnover and to recieve additional profits, with a share of those profits paid to every investor according to their selected plan. </p>
                </div>
                <div className={classes.imgContainer}>
                    <img src={img.default} alt='' />
                </div>
            </div>
            <div className={classes.extraDetails}>
                <h3>Apex Corp <span>Investment</span></h3>
                <p>Our company was founded on 29th Febuary 2017, under companies Act 2006 of the United States of America. To view the certificate, click the button below.</p>
                <div className={classes.button} onClick={() => setShowmodal(true)}>View Certificate</div>
            </div>
            {showmodal && modal}
        </div>
    );
}

export default Aboutus;