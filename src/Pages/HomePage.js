import React from 'react';
import { Grid, makeStyles, Typography, Paper, Container, Button, Fab, CardMedia, Divider } from '@material-ui/core';
import { LaptopMac, School } from '@material-ui/icons';
import bg from '../images/bg.jpg';
import CustomizedTimeline from '../components/TimeLine';

const useStyles = makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    minHeight: "25%",
    backgroundColor: "#fff5f9",
  },

  button: {
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(2),
  },

  formlink: {
    backgroundColor: "#bbffba",
    padding: theme.spacing(2),
    textAlign: 'center',
    minHeight: theme.spacing(32),
  },

  typo: {
    textAlign: 'center',
    margin: theme.spacing(4),
    color: "grey",
  },

  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },

  textover: {
    width: "100%",
    height: "100%",
    position: "absolute",
    textAlign: "center",
    top: "40%",
    left: 0,
    zIndex: 10,
    color: "white",
  }

}));


export default function HomePage() {

  const classes = useStyles();

  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={12}>
        <div style={{ position: "relative", height: "660px", width: "100%" }}>
          <div className={classes.image}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="660"
              image={bg}
              title="Contemplative Reptile" />
          </div>
          {/* <div className={classes.textover}>
                    <Typography variant="body2" style={{color:"grey"}}>Developer Student Club Presents</Typography>
                    <Typography variant="h1"><b>{"S L o P"}</b></Typography>
                    <Typography variant="h6">Semester Long Projects</Typography>
              </div> */}
        </div>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md" style={{ overflow: "hidden" }}>
          <Paper variant="outlined" className={classes.paper}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="h4" align="left"><b>
                  What is SLoP ?</b>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" align="left">
                  Semester Long Projects or SLoP is an initiative by Developer Student Club, DA-IICT exclusively
                  for students of DA-IICT who are new to open source software development to get started with
                  open source contributions.
                  </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" align="left">
                  It’s modeled to be similar but smaller Google Summer of Code (GSoC), which is global that
                  matches students up with open source, free software and technology-related organizations to
                  write code and get paid for the same. Similarly, SLoP is aimed at introducing new students in
                  the area and helps them gain confidence
                  </Typography>
              </Grid>
              <Grid item><Typography>  </Typography></Grid>
              <Grid item><Typography>  </Typography></Grid>
              <Grid item>
                <Typography variant="h4" align="left"><b>
                  How it Works ?</b>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" align="left">
                  Participants can apply for the program either as a student or as a mentor. Mentors are selected
                  through a selection process. The selected mentors propose projects, the best of which are chosen
                  to be included in the program. Students work on these projects in their winter vacations. The mentors
                  review the pull requests and the overall work on their project by various contributors throughout the
                  coding period of the program. At the end of the coding period, the students are compared on the
                  basis of most contributions.
                  </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" align="left">
                  For more info, please download the student or mentor manual
                  </Typography>
              </Grid>
              <Grid item container direction="row" justify="flex-start">
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<School />}
                  >Student Manual
                    </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<LaptopMac />}
                  >Mentor Manual
                    </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <Grid container direction="row" justify="space-evenly" spacing={3} alignContent="center">
            <Grid item xs={12} sm={6} md={6}>
              <Paper className={classes.formlink} >
                <Typography variant="h6">
                  <b> Are You Student ? </b>
                </Typography>
                <Typography variant="body2" className={classes.typo}>
                  If you are new to the open source world and You want to exlplore things, new techs.
                  or you are just getting started, Don't worry, headout here and fill out the student form.
                  We'll guide you throughout whole project, and you can win exciting prizes.
                    </Typography>
                <Fab variant="extended">
                  <School style={{ margin: 8 }} />
                        Be A Winner !
                </Fab>
              </Paper>
            </Grid >
            <Grid item xs={12} sm={6} md={6}>
              <Paper className={classes.formlink}>
                <Typography variant="h6">
                  <b> Are You Mentor ? </b>
                </Typography>
                <Typography variant="body2" className={classes.typo}>
                  If you are confident, knolwgeble enough and You can teach other's as well, then fill out the Mentor's Form.
                  Even if you know the techs, still you can learn to be better and can help others. Teaching always makes
                  you push to Learning.
                    </Typography>
                <Fab variant="extended">
                  <LaptopMac style={{ margin: 8 }} />
                        Be A Techer !
                </Fab>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <Paper variant="outlined" className={classes.paper} style={{ backgroundColor: "#fffedb" }}>
            <Typography variant="h5"><b>Timeline</b></Typography>
            <Divider variant="middle" />
            <CustomizedTimeline />
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
}
