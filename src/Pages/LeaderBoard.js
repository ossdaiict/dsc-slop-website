import React from 'react';
import LeaderBoardTable2 from '../components/LeaderBoardTable2';
import { Typography, Grow } from '@material-ui/core';
import { Cookies, useCookies } from 'react-cookie';

const cookies = new Cookies();

const LeaderBoard = () => {
  const [cookie, setCookie] = useCookies(['']);

  React.useEffect(() => {
    const bearCookie = cookies.get('bearCookie');
    console.log(bearCookie);
    setCookie('bearCookie', { loaded: false }, { path: '/' });
  }, [cookies]);

  return (
    <div className="mt-20 min-h-screen w-full">
      <Grow in>
        <LeaderBoardTable2 />
      </Grow>
    </div>
  );
};

export default LeaderBoard;
