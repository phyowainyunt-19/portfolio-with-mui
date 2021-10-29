import React from 'react';
import { useStyles } from './styles';

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import Facebook from '@material-ui/icons/Facebook';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Github from '@material-ui/icons/GitHub';


const Footer = () => {
    const classes = useStyles();
    return (
        <BottomNavigation width="auto" style={{ background: '#5CDB95' }}>
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<Facebook />}
            />
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<LinkedIn />}
            />
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<Github />}
            />
        </BottomNavigation >
    )
}

export default Footer
