import React from 'react';
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import { useStyles, InputField } from './styles';


const Contacts = () => {
    const classes = useStyles();

    return (
        <Box component="div" style={{background: '#8EE4AF', height: "100vh"}}>
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography variant="h5" className={classes.heading}>
                        Reach Me...
                    </Typography>
                    <InputField
                        fullWidth={true}
                        label="Name"
                        variant="outlined"
                        inputProps={{ style: { color: 'white' } }}
                        margin="dense"
                        size="medium"
                    />
                    <br />
                    <InputField
                        fullWidth={true}
                        label="Email"
                        variant="outlined"
                        inputProps={{ style: { color: 'white' } }}
                        margin="dense"
                        size="medium"
                    />
                    <br />
                    <InputField
                        fullWidth={true}
                        label="Description"
                        variant="outlined"
                        inputProps={{ style: { color: 'white' } }}
                        margin="dense"
                        size="medium"
                    />
                    <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon />}>
                        Contact Me
                    </Button>
                </Box>
            </Grid>
        </Box>
    )
}

export default Contacts
