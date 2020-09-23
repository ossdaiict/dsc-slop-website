import React from 'react'
import {
   SvgIcon,
   makeStyles,
   Paper,
   Grid,
   Typography,
   IconButton,
} from '@material-ui/core'
import '../Pages/TextGradient.css'
import { ReactComponent as Tux } from '../images/linuxtux.svg'

const useStyles = makeStyles((theme) => ({
   paper: {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      textAlign: 'center',
      minHeight: '25%',
   },
}))

export default function LinuxProject({
   // id,
   mentors,
   url,
   projectName,
   // stars,
   // forks,
   langs,
   description,
   // updated_at,
}) {
   const classes = useStyles()

   return (
      <Paper elevation={5} variant="outlined" className={classes.paper}>
         <Grid container direction="column" spacing={1}>
            <a href={url} target="_blank">
               <Grid item container direction="row">
                  <IconButton
                     aria-label="Linux"
                     size="small"
                     style={{ marginRight: 8 }}
                  >
                     <SvgIcon component={Tux} viewBox="0 0 304.188 249.149" />
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
         </Grid>
      </Paper>
   )
}
