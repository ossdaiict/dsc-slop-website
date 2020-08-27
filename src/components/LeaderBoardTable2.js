import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import { Typography } from '@material-ui/core';
import './style.css'

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
                    <div>
                    <Typography style={{ fontWeight:"bolder" , fontSize:"48px", width:"16rem" , marginLeft:"0.5rem"}} className="title">Leaderoard</Typography>
                    <MaterialTable
                        title=""
                        columns={[
                            { title: '       Current Rank', field: 'rank', align: "center", headerStyle: { whiteSpace: 'pre' },},
                            { title: '       Username', field: 'username', align: "center", headerStyle: { whiteSpace: 'pre' } },
                            { title: '       Points', field: 'points', align: "center", headerStyle: { whiteSpace: 'pre' } },
                            { title: '       Pull Requests', field: 'pull_request', align: "center", headerStyle: { whiteSpace: 'pre' } },
                        ]}
                        data={users}
                        isLoading={!loaded}
                        options={{
                            rowStyle: x => {
                                if (x.tableData.id % 2 === 0) {
                                    return { background: "#1e1f1e",  //'linear-gradient(90deg, #85FFBD 0%, #FFFB7D 100%)',
                                             fontWeight:"bold",
                                             fontSize:"24px"}
                                }
                                else
                                {
                                    return { background: "#171717",//'linear-gradient(270deg, #FBAB7E 0%, #F7CE68 100%)',
                                             fontWeight:"bold",
                                             fontSize:"24px" }
                                }
                            },
                            pageSize: 10,
                            pageSizeOptions: [Math.floor(users.length / 3), Math.floor(users.length / 2), users.length]
                        }}
                    />
                    </div>
                </Grow>
            </Box>
        )
    }

}

export default LeaderBoardTable2;