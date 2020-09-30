import React from 'react';
import { Grid, Paper, Typography, Fab, makeStyles } from '@material-ui/core';
import { GitHub, Mail, Twitter, Instagram } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    position: 'static',
    flexGrow: 1,
    textAlign: 'center',
    minHeight: '25%',
    bottom: 0,
    left: 0,
    right: 0,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid container>
      <Paper className={classes.paper}>
        <Grid item xs={12}>
          <Typography variant="body2" style={{ marginBottom: 16 }}>
            {' '}
            © SLoP, DAIICT-Gandhinagar, 2020{' '}
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
              aria-label="insta"
              color="secondary"
              href="https://www.instagram.com/dscdaiict/"
              target="_blank"
            >
              <Instagram />
            </Fab>
          </Grid>
          <Grid item>
            <Fab
              size="medium"
              aria-label="twitter"
              color="primary"
              href="https://twitter.com/dscdaiict"
              target="_blank"
            >
              <Twitter />
            </Fab>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
