import React, { FC } from 'react';

//types
import { PurchaseSummaryProps, SummaryAmountProps } from '../../types';

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


const PurchaseSummary:FC<PurchaseSummaryProps> = ({onClick, isCheckout}):JSX.Element => {

    return (
        <div className={`${classes.purchaseContainer} ${isCheckout && classes.extraPadding}`}>
            <h3>Purchase Summary</h3>
            <SummaryAmount name='Total price' amount={39.00} isDiscount={false} />
            <SummaryAmount name='Discount' amount={3.00} isDiscount={true} />
            <div className={classes.line} />
            <SummaryAmount name='Subtotal' amount={36.00} isDiscount={false} />

            <div className={classes.buttonContainer}>
                <PrimaryButton title={'Checkout'} onClick={() => onClick()} />
            </div>
        </div>
    );
}

export default PurchaseSummary;