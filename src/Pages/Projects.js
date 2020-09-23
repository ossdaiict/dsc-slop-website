import React, { useEffect, useState } from 'react'
import {
   Grid,
   Grow,
   Container,
   CircularProgress,
   makeStyles,
   Typography,
   Divider,
} from '@material-ui/core'
import Project from '../components/Project'
import axios from 'axios'
import { Cookies, useCookies } from 'react-cookie'
import LinuxProject from '../components/LinuxProject'
import './TextGradient.css'

import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'

const cookies = new Cookies()

const linuxData = {
   projectName: 'Linux Kernel',
   langs: 'C',
   mentors: 'Mamta Shukla, Himadri Pandya',
   description:
      'Linux is a clone of the operating system Unix, written from scratch by Linus Torvalds with assistance from a loosely-knit team of hackers across the Net.',
   url:
      'https://docs.google.com/document/d/1_2ElqbMMm7PtEzZ3K6GKzpylOJ40tt8KIU0kTPb8XDQ/edit?usp=sharing',
}

const useStyles = makeStyles((theme) => ({
   container: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
   },
   root: {
      padding: '4px 4px',
      marginRight: '8px',
      marginBottom: '8px',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#1c1c1c',
   },
   input: {
      marginLeft: theme.spacing(1),
      flex: 1,
   },
   iconButton: {},
}))

export default function Projects() {
   const [cookie, setCookie] = useCookies([''])

   React.useEffect(() => {
      const bearCookie = cookies.get('bearCookie')
      console.log(bearCookie)
      setCookie('bearCookie', { loaded: false }, { path: '/' })
   }, [cookies])
   const [data, setData] = useState([])
   const [loading, setLoading] = useState(true)
   const [dummy, setDummy] = useState([])
   const [showLinux, setShowLinux] = useState(true)
   const classes = useStyles()

   useEffect(() => {
      const fetch = () => {
         axios
            .get('https://frozen-chamber-70814.herokuapp.com/getData')
            .then(({ data }) => {
               setData(data.projects)
               setDummy(data.projects)
               setLoading(false)
            })
      }

      fetch()
   }, [])

   function FilterList(keyword) {
      const dumdata = data
         .filter(
            (obj) =>
               obj.langs.toLowerCase().includes(keyword.toLowerCase()) ||
               obj.project.toLowerCase().includes(keyword.toLowerCase()) ||
               obj.description.toLowerCase().includes(keyword.toLowerCase())
         )
         .map((filteredobj) => filteredobj)
      setDummy(dumdata)

      if (
         linuxData.langs.toLowerCase().includes(keyword.toLowerCase()) ||
         linuxData.projectName.toLowerCase().includes(keyword.toLowerCase()) ||
         linuxData.description.toLowerCase().includes(keyword.toLowerCase())
      ) {
         setShowLinux(true)
      } else {
         setShowLinux(false)
      }
   }

   if (loading) {
      return (
         <Grid
            container
            spacing={3}
            justify="center"
            alignItems="center"
            style={{ height: '100vh', textAlign: 'center' }}
         >
            <Grid item>
               <CircularProgress size={100} />
            </Grid>
         </Grid>
      )
   } else {
      return (
         <div className="mt-20 min-h-screen">
            <Container>
               <Grow in>
                  <Grid container className={classes.container}>
                     <Grid item md={12}>
                        <Typography
                           className="mt-4 xs:text-xl sm:text-2xl text-4xl text-center w-full"
                           color="textPrimary"
                        >
                           <b className="txt--gradient-pink">Projects</b>
                        </Typography>
                        <Typography
                           className="xs:text-lg sm:text-xl text-2xl text-center"
                           variant="h6"
                           color="textPrimary"
                        >
                           <b className="txt--gradient-orange-lite">
                              Here is the list of projects, take a look at them,
                              choose your preferences and make contributions !!!
                           </b>
                        </Typography>
                        <Divider
                           className="my-4"
                           variant="middle"
                           color="textPrimary"
                        />
                        <Paper component="form" className={classes.root}>
                           <IconButton
                              className={classes.iconButton}
                              aria-label="menu"
                           >
                              <MenuIcon />
                           </IconButton>
                           <InputBase
                              className={classes.input}
                              placeholder="Search Projects,Tags"
                              // inputProps={{ 'aria-label': 'search google maps' }}
                              onChange={(e) => FilterList(e.target.value)}
                           />
                           <IconButton
                              className={classes.iconButton}
                              aria-label="search"
                           >
                              <SearchIcon />
                           </IconButton>
                        </Paper>
                     </Grid>
                     {showLinux && (
                        <Grid item xs={12} sm={12} md={6}>
                           <LinuxProject {...linuxData} />
                        </Grid>
                     )}
                     {dummy.map((obj, index) => {
                        if (obj.project !== '') {
                           return (
                              <Grid key={index} item xs={12} sm={12} md={6}>
                                 <Project
                                    projectName={obj.project}
                                    description={obj.description}
                                    updated_at={obj.updated_at}
                                    langs={obj.langs}
                                    forks={obj.forks}
                                    stars={obj.stars}
                                    id={index}
                                    mentors={obj.mentors}
                                    url={obj.url}
                                 />
                              </Grid>
                           )
                        } else {
                           return null
                        }
                     })}
                  </Grid>
               </Grow>
            </Container>
         </div>
      )
   }
}
