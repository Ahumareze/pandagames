import React, { FC } from 'react';

//types
import { BackgroundProps } from '../../types';

//styles
import classes from './background.module.css';

//assets
import exploreImage from '../../assets/images/EXPLORE.png'
import { FiX } from 'react-icons/fi';

//components
import { useDispatch, useSelector } from 'react-redux';
import { openSideBar } from '../../redux/actions';

//types
import { IRootState } from '../../redux/reducers/mainReducer';


const Background:FC<BackgroundProps> = ({children, bubbles, explore}) => {
    //initialization
    const dispatch = useDispatch();

    //redux state
    const openSideBarState = useSelector((state: IRootState) => state.openSideBar);

    const animation = (
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

    const exploreContainer = (
        <div className={classes.explore}>
            <img alt='' src={exploreImage} />
        </div>
    );

    const sideBar = (
        <div className={classes.sideBar}>
            <div className={classes.closeSection} />
            <div className={classes.mainSideBar}>
                <div className={classes.mainSideBarClose}>
                    <div onClick={() => dispatch(openSideBar(false))}>
                        <FiX />
                    </div>
                </div>
                <div className={classes.sideBarLinks}>
                    <div> Discover </div>
                    <div> Collections </div>
                    <div> Cart </div>
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