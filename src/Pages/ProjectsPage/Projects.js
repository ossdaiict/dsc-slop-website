import React, {useState, useRef,useEffect} from 'react'
import { useTransition, useChain,  useTrail, animated } from 'react-spring'
import {Item } from './styles'
import {Container,Grid,Button,CircularProgress} from '@material-ui/core'
import Project from '../../components/Project';
import axios from 'axios';
import './styles.css'

const items = ['WE DO PROJECTS', 'BECAUSE', 'WE', 'LIKE IT'];
const items1 = ['We', 'Make', 'IT', 'HAPPEN'];
const config = { mass: 5, tension: 800, friction: 80 }

const Projects = () => {

  const [open, set] = useState(false)
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true);

  const [toggle, setToogle] = useState(true)

  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  const trail1 = useTrail(items.length, {
    config,
    opacity: toggle ? 0 : 1,
    x: toggle ? 20 : 0,
    height: toggle ? 0 : 80,
    from: { opacity: 0, x: 20, height: 0 },
  })


  useEffect(()=>{
          const fetch = ()=>{
            axios.get("https://script.google.com/macros/s/AKfycbw33V3utIboH-9H-S-dZj_zL25_CaHH4-1cyBz1IognJmONis9r/exec")
            .then(({data})=>{
              setData(data.projects);
              setLoading(false);
            });
          };
          fetch();
  },[]);

  const springRef = useRef()
  const transRef = useRef()
  const transitions = useTransition(open ? data : [], (item,index) => index, {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })

  useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6])

      return (
        <Container className="min-h-screen my-3">
          <Grid container justify="center">
            <Grid container justify="flex-start" item md={12}>
              {
                  toggle ? 
                    <div onClick={() => {
                      setToogle(state => !state);
                    }}>
                      <div>
                        {trail.map(({ x, height, ...rest }, index) => (
                          <animated.div
                            key={items[index]}
                            className="trails-text"
                            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                            <animated.div style={{ height }}>{items[index]}</animated.div>
                          </animated.div>
                        ))}
                      </div>
                    </div>:
                    <div onClick={() => {
                      setToogle(state => !state);
                    }}>
                      <div>
                        {trail1.map(({ x, height, ...rest }, index) => (
                          <animated.div
                            key={items1[index]}
                            className="trails-text"
                            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                            <animated.div style={{ height }}>{items1[index]}</animated.div>
                          </animated.div>
                        ))}
                      </div>
                    </div>
              }
            </Grid>
            {!loading ? !open ? <Button onClick={() => set(open => !open)}>Projects</Button> : null : <CircularProgress variant="indeterminate"/> }
            <Grid container justify="center" onClick={() => set(open => !open)}>
              {transitions.map(({ item, key, props}) => {
                return (
                  <Grid  key={key} item xs={12} sm={12} md={6}>
                    <Item style={{ ...props, }}>
                      <Project
                        id={key}
                        mentors={item.mentors}
                        url = {item.url}
                        />
                    </Item>
                </Grid>
                )
              })}
            </Grid>
          </Grid>
        </Container>
      )
};

export default Projects;