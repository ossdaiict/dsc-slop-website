import React, { useState, useCallback, useRef } from "react";
import {
  makeStyles,
  Paper,
  Grid,
  Typography,
  Fab,
  Box,
} from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    textAlign: "center",
    minHeight: "50%",
  },
}));

export default function Contact({ details }) {
  const classes = useStyles();
  const [value, setValue] = useState(true);
  const transitionOptions = {
    transitionName: "fade",
    transitionEnterTimeout: 500,
    transitionLeaveTimeout: 500,
  };
  return (
    <Paper className={classes.paper} varient='outlined'>
      <Grid
        container
        direction="column"
        spacing={1}
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item>
          <img
            className="rounded-full w-48 h-48"
            src={details.image}
            alt="Profile"
          />
        </Grid>
        <Grid item direction="row">
          <Grid item>
            <Typography className="my-2" variant="body1" color="textPrimary">
              {details.name}
            </Typography>
            <Typography className="mb-2" variant="body2" color="textSecondary">
              {details.phone}
            </Typography>
          </Grid>
          <Grid item container direction="row" justify="center" spacing={2}>
            <Grid item>
              <Fab size="small" aria-label="github" href={details.github}>
                <GitHub />
              </Fab>
            </Grid>
            <Grid item>
              <Fab size="small" aria-label="linkedin" href={details.linkedin}>
                <LinkedIn />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
