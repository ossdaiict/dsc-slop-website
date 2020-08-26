import React, { useState, useCallback, useRef } from 'react';
import Contact from '../components/Contact';
import { Container, Grid, Grow, Typography, Divider } from '@material-ui/core';
import organizers from '../components/organizers';

const Contacts = () => {
  return (
    <Container className="my-6 mt-20">
      <Typography className="text-center" variant="h4" color="textPrimary">
        <b>Meet the Team!</b>
      </Typography>
      <Typography className="text-center" variant="h6" color="textPrimary">
        <b>
          We are a group of development enthusiasts who want to increase the
          development and open-source culture among students.
        </b>
      </Typography>
      <Divider className="my-4" variant="middle" />
      <Grow in>
        <Grid container>
          {organizers.map((member, id) => {
            //onhover: state[id] = true / false

            return (
              <Grid key={id} item xs={12} sm={8} md={6}>
                <Contact details={member} />
              </Grid>
            );
          })}
        </Grid>
      </Grow>
    </Container>
  );
};

export default Contacts;
