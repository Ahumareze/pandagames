import React, { FC } from 'react';
import { InputProps } from '../../../../types';

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

const SelectInput:FC<InputProps> = ({title}):JSX.Element => {
    return(
        <div className={classes.input}>
            <p className={classes.name}>{title}</p>
            <select>
                <option>Nigeria</option>
            </select>
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
                    <SelectInput title={'Country'}/>
                    <SelectInput title={'City'}/>
                </div>
                <div className={classes.addresslineDiv}>
                    <Input title={'Address Line'}/>
                </div>
            </div>
        </div>
    );
}

export default FormPage;