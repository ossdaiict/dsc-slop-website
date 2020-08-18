import React from 'react';
import {makeStyles,Paper} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: "pink",
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
}));

export default function Project() {

  const classes = useStyles();

  return (

    <Paper variant="outlined" className={classes.paper}>
        Hello World !!!!
    </Paper>

  );

}
