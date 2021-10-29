import { TextField } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { createTheme } from '@mui/material/styles';

const main_theme = createTheme({
    palette: {
        primary: {
            light: '#5CDB95',
            main: '#379683',
            dark: '#05386B',
        },
        secondary: {
            light: '#fff',
            main: '#EDF5E1',
            dark: '#8EE4AF',
        },
    },
});


export const useStyles = makeStyles({
    form: {
        top: '50%',
        left: '50%',
        transform: "translate(-50%, -50%)",
        position: 'absolute',
    },
    heading: {
        color: main_theme.palette.primary.dark,
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    button: {
        marginTop: '1rem',
        color: main_theme.palette.primary.dark,
        borderColor: main_theme.palette.primary.dark
    }
});

export const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: main_theme.palette.primary.main,
        },
        "& label": {
            color: main_theme.palette.primary.dark
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: main_theme.palette.primary.dark
            },
            "&:hover fieldset": {
                borderColor: main_theme.palette.primary.main
            },
            "& .Mui-focused fieldset": {
                borderColor: main_theme.palette.primary.dark
            }
        }
    }
})(TextField);