import React from 'react';

//styles
import classes from './cart.module.css';

//utilities
import { cart } from '../../utilities/links';

//components
import { Background, Header, PurchaseSummary } from '../../components';
import { Item } from './components';
import games from '../../assets/data/games';


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
                    <PurchaseSummary />
                </section>
            </div>
        </Background>
    );
}

export default Cart;