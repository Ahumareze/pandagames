import React, { useState } from 'react';

//styles
import classes from './checkout.module.css';

//component
import { Background, Header, PurchaseSummary } from '../../components';
import Navigation from './components/navigation/Navigation';
import FormPage from './components/formPage/FormPage';
import PaymentPage from './components/paymentPage/PaymentPage';

function Checkout() {
    //local state
    const [showPaymentPage, setShowPaymentPage] = useState(false);

    return (
        <Background bubbles={false} explore={false}>
            <div className={classes.container}>
                <Header active={''} />
                <section className={classes.section}>
                    <div className={classes.main}>
                        <Navigation activeLink={showPaymentPage} onClick={(e) => setShowPaymentPage(e)} />
                        {showPaymentPage ? <PaymentPage /> : <FormPage />}
                    </div>
                    <PurchaseSummary isCheckout={false} onClick={() => console.log('')} />
                </section>
            </div>
        </Background>
    );
}

export default Checkout;