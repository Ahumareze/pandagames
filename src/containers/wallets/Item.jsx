import React from 'react';
import { useState } from 'react';
import { FiCopy } from 'react-icons/fi';

//styles
import classes from './wallets.module.css';

function Item({image, coin, address}) {
    const [stateAddresss, setStateAddress] = useState(address);

    const copy = () => {
        navigator.clipboard.writeText(stateAddresss);
        alert('copied to clipboard')
    }

    return (
        <div className={classes.item}>
            <div className={classes.title}>
                <div style={{backgroundImage: `url(${image})`}} className={classes.imageContainer} />
                <p>{coin}</p>
            </div>
            <div className={classes.content}>
                <div className={classes.address}>{address}</div>
                <div className={classes.div}>
                    <FiCopy onClick={copy} />
                </div>
            </div>
        </div>
    );
}

export default Item;