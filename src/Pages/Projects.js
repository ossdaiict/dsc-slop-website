import React from 'react';
import {Grid,Grow,makeStyles,Container} from '@material-ui/core';
import Project from '../components/Project';


const useStyles = makeStyles(() => ({

}));

export default function Projects() {

  const classes = useStyles();

  return (

    <Container>
      <Grow in>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6}>
            <Project/>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Project/>
          </Grid>
        </Grid>
      </Grow>
    </Container>

  );



}
