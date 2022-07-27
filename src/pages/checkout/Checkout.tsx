import React from 'react';

//styles
import classes from './checkout.module.css';

//component
import { Background, Header, PurchaseSummary } from '../../components';
import Navigation from './components/navigation/Navigation';
import FormPage from './components/formPage/FormPage';

function Checkout() {
    return (
        <Background bubbles={false} explore={false}>
            <div className={classes.container}>
                <Header active={''} />
                <section className={classes.section}>
                    <div className={classes.main}>
                        <Navigation />
                        <FormPage />
                    </div>
                    <PurchaseSummary isCheckout={false} onClick={() => console.log('')} />
                </section>
            </div>
        </Background>
    );
}

export default Checkout;