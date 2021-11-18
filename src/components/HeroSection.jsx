import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Hidden from '@material-ui/core/Hidden'
import Zoom from '@material-ui/core/Zoom'
import { makeStyles } from '@material-ui/core/styles'
import Social from './Social';
import { StaticImage } from 'gatsby-plugin-image';

const videoBackground = {
    url: 'https://player.vimeo.com/external/491565607.hd.mp4?s=430f63ce2e283bfa266284df3de0fc4d734b984d&profile_id=175&oauth2_token_id=57447761',
    type: 'video/mp4'
}


const useStyles = makeStyles(theme => ({
    section: {
        height: "90vh",
        position: "relative"
    },
    content: {
        height: "100%",
        zIndex: 2,
        position: "relative"
    },
    container: {
        height: "100%"
    },
    overlay: {
        backgroundColor: "rgba(0,0,0,0.7)",
        height: "100%",
        position: "absolute",
        width: "100%",
        zIndex: 2
    },
    heroImage: {
        height: "100%",
        position: "absolute",
        width: "100%",
        zIndex: 1
    },
    video: {
        position: 'absolute',
        width: '100%',
        height: '90vh',
        zIndex: 1
    }
}));

function Video() {
    const styles = useStyles()
    console.log(videoBackground);
    return (
        <video
            className={styles.video}
            loop
            muted
            autoPlay
            id='video'
        >
            <source
                src={videoBackground.url}
                type={videoBackground.type}
            />
        </video>
    )
}





export default function HeroSection() {
    const styles = useStyles()
    const [shouldShow, setShouldShow] = useState(false);
    useEffect(() => {
        setShouldShow(true);
    });
    return (
        <Paper className={styles.section} id="about">
            {/* <StaticImage className={styles.heroImage} src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="background" /> */}
            <Video source={videoBackground.source} type={videoBackground.type} />
            <div className={styles.overlay}>
                <Container maxWidth="md" className={styles.container}>
                    <Grid container alignItems="center" justifyContent="space-between" className={styles.content}>
                        <Zoom in={shouldShow}>
                            <Grid item sm={8}>
                                <Typography component="h1" variant="h3">Hi, we are Presente Digital. A software company</Typography>
                                <Typography variant="h5">We build websites, web applications and responsive user interfaces.</Typography>
                                <Box my={4}>
                                    <Button href="mailto:presentedigital.es@gmail.com" variant="outlined" size="large">Contacto</Button>
                                </Box>
                            </Grid>
                        </Zoom>
                        <Hidden xsDown>
                            <Grid item>
                                <Social direction="column" />
                            </Grid>
                        </Hidden>

                    </Grid>

                </Container>
            </div>
        </Paper>
    )
}
