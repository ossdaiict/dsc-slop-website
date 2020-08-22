import React,{useEffect,useState} from 'react';
import {makeStyles,Paper,Grid,Typography,IconButton,CircularProgress} from '@material-ui/core';
import {GitHub, Group} from '@material-ui/icons';
import axios from 'axios';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(1),
        padding: theme.spacing(2),
        textAlign: 'center',
        minHeight:"25%",
      },
}));

function getColor(id){
    if(id%5 === 0) return "#FFEBCD";
    else if(id%5 === 1) return "#54FF9F";
    else if(id%5 === 2) return "#B0E2FF";
    else if(id%5 === 3) return "#FEAB82";
    else return "#FFF68F"; 
}

export default function Project({id,mentors,url}) {

  const classes = useStyles();
  const [loading,setLoading] = useState(true);
  const [info,setInfo] = useState({
    projecttitle: "",
    description: "",
    lastUpdated: "",
    contributors: "",
  });

  const modifiedurl = url.replace("github.com","api.github.com/repos");
  
  useEffect(()=>{
    const fetch = ()=>{

        axios.get(modifiedurl)
        .then(({data})=>{
            const modified_data = {
                projecttitle: data.name,
                description: (!data.description) ? "----- No Description -----" : data.description,
                lastUpdated: data.updated_at,
                contributors: data.contributors_url,
            }

            setInfo(modified_data);
            setLoading(false);
        })
    }

    fetch();

  },[modifiedurl]);

  if(loading)
  {
      return(
        <Paper variant="outlined" className={classes.paper}>
            <Grid container spacing={2} justify="center" alignItems="center" style={{ height: '25vh', textAlign: "center" }}>
                <Grid item>
                    <CircularProgress size={50} />
                </Grid>
            </Grid>
        </Paper>
      )
  }
  else{
    return (
        <Paper variant="outlined" className={classes.paper}>
           <Grid container direction="column" spacing={1}>
               <Grid item container direction="row">
                    <IconButton href={url} aria-label="Github" size="small" style={{marginRight:8}}>
                        <GitHub size="small" />
                    </IconButton>
                    <Typography variant="h6" color="textPrimary" align="left">{info.projecttitle}</Typography>
               </Grid>
               <Grid item>
                    <Typography variant="body2" color="textSecondary" align="left" style={{height:"40px", overflow:"hidden",textOverflow:"ellipsis"}}>{info.description}</Typography>
               </Grid>
               <Grid item>
                    <Typography variant="subtitle2" color="textPrimary" align="left">{`Mentors: ${mentors}`}</Typography>
               </Grid>
               <Grid item>
                    <Typography variant="subtitle2" color="textSecondary" align="left">{`Last Updated: ${moment(info.lastUpdated).fromNow()}`}</Typography>
               </Grid>
               <Grid item container direction="row-reverse">
                    <IconButton href={info.contributors.replace("api.github.com/repos","github.com")} aria-label="Contributors" size="small">
                        <Group/>
                    </IconButton>
               </Grid>
           </Grid>
        </Paper>
      );
  }
}
