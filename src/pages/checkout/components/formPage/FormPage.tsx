import React from 'react';

//styles
import classes from '../../checkout.module.css';

const Input = () => {
    return(
        <div className={classes.input}>
            <p className={classes.name}>First name</p>
        </div>
    )
}

function FormPage() {
    return (
        <div className={classes.formContainer}>
            <p className={classes.intro}>Add the address you would like to recieve your parcel</p>
            <div className={classes.mainFormContainer}>
                <div className={classes.dualInputFields}>
                    <Input />
                    <Input />
                </div>
            </div>
        </div>
    );
}

export default FormPage;