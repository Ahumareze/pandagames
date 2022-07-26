import React, { FC } from 'react';

//types
import { HeaderProps } from '../../types';

//styles
import classes from './header.module.css';

//components
import Searchbar from './searchbar/Searchbar';
import { useNavigate } from 'react-router-dom';

//utilities
import {home, collections, cart} from '../../utilities/links';

const Header:FC<HeaderProps> = ({active}):JSX.Element => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path)
    }

    return (
        <div className={classes.header}>
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
                        style={active === collections ? {color: '#BCCFFF'} : {}}
                        onClick={() => handleNavigation('/collections')}
                    >
                        Collections
                    </div>
                    <div 
                        className={classes.links} 
                        style={active === cart ? {color: '#BCCFFF'} : {}}
                        onClick={() => handleNavigation('/cart')}
                    >
                        Cart
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;