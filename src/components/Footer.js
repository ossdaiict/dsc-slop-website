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
      <Paper variant="outlined" className={classes.paper}>
        <Grid item xs={12}>
          <Typography variant="body2" style={{ marginBottom: 16 }}>
            {' '}
            © SLoP, DAIICT-Gandhinagar, 2020{' '}
          </Typography>
        </Grid>
        <Grid item container direction="row" justify="center" spacing={2}>
          <Grid item>
            <Fab size="medium" aria-label="mail" color="secondary">
              <Mail />
            </Fab>
          </Grid>
          <Grid item>
            <Fab size="medium" aria-label="github" color="primary">
              <GitHub />
            </Fab>
          </Grid>
          <Grid item>
            <Fab size="medium" aria-label="insta" color="secondary">
              <Instagram />
            </Fab>
          </Grid>
          <Grid item>
            <Fab size="medium" aria-label="twitter" color="primary">
              <Twitter />
            </Fab>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
