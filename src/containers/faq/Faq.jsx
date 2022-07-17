import React from 'react';
import { Header } from '../../components';

//styles
import classes from './faq.module.css';
import Item from './Item';

import faqData from '../../assets/data/faq';

function Faq(props) {
    return (
        <div className={classes.container}>
            <Header active={'Faq'} toggle={() => console.log('')}/>
            <h2>Frequently Asked <span>Questions</span></h2>
            <p className={classes.intro}>Here are some frequently asked questions about our company</p>
            <div className={classes.main}>
                {faqData.map((i, idx) => (
                    <Item question={i.question} answer={i.answer} key={idx}/>
                ))}
            </div>
        </div>
    );
}

export default Faq;