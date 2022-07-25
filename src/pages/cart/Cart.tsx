import React from 'react';

//styles
import classes from './cart.module.css';

//utilities
import { cart } from '../../utilities/links';

//components
import { Background, Header } from '../../components';

function Cart() {
    return (
        <Background bubbles={false} explore={false}>
            <div className={classes.container}>
                <Header active={cart} />
            </div>
        </Background>
    );
}

export default Cart;