import React from "react";
import SvgIcon from '@mui/material/SvgIcon';
import { Grid, Paper, Typography, Fab, makeStyles } from "@material-ui/core";
import { GitHub, Mail, Twitter, Instagram, LinkedIn } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(4),
        position: "static",
        flexGrow: 1,
        textAlign: "center",
        minHeight: "25%",
        bottom: 0,
        left: 0,
        right: 0,
    },
}));

function XIcon(props) {
    return (
        <SvgIcon {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
        <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
        </svg>
        </SvgIcon>
    );
}

export default function Footer() {
    const classes = useStyles();
    return (
        <Grid container>
            <Paper className={classes.paper}>
                <Grid item xs={12}>
                    <Typography variant="body2" style={{ marginBottom: 16 }}>
                        {" "}
                        © SLoP, DAIICT-Gandhinagar, 2024{" "}
                    </Typography>
                </Grid>
                <Grid item container direction="row" justify="center" spacing={2}>
                    <Grid item>
                        <Fab
                            size="medium"
                            aria-label="mail"
                            color="secondary"
                            href="mailto:dsc@daiict.ac.in"
                            target="_blank"
                        >
                            <Mail />
                        </Fab>
                    </Grid>
                    <Grid item>
                        <Fab
                            size="medium"
                            aria-label="github"
                            color="primary"
                            href="https://github.com/ossdaiict"
                            target="_blank"
                        >
                            <GitHub />
                        </Fab>
                    </Grid>
                    <Grid item>
                        <Fab
                            size="medium"
                            aria-label="linkedin"
                            color="secondary"
                            href="https://www.linkedin.com/company/gdg-on-campus-daiict"
                            target="_blank"
                        >
                            <LinkedIn />
                        </Fab>
                    </Grid>
                    <Grid item>
                        <Fab
                            size="medium"
                            aria-label="insta"
                            color="primary"
                            href="https://www.instagram.com/gdg.daiict/"
                            target="_blank"
                        >
                            <Instagram />
                        </Fab>
                    </Grid>
                    <Grid item>
                        <Fab
                            size="medium"
                            aria-label="X"
                            color="secondary"
                            href="https://x.com/gdgdaiict"
                            target="_blank"
                        >
                            <XIcon />
                        </Fab>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
}