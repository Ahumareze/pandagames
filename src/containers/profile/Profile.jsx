import React from 'react';

//styles
import classes from './profile.module.css';

//components
import * as actions from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { DashboardHeader, Loader, Navigation } from '../../components';
import Item from './Item';
import { useHistory } from 'react-router-dom';

function Profile(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const userData = useSelector(state => state.userData);
    const loading = useSelector(state => state.loading);

    useEffect(() => {
        dispatch(actions.fetchData());
    }, []);

    const navigate = (destination) => {
        history.push(destination);
    };

    const logout = () => {
        dispatch(actions.logout());
    }

    const selectImage = (e) => {
        dispatch(actions.updateProfile(e, userData?.key, userData))
    }

    const container = (
        <div className={classes.container}>
            <DashboardHeader title={'Profile'} username={userData?.fullname} image={userData?.image} />
            <div className={classes.main}>
                <div className={classes.image} style={{backgroundImage: `url(${userData?.image})`}} />

                <label htmlFor='file-input'>
                    <p className={classes.addPhotoText}>Add Photo</p>
                    <input id='file-input' type={'file'} accept='/image' onChange={(e) => selectImage(e.target.files[0])} />
                </label>
                
                <p className={classes.fullname}>{userData?.fullname}</p>
                <p className={classes.email}>{userData?.email}</p>

                <div className={classes.settings}>
                    <h3>Account</h3>
                    <Item name={'Deposit'} onClick={() => navigate('/deposit')}/>
                    <Item name={'Withdraw'} onClick={() => navigate('/withdraw')}/>
                    <Item name={'Referrals'} onClick={() => navigate('/referrals')}/>

                    <h3>Settings</h3>
                    <Item name={'Logout'} onClick={logout}/>
                </div>
            </div>
        </div>
    );

    return (
        <Navigation active={''}>
            {container}
            {loading && <Loader />}
        </Navigation>
    );
}

export default Profile;