import React from 'react';

//styles
import classes from './services.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Item({image, title, content}) {
    AOS.init();
    return (
        <div className={classes.item} data-aos="fade-up">
            <img src={image.default} alt='' />
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}

export default Item;