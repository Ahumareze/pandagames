import React, { useEffect, useState } from 'react';

//compoents
import { DashboardHeader, EmptyScreen, Loader, Navigation } from '../../components';
import userImage from '../../assets/data/userImage';

//styles
import classes from './referalls.module.css';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';
import Item from './Item';

function Referalls(props) {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.userData);
    const loading = useSelector(state => state.loading);
    const referrals = useSelector(state => state.referrals);

    const [newUsername, setNewUsername] = useState(userData?.fullname);

    useEffect(() => {
        dispatch(actions.fetchData());
    }, []);

    useEffect(() => {
        if(userData?.fullname){
            const usernameArr = userData?.fullname.split(' ');

            setNewUsername(usernameArr[0] + '906281')
            dispatch(actions.fetchReferalls(usernameArr[0] + '906281'))
        }
    }, [userData?.fullname]);

    let refItems;
    if(referrals?.length > 0){
        refItems = (
            <div className={classes.referallsDiv}>
                <h3>Referalls</h3>
                {referrals.map((i, idx) => (
                    <Item key={idx} fullname={i.fullname} />
                ))}
            </div>
        )
    }

    let container;
    if(userData){
        container = (
            <section className={classes.section}>
                <DashboardHeader title={`Referrals`} username={userData?.fullname} image={userData?.image} />
                <div className={classes.container}>
                    <div className={classes.main1}>
                        <h3>Refer us and earn</h3>
                        <div className={classes.mainContainer}>
                            <div>
                                <p className={classes.number}>{referrals?.length}</p>
                                <p className={classes.main1p}>Referrals</p>
                            </div>
                        </div>
                        <h4>Invite your family and friends to Apexcorp Investment and earn $5 instantly and more percentage referral bonuses according to the plan made by your referee</h4>
                        <p className={classes.text}>Each member has a unique Apexcorp Investment referral code to share with family and friends and receive $5 instantly and more percentage referral bonuses from your referee investment plan made. If any one signs up with your referral code, he or she will be added to your referral program. Your referral code can be used to invite as many users as possible.</p>
                        <div className={classes.codeContainer}>
                            <p className={classes.codeP1}>Your referral code is:</p>
                            <p className={classes.codeP2}>{newUsername ? newUsername : ''}</p>
                        </div>
                    </div>
                    {refItems}
                </div>
            </section>
        )
    }else{
        container = <EmptyScreen />
    }

    return (
        <Navigation active={`Referrals`}>
            {container}
            {loading && <Loader /> }
        </Navigation>
    );
};

export default Referalls;