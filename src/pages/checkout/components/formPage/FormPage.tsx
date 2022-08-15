import React, { FC, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import location from '../../../../assets/data/locations';

//types
import { CheckoutFormPageProps, InputProps, SelectCityInputProps, SelectInputProps } from '../../../../types';

//styles
import classes from '../../checkout.module.css';

const Input:FC<InputProps> = ({title, onChange}):JSX.Element => {
    return(
        <div className={classes.input}>
            <p className={classes.name}>{title}</p>
            <input onChange={e => onChange(e.target.value)} />
        </div>
    )
};

const SelectInput:FC<SelectInputProps> = ({title, onChange}):JSX.Element => {
    
    return(
        <div className={classes.input}>
            <p className={classes.name}>{title}</p>
            <select onChange={(e) => onChange(e.target.value)}>
                {location.map((i, idx) => (
                    <option key={idx} value={idx}>{i.name}</option>
                ))}
            </select>
        </div>
    )
};

const SelectCity:FC<SelectCityInputProps> = ({title, data, onChange}) => {
    return(
        <div className={classes.input}>
            <p className={classes.name}>{title}</p>
            <select onChange={(e) => onChange(e.target.value)}>
                {data.map((i: any, idx: number) => (
                    <option key={idx} value={i}>{i}</option>
                ))}
            </select>
        </div>
    )
}

const FormPage:FC<CheckoutFormPageProps> = ({onNext}):JSX.Element => {
    //local state
    const [countries, setCountries] = useState<Array<string>>(location[0].states)

    //formdata
    const [firstname, setFirstname] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [country, setCountry] = useState<string>(location[0].name);
    const [city, setCity] = useState<string>(location[0].states[0]);

    const handleUpdate = (e: string) => {
        const value = JSON.parse(e);
        setCountries(location[value].states);
        setCountry(location[value].name);
    };

    const handleSubmit = () => {
        const data = {
            firstname,
            lastname,
            address,
            country,
            city
        };

        onNext(data);
    }

    

    return (
        <div className={classes.formContainer}>
            <p className={classes.intro}>Add the address you would like to recieve your parcel</p>
            <div className={classes.mainFormContainer}>
                <div className={classes.dualInputFields}>
                    <Input title={'First Name'} onChange={(e) => setFirstname(e)} />
                    <Input title={'Last Name'} onChange={(e) => setLastname(e)}/>
                    <SelectInput title={'Country'} onChange={(e) => handleUpdate(e)} />
                    <SelectCity title={'City'} data={countries} onChange={e => setCity(e)} />
                </div>
                <div className={classes.addresslineDiv}>
                    <Input title={'Address Line'} onChange={(e) => setAddress(e)}/>
                </div>
            </div>
            <div className={classes.nextContainer} onClick={() => handleSubmit()}> <p>Payment</p> <FiChevronRight size={20} /> </div>
        </div>
    );
}

export default FormPage;