import React, { useEffect, useState } from 'react';

//components
import { DashboardHeader, Navigation, Button, Success, EmptyScreen, Loader } from '../../components';
import CurrencyInput from '../deposit/components/CurrencyInput';
import CurrencyModal from '../deposit/components/currencyModal';
import coins from '../../assets/data/coins';
import wallets from '../../assets/data/wallets';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';

//styles
import classes from './withdraw.module.css';

function Withdraw(props) {
    const [coin, setCoin] = useState(coins[1]);
    const [wallet, setWallet] = useState(wallets[0]);
    const [openCurrencyModal, setOpenCurrencyModal] = useState(false);
    const [walletModal, setWalletModal] = useState(false);
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
            type: "Withdrawal"
        };
        dispatch(actions.deposit(data, userData))
    }
    
    let container;
    if(userData){
        container = (
            <section>
                <DashboardHeader title={'Withdraw'} username={userData?.fullname} image={userData?.image} />
                <div className={classes.container}>
                    <div className={classes.main}>
                        <div className={classes.inputMain}>
                            <p>Amount in Dollars</p>
                            <div className={classes.amountDiv}>
                                <input type={'number'} placeholder={200} defaultValue={amount} />
                            </div>
                        </div>

                        <CurrencyInput selected={coin} onClick={() => setOpenCurrencyModal(true)}/>

                        <div className={classes.recievingwalletDiv}>
                            <p className={classes.recievingwalletP}>Recieving Wallet</p>
                            <CurrencyInput selected={wallet} onClick={() => setWalletModal(true)}/>
                        </div>

                        <div className={`${classes.inputMain} ${classes.inputMain2}`}>
                            <p>Wallet Address</p>
                            <input />
                        </div>

                        <Button name={'Proceed'} onClick={submit} />
                        <p className={classes.note}>Note: A 30% tax fee is attaced to every withdrawal above $1000</p>
                    </div>
                </div>
            </section>
        )
    }else{
        container = <EmptyScreen />
    }

    return (
        <Navigation active={'Withdraw'}>
            {container}
            {loading && <Loader />}
            {openCurrencyModal && <CurrencyModal type={'Change Currency'} data={coins} close={() => setOpenCurrencyModal(false)} active={coin.name} updateMainCoin={(e) => setCoin(e)} />}
            {walletModal && <CurrencyModal type={'Change Wallet'} data={wallets} close={() => setWalletModal(false)} active={wallet.name} updateMainCoin={(e) => setWallet(e)} />}
            {success && <Success type={'withdrawal'} close={() => dispatch(actions.setSuccess(false))} />}
        </Navigation>
    );
}

export default Withdraw;