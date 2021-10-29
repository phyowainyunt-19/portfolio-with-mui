import React from 'react';
import { useStyles } from './styles';
import { Typography, Box } from '@material-ui/core';

const Resume = () => {
    const classes = useStyles();

    return (
        <>
            <Box component="div" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    Working Experience
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography
                        variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                    >
                        2017
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography
                            variant="h5"
                            align="center"
                            className={classes.subHeading}
                        >
                            University Life
                        </Typography>
                        <Typography variant="body1" align="center" className={classes.body1}>
                            Entered into UCSY
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            className={classes.subtitle1}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
                            ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
                            Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
                            repudiandae, rerum necessitatibus nisi mollitia.
                        </Typography>
                    </Box>
                    <Typography
                        variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                    >
                        2018
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography
                            variant="h5"
                            align="center"
                            className={classes.subHeading}
                        >
                            Me & Vue
                        </Typography>
                        <Typography variant="body1" align="center" className={classes.body1}>
                            Get ball rolling with Vue Framework
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            className={classes.subtitle1}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
                            ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
                            Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
                            repudiandae, rerum necessitatibus nisi mollitia.
                        </Typography>
                    </Box>
                    <Typography
                        variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                    >
                        2019
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography
                            variant="h5"
                            align="center"
                            className={classes.subHeading}
                        >
                            Self-paced into Fullstack Development
                        </Typography>
                        <Typography variant="body1" align="center" className={classes.body1}>
                            "What we ought to know we never be taught in the classroom."
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            className={classes.subtitle1}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
                            ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
                            Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
                            repudiandae, rerum necessitatibus nisi mollitia.
                        </Typography>
                    </Box>
                    <Typography
                        variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                    >
                        2020
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography
                            variant="h5"
                            align="center"
                            className={classes.subHeading}
                        >
                            Pandemic and Coup
                        </Typography>
                        <Typography variant="body1" align="center" className={classes.body1}>
                            All my dreams faded away
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            className={classes.subtitle1}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
                            ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
                            Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
                            repudiandae, rerum necessitatibus nisi mollitia.
                        </Typography>
                    </Box>
                    <Typography
                        variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                    >
                        2021
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography
                            variant="h5"
                            align="center"
                            className={classes.subHeading}
                        >
                            Become a project junkie
                        </Typography>
                        <Typography variant="body1" align="center" className={classes.body1}>
                            Never give up
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            className={classes.subtitle1}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
                            ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
                            Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
                            repudiandae, rerum necessitatibus nisi mollitia.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Resume
