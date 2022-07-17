import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

//classes
import classes from './header.module.css';

//icons
import {FiMenu, FiX, FiHome} from 'react-icons/fi';
import {IoDocumentOutline} from 'react-icons/io5';
import {RiQuestionAnswerLine} from 'react-icons/ri';
import {BsQuestionCircle} from 'react-icons/bs';

//components
import Item from './Item';
const logo = require('../../assets/images/logo.png').default;

function Header({active, toggle}) {
    //initialize
    const history = useHistory();

    //states
    const [openDrawer, setOpenDrawer] = useState(false);
    const [closeStyle, setCloseStyle] = useState(false);

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

    const login = (preDestination) => {
        toggle(true);
        navigate(preDestination);
    };

    const register = (preDestination) => {
        toggle(false);
        navigate(preDestination);
    };

    let authButtons = (
        <div className={classes.authButtonsContainer}>
            <div className={`${classes.authButton} ${classes.authButton2}`} onClick={() => login('/accounts')}>
                Login
            </div>
            <div className={classes.authButton} onClick={() => register('/accounts')}>
                Register
            </div>
        </div>
    );
    if(active === 'Login'){
        authButtons = (
            <div className={classes.authButtonsContainer}>
                <div className={classes.authButton} onClick={() => login('/accounts')}>
                    Login
                </div>
                <div className={`${classes.authButton} ${classes.authButton2}`} onClick={() => register('/accounts')}>
                    Register
                </div>
            </div>
        )
    }
    
    return (
        <>
            <div className={classes.container}>
                <div className={classes.logoContainer}>
                    <img src={logo} alt='' />
                    <p>Apexcorp <span>Investment</span></p>
                </div>
                <div className={classes.linksContainer}>
                    <p style={active === 'Home' ? {color: '#FCD535'} : {}} onClick={() => navigate('/')}>Home</p>
                    <p style={active === 'About' ? {color: '#FCD535'} : {}} onClick={() => navigate('/about')}>About us</p>
                    <p style={active === 'Faq' ? {color: '#FCD535'} : {}} onClick={() => navigate('/faq')}>Faq</p>
                    <p style={active === 'Terms' ? {color: '#FCD535'} : {}} onClick={() => navigate('/terms')}>{'Terms & conditions'}</p>
                    {authButtons}
                    <div className={classes.hamburgeIcon} onClick={() => setOpenDrawer(true)}>
                        <FiMenu size={30} />
                    </div>
                </div>
            </div>
            {openDrawer &&
                <div className={classes.sideBar}>
                    <div className={classes.sideBarBackground} onClick={closeDrawer} />
                    <div className={!closeStyle ? classes.mainSidebar : classes.closeSideBar}>
                        <div className={classes.closeIcon} onClick={() => closeDrawer()}>
                            <FiX size={30} />
                        </div>
                        <Item name={'Home'} active={active === 'Home'} navigate={() => navigate('/')} >
                            <FiHome />
                        </Item>
                        <Item name={'About Us'} active={active === 'About'} navigate={() => navigate('/about')}>
                            <BsQuestionCircle />
                        </Item>
                        <Item name={'Faq'} active={active === 'Faq'} navigate={() => navigate('/faq')}>
                            <RiQuestionAnswerLine />
                        </Item>
                        <Item name={'Terms & Conditions'} active={active === 'Terms'} navigate={() => navigate('/terms')}>
                            <IoDocumentOutline />
                        </Item>
                        <div className={classes.authButton3} active={active === 'Home'} onClick={() => navigate('/accounts')}>
                            Login
                        </div>
                        <div className={classes.authButton4} active={active === 'Home'} onClick={() => navigate('/accounts')}>
                            Register
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Header;