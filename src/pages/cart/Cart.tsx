import React, { FC } from 'react';

//styles
import classes from './cart.module.css';

//types
import { SummaryAmountProps } from '../../types';

//utilities
import { cart } from '../../utilities/links';

//components
import { Background, Header, PrimaryButton } from '../../components';
import { Item } from './components';
import games from '../../assets/data/games';


const SummaryAmount:FC<SummaryAmountProps> = ({name, amount, isDiscount}):JSX.Element => {
    return(
        <div className={classes.summaryAmount}>
            <p>{name}</p>
            {isDiscount ? <div>-${amount.toFixed(2)}</div> : <div>${amount.toFixed(2)}</div>}
        </div>
    )
}

function Cart() {
    return (
        <Background bubbles={false} explore={false}>
            <div className={classes.container}>
                <Header active={cart} />
                <section className={classes.section}>
                    <div className={classes.cartContainer}>
                        <div className={classes.intro}>
                            <h2>My Cart</h2>
                            <p>Games added to cart will appear below</p>
                        </div>
                        
                        <div className={classes.gamesContainer}>
                            {games.map(i => (
                                <Item title={i.title} price={i.price} image={i.image} key={i.id} />
                            ))}
                        </div>
                    </div>
                    <div className={classes.purchaseContainer}>
                        <h3>Purchase Summary</h3>
                        <SummaryAmount name='Total price' amount={39.00} isDiscount={false} />
                        <SummaryAmount name='Discount' amount={3.00} isDiscount={true} />
                        <div className={classes.line} />
                        <SummaryAmount name='Subtotal' amount={36.00} isDiscount={false} />

                        <div className={classes.buttonContainer}>
                            <PrimaryButton title={'Checkout'} onClick={() => console.log('')} />
                        </div>
                    </div>
                </section>
            </div>
        </Background>
    );
}

export default Cart;