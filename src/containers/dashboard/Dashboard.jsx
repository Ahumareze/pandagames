import React from 'react';

//components
import { DashboardHeader, EmptyScreen, Loader, Navigation } from '../../components';
import Box from './components/box/Box';

//styles
import classes from './dashboard.module.css';

import * as actions from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Transactions from './components/transactions/Transactions';

function Dashboard(props) {
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
                <DashboardHeader title={'Dashboard'} username={userData?.fullname} image={userData?.image} />
                <div className={classes.boxContainer}>
                    <Box name={'Balance'} value={userData?.balance} />
                    <Box name={'Total Deposit'} value={userData?.deposit} />
                    <Box name={'Amount Earned'} value={userData?.roi} />
                    <Box name={'Withdrawn'} value={userData?.withdraw} />
                </div>
                <Transactions data={userData?.transactions} />
            </section>
        )
    }else{
        container = <EmptyScreen />
    }

    return (
        <Navigation active={'Dashboard'}>
            {container}
            {loading && <Loader />}
        </Navigation>
    );
}

export default Dashboard;