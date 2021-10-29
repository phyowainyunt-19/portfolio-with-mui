import React from 'react';
import { Avatar, Box, Grid, Typography } from '@material-ui/core';
import Typed from 'react-typed';
import avatar from '../../images/me.png'

import { useStyles } from './styles';

const Header = () => {

    const classes = useStyles();
    return (
        <Box className={classes.typedContainer} >
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="pwn " />
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Phyo Wai Nyunt"]} typeSpeed={40} />
            </Typography>
            <br />
            <Typography className={classes.subtitle} variant="h4">
                <Typed strings={["A Programmar", "Coding"]} typeSpeed={40} backSpeed={60} loop />
            </Typography>
        </Box>
    )
}

export default Header
