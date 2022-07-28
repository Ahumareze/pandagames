import React from 'react';

//styles
import classes from './checkout.module.css';

//component
import { Background, Header, PurchaseSummary } from '../../components';
import Navigation from './components/navigation/Navigation';
import FormPage from './components/formPage/FormPage';
import PaymentPage from './components/paymentPage/PaymentPage';

function Checkout() {
    return (
        <Background bubbles={false} explore={false}>
            <div className={classes.container}>
                <Header active={''} />
                <section className={classes.section}>
                    <div className={classes.main}>
                        <Navigation />
                        {/* <FormPage /> */}
                        <PaymentPage />
                    </div>
                    <PurchaseSummary isCheckout={false} onClick={() => console.log('')} />
                </section>
            </div>
        </Background>
    );
}

export default Checkout;