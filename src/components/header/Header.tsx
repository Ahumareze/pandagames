import React, { FC, useEffect } from 'react';

//types
import { HeaderProps } from '../../types';

//styles
import classes from './header.module.css';

//components
import Searchbar from './searchbar/Searchbar';
import { useNavigate } from 'react-router-dom';
import { fetchCartData, openSideBar } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../redux/reducers/mainReducer';

//utilities
import {home, collectionsLink, cart} from '../../utilities/links';
import { width } from '../../utilities/dimensions';
import { FiMenu, FiSearch, FiShoppingCart } from 'react-icons/fi';


const Header:FC<HeaderProps> = ({active}):JSX.Element => {
    //initialization
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //redux state
    const cartData = useSelector((state: IRootState) => state.cartData);

    const handleNavigation = (path: string) => {
        navigate(path)
    };

    useEffect(() => {
        console.log(cartData?.length);
    }, [cartData])

    useEffect(() => {
        dispatch(fetchCartData())
    }, [dispatch]);

    const cartNumber = (
        <div className={classes.cartNumber}>
            {cartData ? cartData.length : 0}
        </div>
    );

    const miniHeader = (
        <div className={classes.miniHeader}>
            <div className={classes.miniLogoContainer}>

            </div>
            <div className={classes.miniHeaderComponents}>
                <div onClick={() => handleNavigation('/search')}>
                    <FiSearch />
                </div>
                <div onClick={() => handleNavigation('/cart')}>
                    <FiShoppingCart />
                </div>
                <div onClick={() => dispatch(openSideBar(true))}>
                    <FiMenu />
                </div>
            </div>
        </div>
    );

    const largeHeader = (
        <div className={classes.container}>
            <div className={classes.logoContainer}>PandaGames</div>
            <div className={classes.secondContainer}>
                <Searchbar />
                <div 
                    className={classes.links} 
                    style={active === home ? {color: '#BCCFFF'} : {}}
                    onClick={() => handleNavigation('/')}
                >
                    Discover
                </div>
                <div 
                    className={classes.links} 
                    style={active === collectionsLink ? {color: '#BCCFFF'} : {}}
                    onClick={() => handleNavigation('/collections')}
                >
                    Collections
                </div>
                <div 
                    className={classes.cartLink} 
                    style={active === cart ? {color: '#BCCFFF'} : {}}
                    onClick={() => handleNavigation('/cart')}
                >
                    Cart {cartData?.length > 0 && cartNumber}
                </div>
            </div>
        </div>
    )

    return (
        <div className={classes.header}>
            {width > 600 ? largeHeader : miniHeader}
        </div>
    );
}

export default Header;