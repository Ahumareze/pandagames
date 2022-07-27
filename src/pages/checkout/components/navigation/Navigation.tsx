import React, { FC } from 'react';

//types
import { TabProps } from '../../../../types';

//styles
import classes from '../../checkout.module.css';

const Tab:FC<TabProps> = ({title, isActive}):JSX.Element => {
    return(
        <div className={`${classes.tab} ${!isActive && classes.inActive}`}>
            <div className={classes.tabMain}>
                {title}
            </div>
            <div className={classes.tabLine} />
        </div>
    )
}

function Navigation() {
    return (
        <div className={classes.navigationContainer}>
            <Tab title='Details' isActive />
            <Tab title='Payment' isActive={false}/>
        </div>
    );
}

export default Navigation;