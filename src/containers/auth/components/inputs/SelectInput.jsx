import React from 'react';

//styles
import classes from '../../auth.module.css';

//components
import countries from '../../../../assets/data/countries';

function SelectInput({onChange}) {
    return (
        <div className={classes.inputItem}>
            <p>Country</p>
            <select onChange={(e) => onChange(e.target.value)} defaultValue={'United States'}>
                {countries.map(i => (
                    <option value={i.name} key={i.name} >{i.name}</option>
                ))}
            </select>
        </div>
    );
}

export default SelectInput;