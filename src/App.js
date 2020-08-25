import React from 'react';
import { Router } from '@reach/router';
import Homepage from './Pages/HomePage';
import LeaderBoard from './Pages/LeaderBoard';
import Projects from './Pages/Projects';
import Contacts from './Pages/Contacts';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './tailwind.css';

const App = () => {
  const theme = createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#F5CB5C',
        light: '#F5CB5C',
        dark: '#F5CB5C',
      },
      secondary: {
        main: '#f48fb1',
        light: '#f48fb1',
        dark: '#f48fb1',
      },

      background: {
        paper: '#333533',
        default: '#333533',
      },

      text: {
        primary: '#ffff',
        secondary: '#bdbdbd',
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Router>
          <Homepage path="/" />
          <LeaderBoard path="/leaderboard" />
          <Projects path="/projects" />
          <Contacts path="/contacts" />
        </Router>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
