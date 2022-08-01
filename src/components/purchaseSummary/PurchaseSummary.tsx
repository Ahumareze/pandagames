import React, { FC, useEffect, useState } from 'react';

//types
import { PurchaseSummaryProps, SummaryAmountProps } from '../../types';
import { IRootState } from '../../redux/reducers/mainReducer';

//component
import { useDispatch, useSelector } from 'react-redux';
import { PrimaryButton } from '../buttons/Button';

//styles
import classes from './purchaseSummary.module.css';
import { fetchCartData } from '../../redux/actions';

const SummaryAmount:FC<SummaryAmountProps> = ({name, amount, isDiscount}):JSX.Element => {
    return(
        <div className={classes.summaryAmount}>
            <p>{name}</p>
            {isDiscount ? <div>-N{amount.toLocaleString()}</div> : <div>N{amount.toLocaleString()}</div>}
        </div>
    )
}


const PurchaseSummary:FC<PurchaseSummaryProps> = ({onClick}):JSX.Element => {
    //initialize
    const dispatch = useDispatch();

    //redux state
    const cartData = useSelector((state: IRootState) => state.cartData);

    //local state
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        dispatch(fetchCartData())
    }, [dispatch]);

    useEffect(() => {
        if(cartData){
            let price = 0;
            cartData.map((i: any) => {
                const newPrice = price + i.mainPrice;
                price = newPrice
            });
            setTotalPrice(price)
        }
    }, [cartData])

    const discount = 500;

    return (
        <div className={classes.purchaseContainer}>
            <h3>Purchase Summary</h3>
            <SummaryAmount name='Total price' amount={totalPrice} isDiscount={false} />
            <SummaryAmount name='Discount' amount={discount} isDiscount={true} />
            <div className={classes.line} />
            <SummaryAmount name='Subtotal' amount={totalPrice - discount} isDiscount={false} />

            <div className={classes.buttonContainer}>
                <PrimaryButton title={'Checkout'} onClick={() => onClick()} />
            </div>
        </div>
    );
}

export default PurchaseSummary;