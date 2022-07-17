import React from 'react';
import DashboardSidebar from './DashboardSidebar';

//styles
import classes from './navigation.module.css';

function Navigation({children, active}) {
    return (
        <div className={classes.container}>
            <DashboardSidebar active={active} />
            {children}
        </div>
    );
}

export default Navigation;