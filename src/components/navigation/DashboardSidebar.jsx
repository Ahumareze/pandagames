import React from 'react';

//styles
import classes from './navigation.module.css';

//components
import NavLink from './NavLink';

//icons
import {RiDashboardFill} from 'react-icons/ri';
import {AiFillBank} from 'react-icons/ai';
import {BsCashStack} from 'react-icons/bs';
import {MdLogout} from 'react-icons/md';
import {FaParachuteBox, FaWallet, FaUsers} from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
const logo = require('../../assets/images/logo.png').default;

function DashboardSidebar({active}) {
    const dispatch = useDispatch();
    //initialize
    const history = useHistory();

    const navigate = (destination) => {
        history.push(destination);
    };

    const logout = () => {
        dispatch(actions.logout());
    }

    return (
        <div className={classes.sidebar}>
            <div className={classes.Sidebarlogo}>
                <div className={classes.logoContainer} onClick={() => navigate('/')}>
                    <img src={logo} alt='' />
                    <p>Apexcorp <span>Investment</span></p>
                </div>
            </div>
            <div className={classes.sidebarLinks}>
                <NavLink name={'Dashboard'} active={active === 'Dashboard'} onClick={() => navigate('/dashboard')}>
                    <RiDashboardFill />
                </NavLink>
                <NavLink name={'Deposit'} active={active === 'Deposit'} onClick={() => navigate('/deposit')}>
                    <AiFillBank />
                </NavLink>
                <NavLink name={'Withdraw'} active={active === 'Withdraw'} onClick={() => navigate('/withdraw')}>
                    <BsCashStack />
                </NavLink>
                <NavLink name={'How To Invest'} active={active === 'How To Invest'} onClick={() => navigate('/how-to-invest')}>
                    <FaParachuteBox />
                </NavLink>
                <NavLink name={`Company's Wallet`} active={active === `Company's Wallet`} onClick={() => navigate('/companys-wallet')}>
                    <FaWallet />
                </NavLink>
                <NavLink name={'Referrals'} active={active === 'Referrals'} onClick={() => navigate('/referrals')}>
                    <FaUsers />
                </NavLink>
            </div>
            <div className={`${classes.navLink} ${classes.logoutLink}`} onClick={logout} >
                <MdLogout />
                <p>Log Out</p>
            </div>
        </div>
    );
}

export default DashboardSidebar;