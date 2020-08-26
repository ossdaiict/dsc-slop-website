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
    if(id%3 === 0) return 'linear-gradient(135deg, #FBAB7E 0%, #F7CE68 100%)';
    else if(id%3 === 1) return "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)";
    else return "linear-gradient( 135deg, #FFD3A5 10%, #FD6585 100%)";
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
    console.log(getColor(id))
      return(
        <Paper variant="elevation" className={classes.paper}>
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
        <Paper className={classes.paper} style={{ background: "#FFDEE9" }}>
           <Grid container direction="column" spacing={1}>
               <Grid item container direction="row">
                    <IconButton className="text-gray-900" href={url} aria-label="Github" size="small" style={{marginRight:8}}>
                        <GitHub size="small" />
                    </IconButton>
                    <Typography variant="h6" className="text-black" align="left">{info.projecttitle}</Typography>
               </Grid>
               <Grid item>
                    <Typography variant="body2" className="text-gray-800" align="left" style={{height:"40px", overflow:"hidden",textOverflow:"ellipsis"}}>{info.description}</Typography>
               </Grid>
               <Grid item>
                    <Typography variant="subtitle2" className="text-gray-900" align="left">{`Mentors: ${mentors}`}</Typography>
               </Grid>
               <Grid item>
                    <Typography variant="subtitle2" className="text-gray-900" align="left">{`Last Updated: ${moment(info.lastUpdated).fromNow()}`}</Typography>
               </Grid>
               <Grid item container direction="row-reverse">
                    <IconButton className="text-gray-900" href={info.contributors.replace("api.github.com/repos","github.com")} aria-label="Contributors" size="small">
                        <Group/>
                    </IconButton>
               </Grid>
           </Grid>
        </Paper>
      );
  }
}
