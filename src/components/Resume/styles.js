import { makeStyles } from '@material-ui/core/styles';

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
    mainContainer: {
        background: main_theme.palette.secondary.dark,
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "o auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid #fff",
            right: "40px",
            top: 0,
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both",
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto",
            },
        },
    },
    timeLineItem: {
        fontFamily: 'Titillium Web',
        padding: "1rem",
        borderBottom: "2px solid #fff",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute",
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "#05386B #05386B transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)",
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "#fff",
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent #05386B #05386B",
            },
        },
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        color: "#fff",
        background: "#05386B",
        lineHeight: 1,
        padding: "0.5rem 1rem",
        "&:before": {
            display: "none",
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto",
            },
            "&:nth-of-type(2n):before": {
                display: "none",
            },
        },
    },
    heading: {
        color: "#05386B",
        padding: "3rem 0",
        textTransform: "uppercase",
        fontFamily: 'Titillium Web',
    },
    subHeading: {
        color: "#05386B",
        padding: 0,
        textTransform: "uppercase",
        fontFamily: 'Titillium Web',
    },
    body1: {
        color: "#fff",
        fontFamily: 'Titillium Web',
    },
    subtitle1: {
        color: "#05386B",
        fontFamily: 'Titillium Web',
    },
}))