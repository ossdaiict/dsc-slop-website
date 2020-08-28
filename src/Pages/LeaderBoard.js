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
  //const iframe =
  // '<iframe class="airtable-embed" src = "https://airtable.com/embed/shroD5TJj8KuroIXS?backgroundColor=blue&viewControls=on" frameborder = "0" onmousewheel = "" width = "100%" height = "533" style = "background: transparent; border: 1px solid #ccc;" ></iframe >';
  return (
    // <>
    //   <div dangerouslySetInnerHTML={{ __html: iframe ? iframe : '' }} />
    // </>

    <div className="mt-20 min-h-screen w-full">
      <Grow in>
        <Typography className="text-2xl mt-64 xs:mx-1 xs:text-base text-white text-center">
          Leaderboard will be live after the coding round begins!
        </Typography>
      </Grow>
      {/* <LeaderBoardTable2 /> */}
    </div>
  );
};

export default LeaderBoard;
