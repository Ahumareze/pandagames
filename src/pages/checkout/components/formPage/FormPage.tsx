import React, { FC, useState } from 'react';
import location from '../../../../assets/data/locations';

//types
import { InputProps, SelectInputProps } from '../../../../types';

//styles
import classes from '../../checkout.module.css';

const Input:FC<InputProps> = ({title}):JSX.Element => {
    return(
        <div className={classes.input}>
            <p className={classes.name}>{title}</p>
            <input />
        </div>
    )
};

const SelectInput:FC<SelectInputProps> = ({title, isCity}):JSX.Element => {
    const [cities, setCities] = useState(location[0].states);

    const handleUpdate = (e: string) => {
        const value = JSON.parse(e);
        setCities(location[value].states)
    }

    let container = (
        <select onChange={(e) => handleUpdate(e.target.value)}>
            {location.map((i, idx) => (
                <option key={idx} value={idx}>{i.name}</option>
            ))}
        </select>
    );

    if(isCity){
        container = (
            <select>
                {cities.map((i, idx) => (
                    <option key={idx}>{i}</option>
                ))}
            </select>
        )
    }

    return(
        <div className={classes.input}>
            <p className={classes.name}>{title}</p>
            {container}
        </div>
    )
}

function FormPage() {
    return (
        <div className={classes.formContainer}>
            <p className={classes.intro}>Add the address you would like to recieve your parcel</p>
            <div className={classes.mainFormContainer}>
                <div className={classes.dualInputFields}>
                    <Input title={'First Name'} />
                    <Input title={'Last Name'}/>
                    <SelectInput title={'Country'} isCity={false} />
                    <SelectInput title={'City'} isCity />
                </div>
                <div className={classes.addresslineDiv}>
                    <Input title={'Address Line'}/>
                </div>
            </div>
        </div>
    );
}

export default FormPage;