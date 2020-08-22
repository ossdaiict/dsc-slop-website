import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import TableContainer from '@material-ui/core/TableContainer';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage'
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grow from '@material-ui/core/Grow';


import LeaderBoardEntry from './LeaderBoardEntry';
import { TableBody } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);


const useStyles = makeStyles({
    table: {
        minWidth: 350,
    },
});

const useStyles1 = makeStyles((theme) => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
    },
}));

function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    const handleFirstPageButtonClick = (event) => {
        onChangePage(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onChangePage(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div className={classes.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

const LeaderBoardTable = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(8);
    const [loaded, setLoaded] = React.useState(false);


    const handleChangePage = (event, newPage) => {
        console.log(newPage);
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("https://script.google.com/macros/s/AKfycbxAfEhHRFKiwJ05oG1Zw4vF5sXqdnXKm2d6NP3QrF7C3oIhbxY/exec");
            let usersList = response.data.user;
            setUsers(usersList);
            setLoaded(true);
        }

        fetchData();
    }, []);

    const classes = useStyles();
    if (loaded === false) {
        return (
            <Grid container spacing={3} justify="center" alignItems="center" style={{ height: '100vh', textAlign: "center" }}>
                <Grid item>
                    <CircularProgress size={100} />
                </Grid>
            </Grid>
        );
    }
    else {
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
                <Grid item xs={12} sm={12}>
                    <Grow in={true}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Rank</TableCell>
                                        <TableCell align="center">Username</TableCell>
                                        <TableCell align="center">Points</TableCell>
                                        <TableCell align="center">Pull Requests</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        (rowsPerPage > 0 ? users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : users)
                                            .map((row, index) => {
                                                return <LeaderBoardEntry
                                                    rank={page * rowsPerPage + index + 1}
                                                    username={row.username}
                                                    points={row.points}
                                                    pull_requests={row.pull_request}
                                                    key={row.username}
                                                />
                                            })
                                    }
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TablePagination
                                            rowsPerPageOptions={[8, 20, 30, { label: 'All', value: -1 }]}
                                            colSpan={3}
                                            count={users.length}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                            SelectProps={{
                                                inputProps: { 'aria-label': 'rows per page' },
                                                native: true,
                                            }}
                                            onChangePage={handleChangePage}
                                            onChangeRowsPerPage={handleChangeRowsPerPage}
                                            ActionsComponent={TablePaginationActions}
                                        />
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </TableContainer>
                    </Grow>
                </Grid>
            </Grid>
        );
    }
}

export default LeaderBoardTable;