import React from 'react';

//styles
import classes from './cart.module.css';

//utilities
import { cart } from '../../utilities/links';

//components
import { Background, Header, PurchaseSummary } from '../../components';
import { Item } from './components';
import games from '../../assets/data/games';
import { useNavigate } from 'react-router-dom';


function Cart() {
    //initialize
    const navigate = useNavigate();
    
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
                                <Item title={i.title} price={200} image={i.image} key={i.id} />
                            ))}
                        </div>
                    </div>
                    <PurchaseSummary isCheckout onClick={() => navigate('/checkout')} />
                </section>
            </div>
        </Background>
    );
}

export default Cart;