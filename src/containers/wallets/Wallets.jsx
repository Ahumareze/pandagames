import React, { useEffect } from 'react';

//components
import { DashboardHeader, EmptyScreen, Loader, Navigation } from '../../components';
import userImage from '../../assets/data/userImage';
import Item from './Item';
import coins from '../../assets/data/coins';
import * as actions from '../../redux/actions';

//styles
import classes from './wallets.module.css';
import { useDispatch, useSelector } from 'react-redux';


function Wallets(props) {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.userData);
    const loading = useSelector(state => state.loading);

    useEffect(() => {
        dispatch(actions.fetchData());
    }, []);

    let container;
    if(userData){
        container = (
            <section className={classes.section}>
                <DashboardHeader title={`Company's Wallet`} username={userData?.fullname} image={userData?.image} />
                <div className={classes.container}>
                    {coins.map((i,idx) => (
                        <Item image={i.image} coin={i.name} address={i.address} />
                    ))}
                </div>
            </section>
        )
    }else{
        container = <EmptyScreen />
    }

    return (
        <Navigation active={`Company's Wallet`}>
            {container}
            {loading && <Loader />}
        </Navigation>
    );
}

export default Wallets;