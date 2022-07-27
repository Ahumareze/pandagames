import React, { FC } from 'react';

//types
import { SummaryAmountProps } from '../../types';

//component
import { PrimaryButton } from '../buttons/Button';
import { useNavigate } from 'react-router-dom';

//styles
import classes from './purchaseSummary.module.css';

const SummaryAmount:FC<SummaryAmountProps> = ({name, amount, isDiscount}):JSX.Element => {
    return(
        <div className={classes.summaryAmount}>
            <p>{name}</p>
            {isDiscount ? <div>-${amount.toFixed(2)}</div> : <div>${amount.toFixed(2)}</div>}
        </div>
    )
}


function PurchaseSummary() {
    //initialize component
    const navigate = useNavigate();

    return (
        <div className={classes.purchaseContainer}>
            <h3>Purchase Summary</h3>
            <SummaryAmount name='Total price' amount={39.00} isDiscount={false} />
            <SummaryAmount name='Discount' amount={3.00} isDiscount={true} />
            <div className={classes.line} />
            <SummaryAmount name='Subtotal' amount={36.00} isDiscount={false} />

            <div className={classes.buttonContainer}>
                <PrimaryButton title={'Checkout'} onClick={() => navigate('/checkout')} />
            </div>
        </div>
    );
}

export default PurchaseSummary;