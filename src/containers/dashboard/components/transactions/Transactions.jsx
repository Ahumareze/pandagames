import React from 'react';
import { useHistory } from 'react-router-dom';

//components
import { Button } from '../../../../components';
import Item from './Item';
import Lottie from 'react-lottie';
import animation from '../../../../assets/animations/emptyTransaction.json';

//styles
import classes from './transactions.module.css';

function Transactions({data = []}) {
    const history = useHistory();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    
    let container;
    if(data.length > 0){
        container = (
            <div>
                {data.map((i, idx) => (
                    <Item coin={i.coin} type={i.type} amount={i.amount} date={i.date} status={i.status} key={idx} />
                ))}
            </div>
        )
    }else{
        container = (
            <div className={classes.emptyTransaction}>
                <Lottie
                    options={defaultOptions}
                    height={120}
                    width={120}
                />
                <p>You haven't made any transaction yet</p>
            </div>
        )
    }

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h3>Transaction History</h3>
                <div>
                    <Button name={'New Transaction'} onClick={() => history.push('/deposit')} />
                </div>
            </div>
            <div className={classes.detailsHeader}>
                <div>Title</div>
                <div className={classes.dspNone}>Type</div>
                <div>Amount</div>
                <div className={classes.dspNone}>Date</div>
                <div className={classes.status}>Status</div>
            </div>
            {container}
        </div>
    );
}

export default Transactions;