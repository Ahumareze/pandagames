import React from 'react';

//styles
import classes from './about.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useHistory } from 'react-router-dom';

//assets
const img = require('../../../../assets/images/coin.png');

function AboutUs(props) {
    AOS.init();
    const history = useHistory();

    return (
        <div className={classes.container} data-aos="fade-up">
            <h2>About <span>Us</span></h2>
            <p className={classes.intro}>We use our master strategy and automated trading software which enables us earn in every entry made not withstanding the market being bullish or bearish.</p>
            <div className={classes.main}>
                <div>
                    <p>Apexcorp investment is an automated online investment platform that is a top secured and profitable option for you. Part of Apexexcorp investment - the team of professional traders focusing mainly on Bitcoin and other cryptocurrencies trading over multiple Exchanges and markets. Headquartered in Massachusetts, Apexcorp investment is already becoming the Panam's fastest-growing FinTech company. Our name is synonymous with productive and profitable trading solutions where our investors need little to no trading experience at all. With Apexcorp investment, investors choose one of our three simple investment designs, make a deposit and sit back while our experts take the control.</p>
                    <div className={classes.button} onClick={() => history.push('/about')} >Learn more</div>
                </div>
                <div className={classes.imgContainer}>
                    <img src={img.default} alt='' />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;