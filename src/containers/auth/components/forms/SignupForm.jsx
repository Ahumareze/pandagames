import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';


//styles
import classes from '../../auth.module.css';

//compoents
import Input from '../inputs/Input';
import PasswordInput from '../inputs/PasswordInput';
import SelectInput from '../inputs/SelectInput';

import { register } from '../../../../redux/actions';

function SignupForm({toggle}) {
    //init
    const dispatch = useDispatch();

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('United States');
    const [password, setPassword] = useState('');
    const [refCode, setRefCode] = useState('');

    const signup = () => {
        dispatch(register(fullname, country, email, password, refCode))
    }

    return (
        <div className={classes.signupFormContainer}>
            <h2>Create New Account</h2>
            <p className={classes.intro}>Register your Apexcorp account to start earning</p>
            <div className={classes.mainFormContainer}>
                <Input title={'Fullname'} onChange={(e) => setFullname(e)} />
                <Input title={'Email'} onChange={(e) => setEmail(e)} />
                <SelectInput onChange={(e) => setCountry(e)} />
                <PasswordInput onChange={(e) => setPassword(e)} />
                <Input title={'Referral Code (optional)'} onChange={(e) => setRefCode(e)} />
                <button className={classes.authButton} onClick={signup}>create account</button>
                <p className={classes.extraLink2} onClick={toggle}>Login instead</p>
            </div>
        </div>
    );
}

export default SignupForm;