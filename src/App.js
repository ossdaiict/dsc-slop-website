import React from 'react';
<<<<<<< HEAD
import { Router } from '@reach/router';
import Homepage from './Pages/HomePage';
import LeaderBoard from './Pages/LeaderBoard';
import Projects from './Pages/Projects';

const App = () => {
  return (
    <Router>
      <Homepage path="/" />
      <LeaderBoard path="/leaderboard" />
      <Projects path="/projects" />
    </Router>
  );
};
=======
import LeaderBoard from './components/LeaderBoard';

const App = () => {
    return (
        <div>
            <h1>Homepage</h1>
            <LeaderBoard />
        </div>
    );
}
>>>>>>> leaderboard

export default App;
