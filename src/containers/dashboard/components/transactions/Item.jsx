import React from 'react';

//styles
import classes from './transactions.module.css';

import coins from '../../../../assets/data/coins';

const width = window.innerWidth;

function Item({coin, type, date, amount, status}) {

    const coinImage = coins.findIndex(i => i.name === coin);

    let container = <p>{status}</p>;
    if(status === 'completed'){
        container = <p style={{color: 'green'}}>{status}</p>
    }else if(status === 'declined'){
        container = <p style={{color: 'red'}}>{status}</p>
    }

    return (
        <div className={classes.item}>
            <div className={classes.title}>
                <div className={classes.icon} style={{backgroundImage: `url(${coins[coinImage].image})`}} />
                <p>{width > 700 ? coin : type}</p>
            </div>
            <div className={classes.typeDiv}>
                <p>{type}</p>
            </div>
            <div className={classes.typeDiv2}>
                <p>${amount}</p>
            </div>
            <div className={classes.typeDiv}>
                <p>{date}</p>
            </div>
            <div className={classes.typeDiv3}>
                {container}
            </div>
        </div>
    );
}

export default Item;