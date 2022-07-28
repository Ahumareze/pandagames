import React, { FC } from 'react';

//types
import { NavigationProps, TabProps } from '../../../../types';

//styles
import classes from '../../checkout.module.css';

const Tab:FC<TabProps> = ({title, isActive, onClick}):JSX.Element => {
    return(
        <div className={`${classes.tab} ${!isActive && classes.inActive}`} onClick={onClick}>
            <div className={classes.tabMain}>
                {title}
            </div>
            <div className={classes.tabLine} />
        </div>
    )
}

const Navigation:FC<NavigationProps> = ({onClick, activeLink}):JSX.Element => {
    return (
        <div className={classes.navigationContainer}>
            <Tab title='Details' isActive={!activeLink} onClick={() => onClick(false)} />
            <Tab title='Payment' isActive={activeLink} onClick={() => onClick(true)}/>
        </div>
    );
}

export default Navigation;