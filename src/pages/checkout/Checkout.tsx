import React from 'react';

//component
import { Background, Header, PurchaseSummary } from '../../components';

//styles
import classes from './checkout.module.css';

function Checkout() {
    return (
        <Background bubbles={false} explore={false}>
            <div className={classes.container}>
                <Header active={''} />
                <section className={classes.section}>
                    <div className={classes.main}>

                    </div>
                    <PurchaseSummary />
                </section>
            </div>
        </Background>
    );
}

export default Checkout;