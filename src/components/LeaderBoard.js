import React, { useState } from 'react';
import LeaderBoardEntry from './LeaderBoardEntry';

let data = [
    {
        username: "User 1",
        points: "100",
        pull_request: 50,
    },
    {
        username: "User 2",
        points: "90",
        pull_request: 30,
    },
    {
        username: "User 3",
        points: "80",
        pull_request: 20,
    },
    {
        username: "User 4",
        points: "60",
        pull_request: 10,
    }
]
const LeaderBoard = () => {
    const renderList = data.map((row, index) => {
        return <LeaderBoardEntry
            rank={index + 1}
            username={row.username}
            points={row.points}
            pull_requests={row.pull_request} />
    });

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">Username</th>
                    <th scope="col">Points</th>
                    <th scope="col">Pull Requests</th>
                </tr>
            </thead>
            <tbody>
                {renderList}
            </tbody>
        </table>
    );
}

export default LeaderBoard;