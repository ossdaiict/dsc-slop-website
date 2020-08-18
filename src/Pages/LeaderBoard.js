import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableContainer from '@material-ui/core/TableContainer';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';

import LeaderBoardEntry from '../components/LeaderBoardEntry';
import { TableBody } from '@material-ui/core';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const styledTableHeader = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const LeaderBoard = () => {
  const [renderList, setRenderList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const users = await axios.get("https://script.google.com/macros/s/AKfycbxAfEhHRFKiwJ05oG1Zw4vF5sXqdnXKm2d6NP3QrF7C3oIhbxY/exec");
      console.log(users);
      const userList = users.data.user.map((row, index) => {
        return <LeaderBoardEntry
          rank={index + 1}
          username={row.username}
          points={row.points}
          pull_requests={row.pull_request}
          key={row.username}
        />
      });
      setRenderList(userList);
    }

    fetchData();
  }, []);

  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="Ranks Table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Rank</TableCell>
            <TableCell align="center">Username</TableCell>
            <TableCell align="center">Points</TableCell>
            <TableCell align="center">Pull Requests</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderList}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LeaderBoard;