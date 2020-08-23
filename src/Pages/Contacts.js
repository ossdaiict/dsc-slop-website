import React from 'react';
import Contact from '../components/Contact';
import { Container, Grid, Grow,Typography, Divider } from '@material-ui/core';
import organizers from '../components/organizers';

const Contacts = () => {
  return (
    <>
      <Container className="my-3">
        <Typography className="text-center" variant="h4" color="textPrimary"><b>Organizers</b></Typography>
        <Divider className="my-4" variant="middle"/>
          <Grow in>
              <Grid container>
                  {
                      organizers.map((member,id)=>{
                            return(
                                <Grid key={id} item xs={12} sm={6} md={4}>
                                    <Contact details={member}/>
                                </Grid>
                            )                          
                      })
                  }
              </Grid>
          </Grow>
      </Container>
    </>
  );
};

export default Contacts;
