import React, { FC, useState } from 'react';

//types
import { BackgroundProps } from '../../types';

//styles
import classes from './background.module.css';

//assets
import exploreImage from '../../assets/images/EXPLORE.png'
import { FiX } from 'react-icons/fi';

//components
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { openSideBar } from '../../redux/actions';

//types
import { IRootState } from '../../redux/reducers/mainReducer';
import { width } from '../../utilities/dimensions';


const Background:FC<BackgroundProps> = ({children, bubbles, explore}) => {
    //initialization
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //localstate
    const [closeDrawer, setCloseDrawer] = useState<boolean>(false);

    //redux state
    const openSideBarState = useSelector((state: IRootState) => state.openSideBar);

    let animation;
    if(width > 800){
        animation = (
            <div className={classes.bubbles}>
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        );
    }
    

    const exploreContainer = (
        <div className={classes.explore}>
            <img alt='' src={exploreImage} />
        </div>
    );

    const handleCloseDrawer = (value: boolean) => {
        setCloseDrawer(true)
        setTimeout(() => {
            dispatch(openSideBar(value));
            setCloseDrawer(false)
        }, 700);
    };

    const handleNavigation = (location: string) => {
        dispatch(openSideBar(false));
        navigate(location)
    }

    const sideBar = (
        <div className={classes.sideBar}>
            <div className={classes.closeSection} onClick={() => handleCloseDrawer(false)}/>
            <div className={`${classes.mainSideBar} ${closeDrawer && classes.slideOut}`}>
                <div className={classes.mainSideBarClose}>
                    <div onClick={() => handleCloseDrawer(false)}>
                        <FiX />
                    </div>
                </div>
                <div className={classes.sideBarLinks}>
                    <div className={classes.div} onClick={() => handleNavigation('/')}> Discover </div>
                    <div className={classes.div} onClick={() => handleNavigation('/collections')}> Collections </div>
                    <div className={classes.cartNav} onClick={() => handleNavigation('/cart')}> <p>Cart</p> <div className={classes.cartNumber}>1</div> </div>
                </div>
            </div>
        </div>
    )
    
    return (
        <div className={classes.container}>
            {bubbles && animation}
            {explore && exploreContainer}
            <div className={classes.main}>
                {children}
            </div>
            {openSideBarState && sideBar}
        </div>
    );
}

export default Background;