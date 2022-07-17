import React from 'react';

//styles
import classes from './brains.module.css';

//compoennts
import Item from './Item';

//images
const img1 = require('../../../../assets/images/Team/01.png').default;
const img2 = require('../../../../assets/images/Team/02.png').default;
const img3 = require('../../../../assets/images/Team/03.png').default;

function Brains(props) {
    return (
        <div className={classes.container}>
            <h2>The <span>Brains</span></h2>
            <p className={classes.intro}>Meet the brains behind Apexcorp investent</p>
            <div className={classes.itemsContainer}>
                <Item image={img1} name='Paul Heslop' position={'CEO and Founder'} />
                <Item image={img2} name='Farnoosh Torabi' position={'General Manager'}/>
                <Item image={img3} name='Rodney Harris' position={'Administrative Assistant'} />
            </div>
        </div>
    );
}

export default Brains;