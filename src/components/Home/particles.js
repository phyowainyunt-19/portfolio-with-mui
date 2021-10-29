import React from "react";
import { Particles as ReactParticles } from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    particlesCanvas: {
        position: "fixed",
        opacity: "5"
    },
}));

const Particles = () => {
    const classes = useStyles();

    return (
        <ReactParticles
            canvasClassName={classes.particlesCanvas}
            params={{
                "particles": {
                    "number": {
                        "value": 50
                    },
                    "color": {
                        "value": "#fff"
                    },
                    "size": {
                        "value": 3
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }}
        />
    );
};

export default Particles;
