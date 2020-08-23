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
            const response = await axios.get("https://script.google.com/macros/s/AKfycbxAfEhHRFKiwJ05oG1Zw4vF5sXqdnXKm2d6NP3QrF7C3oIhbxY/exec");
            let usersList = response.data.user;
            setUsers(usersList);
            setLoaded(true);
            console.log(window.screen.height / 144);
        }
        fetchData();
    }, [])

    if (loaded === false) {
        return (
            <Grid container spacing={3} justify="center" alignItems="center" style={{ height: '100vh', textAlign: "center" }}>
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
                            { title: '       Current Rank', field: 'rank', align: "center", headerStyle: { whiteSpace: 'pre' } },
                            { title: '       Username', field: 'username', align: "center", headerStyle: { whiteSpace: 'pre' } },
                            { title: '       Points', field: 'points', align: "center", headerStyle: { whiteSpace: 'pre' } },
                            { title: '       Pull Requests', field: 'pull_request', align: "center", headerStyle: { whiteSpace: 'pre' } },
                        ]}
                        data={users}
                        isLoading={!loaded}
                        options={{
                            rowStyle: x => {
                                if (x.tableData.id % 2 === 0) {
                                    return { backgroundColor: '#434543' }
                                }
                            },
                            pageSize: 10,
                            pageSizeOptions: [Math.floor(users.length / 3), Math.floor(users.length / 2), users.length]
                        }}
                    />
                </Grow>
            </Box>
        )
    }

}

export default LeaderBoardTable2;