import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

//styles
import classes from './Intro.module.css';

function Intro(props) {
    AOS.init();

    return (
        <div className={classes.container} data-aos="fade-up">
            <h2>Invest In crypto and <span>earn big</span></h2>
            <p className={classes.content}>Bitcoin is a very exciting development; it might lead to a world currency. I think over the next decade it will grow to become one of the most important ways to pay for things and transfer assets.</p>
            <p className={classes.writer}>- Kim Dotcom, CEO Megaupload</p>
        </div>
    );
}

export default Intro;