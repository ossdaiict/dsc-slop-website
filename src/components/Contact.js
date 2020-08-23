import React from 'react';
import {makeStyles,Paper,Grid,Typography,Fab} from '@material-ui/core';
import {GitHub,Instagram} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(1),
        padding: theme.spacing(2),
        textAlign: 'center',
        minHeight:"25%",
      },
}));


export default function Contact({details}) {

  const classes = useStyles();

    return (
        <Paper className={classes.paper} elevation="5">
            <Grid container direction="row" spacing={1} justify="space-evenly">
                <Grid item>
                    <img className="rounded-full w-24 h-24" src={details.image} alt="Profile"/>
                </Grid>
                <Grid item direction="column">
                        <Grid item>
                            <Typography className="my-2" variant="body1" color="textPrimary">{details.name}</Typography>
                            <Typography className="mb-2" variant="body2" color="textSecondary">{details.phone}</Typography>
                        </Grid>
                        <Grid item container direction="row" justify="center" spacing={2}>
                        <Grid item>
                            <Fab size="small" aria-label="github" color="secondary" href={details.github}>
                                <GitHub />
                            </Fab>
                        </Grid>
                        <Grid item>
                            <Fab size="small" aria-label="insta" color="primary" href={details.instagram}>
                                <Instagram />
                            </Fab>
                        </Grid>
                        </Grid>
                    </Grid>
                 </Grid>
        </Paper>
    );
}
