import React from 'react';

//styles
import classes from './cart.module.css';

//utilities
import { cart } from '../../utilities/links';

//components
import { Background, Header } from '../../components';
import { Item } from './components';

function Cart() {
    return (
        <Background bubbles={false} explore={false}>
            <div className={classes.container}>
                <Header active={cart} />
                <section className={classes.section}>
                    <div className={classes.cartContainer}>
                        <div className={classes.intro}>
                            <h2>My Cart</h2>
                            <p>Games added to cart till appear below</p>
                        </div>
                        
                        <div className={classes.gamesContainer}>
                            <Item />
                        </div>
                    </div>
                </section>
            </div>
        </Background>
    );
}

export default Cart;