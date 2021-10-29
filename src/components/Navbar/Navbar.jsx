import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, ListItem, ListItemIcon, IconButton, ListItemText, Avatar, Divider, List, Typography, Box } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons'
import Drawer from '@mui/material/Drawer';

import { useStyles, menuItems } from './styles';
import avatar from '../../images/me.png';
import Footer from '../Footer/Footer';

const Navbar = () => {

    const classes = useStyles();

    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = ((slider, open) => () => {
        setState({ ...state, [slider]: open });
    });

    const sideList = slider => (
        <Box onClick={toggleSlider(slider, false)} className={classes.menuSliderContainer} component="div">
            <Avatar className={classes.avatar} src={avatar} alt="pwn" />
            <Divider />
            <List>
                {menuItems.map((isItem, key) => (
                    <ListItem button key={key} component={Link} to={isItem.listPath}>
                        <ListItemIcon className={classes.listItem} >{isItem.listIcon}</ListItemIcon>
                        <ListItemText
                            className={classes.listItem}
                            primary={<Typography variant="h6" style={{ fontFamily: 'Titillium Web' }}>{isItem.listText}</Typography>} />
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <>
            <Box component="nav">
                <AppBar position="static" >
                    <Toolbar className={classes.toolbar} >
                        <IconButton onClick={toggleSlider("right", true)}>
                            <ArrowBack className={classes.arrowIcon} />
                        </IconButton>
                        <Typography className={classes.appbarTypo} variant="h5">Portfolio</Typography>
                        <Drawer
                            anchor="right"
                            open={state.right}
                            onClose={toggleSlider('right', false)}
                        >
                            {sideList("right")}
                            <Footer />
                        </Drawer>

                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar
