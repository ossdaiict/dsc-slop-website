import React from 'react';
import {
  Grid,
  makeStyles,
  Typography,
  Paper,
  Container,
  Button,
  Fab,
  CardMedia,
  Divider,
} from '@material-ui/core';
import { LaptopMac, School } from '@material-ui/icons';
import bg from '../images/bg.png';
import Countdown from '../components/Countdown';
import CustomizedTimeline from '../components/TimeLine';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: '#424242',
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textAlign: 'center',
    minHeight: '25%',
  },
  paperCounter: {
    backgroundColor: '#424242',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textAlign: 'center',
    minHeight: '25%',
  },

  button: {
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(2),
  },

  formlink: {
    padding: theme.spacing(2),
    textAlign: 'center',
    minHeight: theme.spacing(40),
  },

  typo: {
    textAlign: 'center',
    margin: theme.spacing(4),
    color: 'grey',
  },

  textdiv: {
    marginTop: '16vh',
  },

  textover: {
    fontSize: '200px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '100px',
    },
  },

  textcap: {
    fontSize: '24px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  },
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <div className="min-h-screen relative">
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            className="min-h-screen absolute"
            image={bg}
            title="Contemplative Reptile"
          />
          <div className="absolute text-center w-full h-full">
            <div className={classes.textdiv}>
              <Typography className={classes.textcap} color="textPrimary">
                <b>Developer Student Club-DAIICT's</b>
              </Typography>
              <Typography className={classes.textover} color="textPrimary">
                <b>S L o P</b>
              </Typography>
              <Typography className={classes.textcap} color="textPrimary">
                <b>S E M E S T E R - L O N G - P R O J E C T S</b>
              </Typography>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <Paper className={classes.paperCounter} style={{ marginBottom: 0 }}>
            <Countdown className="py-12" toDate={new Date(2020, 9, 20)} />
          </Paper>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <Paper
            className={classes.paper}
            style={{ marginBottom: 0, backgroundColor: 'none' }}
          >
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h4" align="left">
                  <b>What is SLoP ?</b>
                </Typography>
                <Divider className="my-3" variant="fullWidth" />
              </Grid>
              <Grid item>
                <Typography variant="body1" align="left">
                  Semester Long Projects or SLoP is an initiative by Developer
                  Student Club, DA-IICT exclusively for students of DA-IICT who
                  are new to open source software development to get started
                  with open source contributions.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" align="left">
                  It’s modeled to be similar but smaller Google Summer of Code
                  (GSoC), which is global that matches students up with open
                  source, free software and technology-related organizations to
                  write code and get paid for the same. Similarly, SLoP is aimed
                  at introducing new students in the area and helps them gain
                  confidence
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <Paper variant="outlined" className={classes.paper}>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h4" align="left">
                  <b>How it Works ?</b>
                </Typography>
                <Divider className="my-3" variant="fullWidth" />
              </Grid>
              <Grid item>
                <Typography variant="body1" align="left">
                  Participants can apply for the program either as a student or
                  as a mentor. Mentors are selected through a selection process.
                  The selected mentors propose projects, the best of which are
                  chosen to be included in the program. Students work on these
                  projects in their winter vacations. The mentors review the
                  pull requests and the overall work on their project by various
                  contributors throughout the coding period of the program. At
                  the end of the coding period, the students are compared on the
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
                    color="primary"
                    className={classes.button}
                    startIcon={<School />}
                    href="https://drive.google.com/file/d/1gEF-U2lV7GssAVGnJmT4STt9NHIHPu-E/view"
                  >
                    Student Manual
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<LaptopMac />}
                    href="https://drive.google.com/file/d/1rG00muN3dI10oKcGoOWB2r5pHnszuwCs/view?usp=sharing"
                  >
                    Mentor Manual
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <Grid
            container
            direction="row"
            justify="space-evenly"
            spacing={2}
            alignContent="center"
          >
            <Grid item xs={12} sm={6} md={6}>
              <Paper className={classes.formlink}>
                <Typography variant="h6">
                  <b> Are You Student ? </b>
                </Typography>
                <Typography
                  variant="body2"
                  className={classes.typo}
                  color="textSecondary"
                >
                  If you are new to the open source world and You want to
                  exlplore things, new techs. or you are just getting started,
                  Don't worry, headout here and fill out the student form. We'll
                  guide you throughout whole project, and you can win exciting
                  prizes.
                </Typography>
                <Fab variant="extended" color="secondary">
                  <School style={{ margin: 8 }} />
                  Be A Winner !
                </Fab>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Paper className={classes.formlink}>
                <Typography variant="h6">
                  <b> Are You Mentor ? </b>
                </Typography>
                <Typography
                  variant="body2"
                  className={classes.typo}
                  color="textSecondary"
                >
                  If you are confident, knolwgeble enough and You can teach
                  other's as well, then fill out the Mentor's Form. Even if you
                  know the techs, still you can learn to be better and can help
                  others. Teaching always makes you push to Learning.
                </Typography>
                <Fab variant="extended" color="secondary">
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
          <Paper
            variant="outlined"
            className={classes.paper}
            style={{ backgroundColor: '#424242' }}
          >
            <Typography variant="h5">
              <b>Timeline</b>
            </Typography>
            <Divider variant="middle" />
            <CustomizedTimeline />
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
}
