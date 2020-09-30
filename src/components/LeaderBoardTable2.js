import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';

function LeaderBoardTable2() {
  const [users, setUsers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://dsc-slop-server.herokuapp.com/student'
      );
      console.log(response.data);
      const usersList = response.data;
      let rank = 1;
      usersList.forEach((obj) => (obj['rank'] = rank++));
      setUsers(usersList);
      setLoaded(true);
      console.log(window.screen.height / 144);
    };
    fetchData();
  }, []);

  if (loaded === false) {
    return (
      <Grid
        container
        spacing={3}
        justify="center"
        alignItems="center"
        style={{ height: '100vh', textAlign: 'center'}}
      >
        <Grid item>
          <CircularProgress size={100} />
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Box m={1.5}>
        <Grow in={true}>
          <MaterialTable
            title="Leaderboard"
            columns={[
              {
                title: '       Current Rank',
                field: 'rank',
                align: 'center',
                headerStyle: { whiteSpace: 'pre' },
              },
              {
                title: '       Username',
                field: 'username',
                align: 'center',
                headerStyle: { whiteSpace: 'pre' },
              },
              {
                title: '       Points',
                field: 'total_points',
                align: 'center',
                headerStyle: { whiteSpace: 'pre' },
              },
            ]}
            data={users}
            isLoading={!loaded}
            options={{
              rowStyle: (x) => {
                if(x.tableData.id === 0){
                  return { backgroundColor: '#006B38', fontSize: '18px' };
                }
                if(x.tableData.id === 1){
                  return { backgroundColor: '#006B38', fontSize: '18px' };
                }
                if(x.tableData.id === 2){
                  return { backgroundColor: '#006B38', fontSize: '18px' };
                }
                else if (x.tableData.id % 2 === 0) {
                  return { backgroundColor: '#848a84', fontSize: '18px' };
                }
                else{
                  return {fontSize: '18px'}
                }
              },
              headerStyle: {
                'fontSize': '18px'
              },
              pageSize: 10,
              pageSizeOptions: [
                Math.floor(users.length / 3),
                Math.floor(users.length / 2),
                users.length,
              ],
            }}
          />
        </Grow>
      </Box>
    );
  }
}

export default LeaderBoardTable2;
