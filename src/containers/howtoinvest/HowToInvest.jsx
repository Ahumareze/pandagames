import React, { useEffect } from 'react';

//components
import { DashboardHeader, EmptyScreen, Loader, Navigation } from '../../components';

//styles
import classes from './howtoinvest.module.css';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';

function HowToInvest(props) {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.userData);
    const loading = useSelector(state => state.loading);

    useEffect(() => {
        dispatch(actions.fetchData());
    }, []);

    let container;
    if(userData){
        container = (
            <section className={classes.body}>
                <DashboardHeader title={'How To Invest'} username={userData?.fullname} image={userData?.image} />
                <div className={classes.container}>
                    <div className={classes.main}>
                        <h3>Steps to Invest</h3>
                        <div className={classes.items}>
                            <p>1.</p><p>Click on Deposit</p>
                        </div>
                        <div className={classes.items}>
                            <p>2.</p><p>Choose your investment plan</p>
                        </div>
                        <div className={classes.items}>
                            <p>3.</p><p>Choose the coin you are investing in</p>
                        </div>
                        <div className={classes.items}>
                            <p>4.</p><p>Fill in your Email and your receiving wallet address</p>
                        </div>
                        <div className={classes.items}>
                            <p>5.</p><p>Click on invest</p>
                        </div>
                        <div className={classes.items}>
                            <p>6.</p><p>Send your Investment to the company's wallet address</p>
                        </div>
                        <div className={classes.items}>
                            <p>7.</p><p>Send the investment proof to our live support at the bottom right of the site or any of our authorized agent</p>
                        </div>
                        <div className={classes.items}>
                            <p>8.</p><p>Contact our 24/7 live support for assistance when need arises</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }else{
        container = (
            <EmptyScreen />
        )
    }

    return (
        <Navigation active={'How To Invest'}>
            {container}
            {loading && <Loader />}
        </Navigation>
    );
}

export default HowToInvest;