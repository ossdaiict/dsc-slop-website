import React from 'react';
import { Router } from '@reach/router';
import Homepage from './Pages/HomePage';
import LeaderBoard from './Pages/LeaderBoard';
import Projects from './Pages/Projects';
import Navbar from './components/NavBar';

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Homepage path="/" />
        <LeaderBoard path="/leaderboard" />
        <Projects path="/projects" />
      </Router>
    </>
  );
};

export default App;
