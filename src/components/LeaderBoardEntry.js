import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
    body: {
        fontSize: 16,
    }
}))(TableCell);

const LeaderBoardEntry = ({ rank, username, points, pull_requests }) => {
    return (
        <StyledTableRow>
            <StyledTableCell align="center" component="th" scope="row">
                {rank}
            </StyledTableCell>
            <StyledTableCell align="center">{username}</StyledTableCell>
            <StyledTableCell align="center">{points}</StyledTableCell>
            <StyledTableCell align="center">{pull_requests}</StyledTableCell>
        </StyledTableRow>
    );
}

export default LeaderBoardEntry;