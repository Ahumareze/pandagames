import React from 'react';

//styles
import classes from '../../checkout.module.css';

function PaymentPage() {
    return (
        <div className={classes.paymentPage}>
            <p className={classes.intro}>Select a payment method from below to continue</p>
            <div className={classes.mainFormContainer}>
                <div className={classes.paymentType}>
                    {'💳 Pay With Paystack'}
                </div>
            </div>
        </div>
    );
}

export default PaymentPage;