import React from 'react';

//styles
import classes from '../deposit.module.css';
import classes2 from '../../withdraw/withdraw.module.css';

//icons
import {FiChevronDown} from 'react-icons/fi';

function CurrencyInput({selected, onClick}) {
    
    
    return (
        <div className={`${classes.selectInput} ${classes2.selectInput2}`} onClick={onClick}>
            <div className={classes.selectInputMain}>
                <div className={classes.currencyicon} style={{backgroundImage: `url(${selected.image})`}} />
                <p>{selected.name}</p>
            </div>
            <div className={classes.dropDown}>
                <FiChevronDown />
            </div>
        </div>
    );
}

export default CurrencyInput;