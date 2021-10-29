import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
        "&  .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
            fill: "#05386B",
            "&:hover": {
                fill: '#05386B',
                fontSize: '1.8rem'
            }
        }
    }
})
