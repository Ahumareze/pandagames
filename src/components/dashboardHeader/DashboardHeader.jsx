import React, { useState } from 'react';

//styles
import classes from './dashboardHeader.module.css';
import Item from '../header/Item';
import { useHistory } from 'react-router-dom';

//icons
import {FiMenu, FiX} from 'react-icons/fi';

import {RiDashboardFill} from 'react-icons/ri';
import {AiFillBank} from 'react-icons/ai';
import {BsCashStack} from 'react-icons/bs';
import {FaParachuteBox, FaWallet, FaUsers} from 'react-icons/fa';
import { useEffect } from 'react';

function DashboardHeader({image, username, title}) {
    const active = title
    //initialize
    const history = useHistory();

    //states
    const [openDrawer, setOpenDrawer] = useState(false);
    const [closeStyle, setCloseStyle] = useState(false);
    const [newUsername, setNewUsername] = useState('');

    const closeDrawer = () => {
        setCloseStyle(true);
        setTimeout(() => {
            setCloseStyle(false);
            setOpenDrawer(false);
        }, 600)
    };

    const navigate = (destination) => {
        history.push(destination);
    };

    useEffect(() => {
        if(username){
            const usernameArr = username?.split(' ');
            setNewUsername(usernameArr[0]);
        }
    }, [username])

    
    return (
        <>
            <div className={classes.container}>
                <div className={classes.logoContainer}>
                    <FiMenu className={classes.icon} onClick={() => setOpenDrawer(true)} />
                    <h2>{active}</h2>
                </div>
                <div className={classes.userDetails}>
                    <p><span>Hello,</span> {newUsername} 👋</p>
                    <div 
                        className={classes.userImage} 
                        style={active === 'Profile' ? {backgroundImage: `url(${image})`, borderWidth: 2, borderColor: '#FCD535', borderStyle: 'solid'} : {backgroundImage: `url(${image})`}} 
                        onClick={() => navigate('/profile')} 
                    />
                </div>
            </div>
        {openDrawer &&
            <div className={classes.sideBar}>
                <div className={classes.sideBarBackground} onClick={closeDrawer} />
                <div className={!closeStyle ? classes.mainSidebar : classes.closeSideBar}>
                    <div className={classes.closeIcon} onClick={() => closeDrawer()}>
                        <FiX size={30} />
                    </div>
                    <Item name={'Dashboard'} active={active === 'Dashboard'} navigate={() => navigate('/dashboard')} >
                        <RiDashboardFill />
                    </Item>
                    <Item name={'Deposit'} active={active === 'Deposit'} navigate={() => navigate('/deposit')}>
                        <AiFillBank />
                    </Item>
                    <Item name={'Withdraw'} active={active === 'Withdraw'} navigate={() => navigate('/withdraw')}>
                        <BsCashStack />
                    </Item>
                    <Item name={'How To Invest'} active={active === 'How To Invest'} navigate={() => navigate('/how-to-invest')}>
                        <FaParachuteBox />
                    </Item>
                    <Item name={`Company's Wallet`} active={active === `Company's Wallet`} navigate={() => navigate('/companys-wallet')}>
                        <FaWallet />
                    </Item>
                    <Item name={`Referrals`} active={active === 'Referrals'} navigate={() => navigate('/referrals')}>
                        <FaUsers />
                    </Item>
                </div>
            </div>
        }
        </>
    );
}

export default DashboardHeader;