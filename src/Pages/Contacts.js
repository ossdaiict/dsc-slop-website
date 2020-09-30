import React, { useState, useCallback, useRef } from 'react';
import Contact from '../components/Contact';
import { Container, Grid, Grow, Typography, Divider } from '@material-ui/core';
import organizers from '../components/organizers';
import { Cookies, useCookies } from 'react-cookie';
import './TextGradient.css';
const cookies = new Cookies();
const Contacts = () => {
  const [cookie, setCookie] = useCookies(['']);
  React.useEffect(() => {
    const script = document.getElementById('bear');
    console.log(script);
    const bearCookie = cookies.get('bearCookie');
    console.log(bearCookie);
    setCookie('bearCookie', { loaded: false }, { path: '/' });
  }, []);

  return (
    <Container className="my-6 mt-20">
      <Typography className="text-center" variant="h4" color="textPrimary">
        <b className="txt--gradient-blue">Meet the Team!</b>
      </Typography>
      <Typography className="text-center" variant="h6" color="textPrimary">
        <b className="txt--gradient-green">
          We are a group of development enthusiasts who want to increase the
          development and open-source culture among students.
        </b>
      </Typography>
      <Divider className="my-4" variant="middle" />
      <Grow in>
        <Grid container>
          {organizers.map((member, id) => {

            return (
              <Grid key={id} item xs={12} sm={8} md={4}>
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
