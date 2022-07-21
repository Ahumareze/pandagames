import React from 'react';
import { Background } from '../../components';

//styles
import classes from './store.module.css';

function Store() {
    console.log('store page')
    return (
        <Background>
            <div className={classes.container}>
            
            </div>
        </Background>
    );
}

export default Store;