import React from 'react';
import { Box, Grid, Card, CardHeader, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { Avatar } from '@mui/material';

import { useStyles, projects } from './styles';

const Portfolio = () => {
    const classes = useStyles();
    return (
        <>
            <Box component="div" className={classes.mainContainer}>
                <Grid container justify="center">
                    {projects.map((project, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <Card className={classes.cardContainer}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: '#5CDB95', color: "#05386B" }} aria-label="recipe">
                                            {project.avatarTitle}
                                        </Avatar>
                                    }
                                    title={project.title}
                                    subheader={project.date}
                                />
                                <CardActionArea>
                                    <CardMedia component="img" alt="pj1" height="140" image={project.image} />
                                    <CardContent>
                                        <Typography color="textSecondary" component="paragraph" variant="body2">
                                            {project.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Source
                                        </Button>
                                        <Button size="small" color="primary">
                                            Live Demo
                                        </Button>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}

export default Portfolio
