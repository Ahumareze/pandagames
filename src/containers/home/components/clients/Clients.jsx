import React from 'react';

//styles
import classes from './clients.module.css';

//components
import Item from './Item';
import clients from '../../../../assets/data/clients';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Clients(props) {
    AOS.init();

    return (
        <div className={classes.container}>
            <h2>Clients <span>Review</span></h2>
            <p className={classes.intro}>What our clients say about Apexcorp investent</p>
            <div className={classes.itemsContainer}  data-aos="fade-up">
                {clients.map((i, idx) => (
                    <Item name={i.name} image={i.image} content={i.content} />
                ))}
            </div>
        </div>
    );
}

export default Clients;