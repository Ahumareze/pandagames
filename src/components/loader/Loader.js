import React from 'react';

import classes from './loader.module.css';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from  'react-loader-spinner'

function Loader(props) {
    return (
        <div className={classes.container}>
            <ThreeDots
                height="80"
                width="80"
                color='#FCD535'
                ariaLabel='loading'
            />
        </div>
    );
}

export default Loader;