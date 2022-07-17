import React from 'react';

//styles
import classes from './clients.module.css';

import 'aos/dist/aos.css';
import Aos from 'aos';

function Item({image, name, content}) {
    Aos.init();
    
    return (
        <div className={classes.item} data-aos="fade-up">
            <div className={classes.profile} style={{backgroundImage: `url(${image})`}} />
            <p className={classes.username}>{name}</p>
            <p className={classes.content}>"{content}"</p>
        </div>
    );
}

export default Item;