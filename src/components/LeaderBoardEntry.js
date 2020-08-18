import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const LeaderBoardEntry = ({ rank, username, points, pull_requests }) => {
    return (
        <TableRow>
            <TableCell align="center" component="th" scope="row">
                {rank}
            </TableCell>
            <TableCell align="center">{username}</TableCell>
            <TableCell align="center">{points}</TableCell>
            <TableCell align="center">{pull_requests}</TableCell>
        </TableRow>
    );
}

export default LeaderBoardEntry;