import React from 'react';

//styles
import classes from './faq.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Item({question, answer}) {
    AOS.init();
    return (
        <div className={classes.item} data-aos="fade-up">
            <h3>{question}</h3>
            <p>{answer}</p>
        </div>
    );
}

export default Item;