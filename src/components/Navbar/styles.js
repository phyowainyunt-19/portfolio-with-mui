import { makeStyles } from '@material-ui/core/styles';

// eslint-disable-next-line
import { AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons'

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

export const useStyles = makeStyles(theme => ({
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    menuSliderContainer: {
        width: 250,
        background: main_theme.palette.primary.light,
        height: "100%"
    },
    toolbar: {
        backgroundColor: main_theme.palette.primary.light,
    },
    arrowIcon: {
        color: main_theme.palette.primary.dark
    },
    appbarTypo: {
        fontFamily: 'Titillium Web',
        color: main_theme.palette.primary.dark
    },
    listItem: {
        color: main_theme.palette.primary.dark
    }

}));


export const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: '/'
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: '/resume'
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio",
        listPath: '/portfolio'
    },
    {
        listIcon: <ContactMail />,
        listText: "ContactMail",
        listPath: '/contact'
    }
]
