import React from 'react';

const LeaderBoardEntry = ({ rank, username, points, pull_requests }) => {
    return (
        <tr>
            <th scope="row">{rank}</th>
            <td>{username}</td>
            <td>{points}</td>
            <td>{pull_requests}</td>
        </tr>
    );
}

export default LeaderBoardEntry;