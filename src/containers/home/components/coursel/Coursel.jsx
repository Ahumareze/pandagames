import React from 'react';

//styles
import classes from './coursel.module.css';

//components
import {Button} from '../../../../components';
import { useHistory } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Coursel(props) {
    const history = useHistory();
    AOS.init();

    return (
        <div className={classes.container} style={{backgroundImage: `url('https://res.cloudinary.com/ahumareze/image/upload/v1656118853/GettyImages-1162966574-3608efb2056848c8b001f40abe45a0c9_pmkf1a.jpg')`}}>
            <div className={classes.main}>
                <div data-aos="fade-up">
                    <h1>The number one crypto investment platform</h1>
                    <p>Apex corp investment - The best way to passive income, we are creating a business opportunity for investors who wishes to maximize digital currency and earn passively with little or no effort, and also aid our investors make their livestyle worth living without any left-out debt.</p>
                    <div className={classes.getStartedInput}>
                        <input placeholder='Email address ...' />
                        <div className={classes.button} onClick={() => history.push('/accounts')}>Get Started</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Coursel;