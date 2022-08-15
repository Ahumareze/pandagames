import React, { useState } from 'react';

//styles
import classes from './checkout.module.css';

//component
import { Background, Header, PurchaseSummary } from '../../components';
import Navigation from './components/navigation/Navigation';
import FormPage from './components/formPage/FormPage';
import PaymentPage from './components/paymentPage/PaymentPage';

//types
import { FormProps } from '../../types';

function Checkout() {
    //local state
    const [showPaymentPage, setShowPaymentPage] = useState(false);

    const handleNext = (e: FormProps) => {
        console.log(e)
    }

    return (
        <Background bubbles={false} explore={false}>
            <div className={classes.container}>
                <Header active={''} />
                <section className={classes.section}>
                    <div className={classes.main}>
                        <Navigation activeLink={showPaymentPage} onClick={(e) => setShowPaymentPage(e)} />
                        {showPaymentPage ? <PaymentPage /> : <FormPage onNext={(e) => handleNext(e)} />}
                    </div>
                    <PurchaseSummary onClick={() => console.log('')} />
                </section>
            </div>
        </Background>
    );
}

export default Checkout;