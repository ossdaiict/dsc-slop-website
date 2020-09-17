import React, { useEffect, useState } from 'react';
import {
  makeStyles,
  Paper,
  Grid,
  Typography,
  IconButton,
  CircularProgress,
} from '@material-ui/core';
import { GitHub, Group, Usb, Star } from '@material-ui/icons';
import axios from 'axios';
import moment from 'moment';
import '../Pages/TextGradient.css';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    textAlign: 'center',
    minHeight: '25%',
  },
}));

export default function Project({ id, mentors, url, projectName,stars,forks,langs,description,updated_at }) {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({
    projecttitle: '',
    description: '',
    lastUpdated: '',
    contributors: '',
    stars: '',
    forks: '',
  });

  const modifiedurl = url.replace('github.com', 'api.github.com/repos');

  //   useEffect(()=>{
  //     const fetch = ()=>{

  //         axios.get(modifiedurl)
  //         .then(({data})=>{
  //             const modified_data = {
  //                 projecttitle: data.name,
  //                 description: (!data.description) ? "----- No Description -----" : data.description,
  //                 lastUpdated: data.updated_at,
  //                 contributors: data.contributors_url,
  //                 stars: data.stargazers_count,
  //                 forks: data.forks_count,
  //             }
  //             console.log(modified_data);
  //             setInfo(modified_data);
  //             setLoading(false);
  //         })
  //     }

  //     fetch();

  //   },[]);

  //   if (loading) {
  //     return (
  //       <Paper variant="outlined" className={classes.paper}>
  //         <Grid
  //           container
  //           spacing={2}
  //           justify="center"
  //           alignItems="center"
  //           style={{ height: '25vh', textAlign: 'center' }}
  //         >
  //           <Grid item>
  //             <CircularProgress size={50} />
  //           </Grid>
  //         </Grid>
  //       </Paper>
  //     );
  //   }

  return (
    <Paper elevation={5} variant="outlined" className={classes.paper}>
      <Grid container direction="column" spacing={1}>
        <a href={url} target="_blank">
          <Grid item container direction="row">
            <IconButton
              aria-label="Github"
              size="small"
              style={{ marginRight: 8 }}
            >
              <GitHub size="small" />
            </IconButton>
            <Typography variant="h6" color="textPrimary" align="left">
              <b className="txt--gradient-blue">{projectName}</b>
            </Typography>
          </Grid>
        </a>
        <Grid item>
          <Typography
            variant="body2"
            color="textSecondary"
            className="my-4"
            align="left"
            style={{
              height: '40px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {description}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="subtitle2"
            color="textPrimary"
            align="left"
          >{`Mentors: ${mentors}`}</Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="subtitle2"
            color="textPrimary"
            align="left"
          >{`Tags: ${langs}`}</Typography>
        </Grid>
        <Grid item>
          <Typography
              variant="subtitle2"
              color="textSecondary"
              align="left"
            >{`Last Updated: ${moment(
              updated_at
            ).fromNow()}`}</Typography>
        </Grid>
        <Grid item container direction="row-reverse" className="mt-1">
          <IconButton
            className="mx-2"
            href={url.concat('/contributors')}
            target="_blank"
            aria-label="Contributors"
            size="small"
          >
            <Group />
          </IconButton>

          <IconButton className="mx-2" aria-label="Contributors" size="small">
            <Star />
            <Typography>{stars}</Typography>
          </IconButton>

          <IconButton className="mx-2" aria-label="Contributors" size="small">
            <Usb />
            <Typography>{forks}</Typography>
          </IconButton>

        </Grid>
      </Grid>
    </Paper>
  );
}
