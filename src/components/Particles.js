import React from "react";
import { Particles as ReactParticles } from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    particlesCanvas: {
        position: "fixed",
        opacity: "3"
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
                        "value": 160,
                        "density": {
                            "enable": false
                        }
                    },
                    "color": {
                        "value": "#379683"
                    },
                    "size": {
                        "value": 10,
                        "random": true
                    },
                    "move": {
                        "direction": "bottom",
                        "out_mode": "out"
                    },
                    "line_linked": {
                        "enable": false
                    }
                },
                "interactivity": {
                    "events": {
                        "onclick": {
                            "enable": true,
                            "mode": "remove"
                        }
                    },
                    "modes": {
                        "remove": {
                            "particles_nb": 10
                        }
                    }
                }
            }}
        />
    );
};

export default Particles;
