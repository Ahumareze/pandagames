import React, { useEffect, useState } from 'react';

//components
import { Button, DashboardHeader, EmptyScreen, Loader, Navigation, Success } from '../../components';
import coins from '../../assets/data/coins';

//styles
import classes from './deposit.module.css';
import CurrencyInput from './components/CurrencyInput';
import CurrencyModal from './components/currencyModal';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';

function Deposit(props) {
    const [coin, setCoin] = useState(coins[1]);
    const [openCurrencyModal, setOpenCurrencyModal] = useState(false);
    const [amount, setAmount] = useState(200);

    const dispatch = useDispatch();
    const userData = useSelector(state => state.userData);
    const loading = useSelector(state => state.loading);
    const success = useSelector(state => state.success);

    useEffect(() => {
        dispatch(actions.fetchData());
    }, []);

    const submit = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;

        const data = {
            coin: coin.name,
            amount: JSON.parse(amount),
            date: today,
            status: "pending",
            type: "Deposit"
        };
        dispatch(actions.deposit(data, userData))
    }
    
    let container;
    if(userData){
        container = (
            <section>
                <DashboardHeader title={'Deposit'} username={userData?.fullname} image={userData?.image} />
                <div className={classes.container}>
                    <div className={classes.main}>
                        <CurrencyInput selected={coin} onClick={() => setOpenCurrencyModal(true)}/>
                        <select >
                            {coin.network.map(i => (
                                <option key={i} value={i}>{i}</option>
                            ))}
                        </select>
                        <div className={classes.inputMain}>
                            <p>Amount in Dollars</p>
                            <input type={'number'} placeholder={250} onChange={(e) => setAmount(e.target.value)} />
                        </div>
                        <Button name={'Proceed'} onClick={submit} />
                        <p className={classes.note}>Note: All deposits must be above $200 (i.e Minumum deposit is $200), contact the admins or customer care for more info concerning deposits</p>
                    </div>
                </div>
            </section>
        )
    }else{
        container = <EmptyScreen />
    }

    return (
        <Navigation active={'Deposit'}>
            {container}
            {loading && <Loader />}
            {openCurrencyModal && <CurrencyModal type={'Change Currency'} data={coins} close={() => setOpenCurrencyModal(false)} active={coin.name} updateMainCoin={(e) => setCoin(e)} />}
            {success && <Success type={'deposit'} close={() => dispatch(actions.setSuccess(false))} />}
        </Navigation>
    );
}

export default Deposit;