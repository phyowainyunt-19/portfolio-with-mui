import { makeStyles } from '@material-ui/core/styles';

import project1 from '../../images/html-css-javascript-lg.jpg';
import project2 from '../../images/javascript-fullstack.jpg';
import project3 from '../../images/react-redux.jpg';
import project4 from '../../images/mern-stack.jpg';

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
    mainContainer: {
        background: main_theme.palette.secondary.dark,
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "3rem",
        margin: "5rem auto",
    }
});


export const projects = [
    {
        title: "Travel Advisor",
        avatarTitle: "TA",
        date: "September 14, 2016",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
      consequatur magni quod nesciunt necessitatibus molestiae non
      eligendi, magnam est aliquam recusandae? Magnam soluta minus
      iste alias sunt veritatis nisi dolores!`,
        image: project1,
    },
    {
        title: "E-commerce",
        avatarTitle: "E",
        date: "September 14, 2016",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
      consequatur magni quod nesciunt necessitatibus molestiae non\
      eligendi, magnam est aliquam recusandae? Magnam soluta minus\
      iste alias sunt veritatis nisi dolores!`,
        image: project2,
    },
    {
        title: "Chat Pager",
        avatarTitle: "CH",
        date: "September 14, 2016",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
      consequatur magni quod nesciunt necessitatibus molestiae non\
      eligendi, magnam est aliquam recusandae? Magnam soluta minus\
      iste alias sunt veritatis nisi dolores!`,
        image: project3,
    },
    {
        title: "Google Search",
        avatarTitle: "GS",
        date: "September 14, 2016",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
      consequatur magni quod nesciunt necessitatibus molestiae non\
      eligendi, magnam est aliquam recusandae? Magnam soluta minus\
      iste alias sunt veritatis nisi dolores!`,
        image: project4,
    },
    {
        title: "Expense Tracker",
        avatarTitle: "ET",
        date: "September 14, 2016",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
      consequatur magni quod nesciunt necessitatibus molestiae non\
      eligendi, magnam est aliquam recusandae? Magnam soluta minus\
      iste alias sunt veritatis nisi dolores!`,
        image: project4,
    },
];