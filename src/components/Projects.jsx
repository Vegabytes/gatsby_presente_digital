import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinKedinIcon from "@material-ui/icons/LinkedIn";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme => ({
    cardMedia: {
        width: 180
    },
    card: {
        display: "flex",
    },
    links: {
        marginRight: "auto"
    },
    tag: {
        marginRight: 5,
        marginBottom: 5
    }

}));


function TagsContainer({ tags }) {
    const styles = useStyles();
    return (
        <div>
            {tags.map((tag, index) => (
                <Chip className={styles.tag} label={tag} key={index} variant="outlined"></Chip>
            ))}
        </div>
    )
}

function Project({ title, description, imageUrl, tags, links, }) {
    const styles = useStyles();
    return <Grid item>
        <Card className={styles.card}>
            <div>
                <CardContent>
                    <Typography variant="h5" paragraph>{title}</Typography>
                    <Typography variant="subtitle1" paragraph>{description}</Typography>
                    <Hidden mdUp>
                        <TagsContainer tags={tags} />
                    </Hidden>
                </CardContent>
                <CardActions>
                    <div className={styles.links}>
                        {links.map((link, index) => (
                            <IconButton key={index} href={link.href}>
                                <link.icon />
                            </IconButton>
                        ))}
                    </div>
                    <Hidden smDown>
                        <TagsContainer tags={tags} />
                    </Hidden>
                </CardActions>
            </div>
            <Hidden xsDown>
                <CardMedia className={styles.cardMedia} image={imageUrl}></CardMedia>
            </Hidden>
        </Card>
    </Grid>
}

export default function Projects() {
    return (
        <Container maxWidth="md" id="projects">
            <Box pt={8} mb={2}>
                <Typography variant="h4">Projectos</Typography>
            </Box>
            <Grid container direction="column" spacing={4}>
                <img src="https://us.123rf.com/450wm/dzein/dzein1502/dzein150200002/36125549-construcci%C3%B3n-registrarte-fondo-blanco-ilustraci%C3%B3n-vectorial-3d-mesh.jpg?ver=6" alt="" />
                {/* {projectsData.map((data, index) => (
                    <Project key={index} {...data} />
                ))} */}
            </Grid>
        </Container>
    )
}

const projectsData = [
    {
        title: "Luis Garc??a",
        description:
            "Formado en Sociolog??a y Periodismo, he sido manager de Tesorer??a y gestor de equipos para una multinacional espa??ola en varios pa??ses. Aprovech?? el escenario de 2020 para formarme en lo que siempre me hab??a gustado: el Desarrollo de Aplicaciones Web. 2021 es el principio de este nuevo camino.",
        imageUrl: "/luis-art1.png",
        imageAlt: "Project 1 Image",
        tags: ["React.js", "Material-UI", "Gatsby.js"],
        links: [
            {
                icon: LinKedinIcon,
                href: "https://www.linkedin.com/in/luisgvicente/",
            },
            {
                icon: AlternateEmailIcon,
                href: "mailto:luis.vicente@presentedigital.es",
            },
            {
                icon: OpenInNewIcon,
                href: "https://www.google.com",
            },
        ],
    },
    {
        title: "Jaime Murillo",
        description:
            "Desarrollador front end, tester, desarrollador de videojuegos, amante de las tecnolog??as y frankestien",
        imageAlt: "Project 2 Image",
        imageUrl: "/jaime.jpg",
        tags: ["Wordpress", "Javascript", "React.js", "Vue.js", "Unity.js", "Selenium"],
        links: [
            {
                icon: LinKedinIcon,
                href: "https://www.linkedin.com/in/jaime-murillo-romero-75799954/?originalSubdomain=es",
            },
            {
                icon: AlternateEmailIcon,
                href: "mailto:jaime.murillo@presentedigital.es",
            }
        ],
    },
    {
        title: "Alejandro Castillo",
        description:
            "Analista programador con m??s de 6 a??os de experiencia en distintos proyectos web. Amante del Cloud Computing y Dev Ops.",
        imageAlt: "Project 3 Image",
        imageUrl: "/alejandro-art1.png",
        tags: ["Angular", "React.js", "Node.js", "MongoDB", "Cloud Computing", "E-Commerce"],
        links: [
            {
                icon: LinKedinIcon,
                href: "https://www.linkedin.com/in/alejandro-castillo-29564810b/",
            },
            {
                icon: AlternateEmailIcon,
                href: "mailto:alejandro.castillo@presentedigital.es",
            },
            {
                icon: OpenInNewIcon,
                href: "https://creativecocos.com/",
            },
        ],
    },
];
