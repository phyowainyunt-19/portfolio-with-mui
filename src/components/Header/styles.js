import { makeStyles } from '@material-ui/core/styles';

import { createTheme } from '@mui/material/styles';
// eslint-disable-next-line
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

export const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        fontFamily: 'Titillium Web',
        color: main_theme.palette.secondary.main
    },
    subtitle: {
        fontFamily: 'Titillium Web',
        color: main_theme.palette.secondary.main,
        marginBottom: '3rem'
    },
    typedContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        textAlign: 'center',
        zIndex: 1,
        // backgroundColor: main_theme.palette.primary.light
    }
}))
