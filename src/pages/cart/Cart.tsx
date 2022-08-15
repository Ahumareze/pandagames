import React, { useEffect } from 'react';

//styles
import classes from './cart.module.css';

//utilities
import { cart } from '../../utilities/links';

//components
import { Background, Header, PurchaseSummary, Error } from '../../components';
import { Item } from './components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartData, removeItem } from '../../redux/actions';

//types
import { IRootState } from '../../redux/reducers/mainReducer';


function Cart() {
    //initialize
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //redux state
    const cartData = useSelector((state: IRootState) => state.cartData);

    useEffect(() => {
        dispatch(fetchCartData())
    }, [dispatch]);

    let container;

    if(cartData && cartData.length > 0){
        container = (
            <section className={classes.section}>
                <div className={classes.cartContainer}>
                    <div className={classes.intro}>
                        <h2>My Cart</h2>
                        <p>Games added to cart will appear below</p>
                    </div>
                    
                    <div className={classes.gamesContainer}>
                        {cartData.map((i: any, idx: number) => (
                            <Item
                                title={i.name} 
                                price={i.mainPrice} 
                                image={i.images[0]}
                                id={i.id}
                                prices={i.prices}
                                onDelete={() =>dispatch(removeItem(idx))}
                                key={i.idx}
                            />
                        ))}
                    </div>
                </div>
                <PurchaseSummary
                    onClick={() => navigate('/checkout')}
                />
            </section>
        )
    }else{
        container = <Error title={'Empty Cart'} details={'Please add items to cart then proceed to checkout'} />
    }
    
    return (
        <Background bubbles={false} explore={false}>
            <div className={classes.container}>
                <Header active={cart} />
                {container}
            </div>
        </Background>
    );
}

export default Cart;