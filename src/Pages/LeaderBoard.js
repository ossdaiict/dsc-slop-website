import React from 'react';
import LeaderBoardTable from '../components/LeaderBoardTable';

const LeaderBoard = () => {
  const iframe =
    '<iframe class="airtable-embed" src = "https://airtable.com/embed/shroD5TJj8KuroIXS?backgroundColor=blue&viewControls=on" frameborder = "0" onmousewheel = "" width = "100%" height = "533" style = "background: transparent; border: 1px solid #ccc;" ></iframe >';
  return (
    // <>
    //   <div dangerouslySetInnerHTML={{ __html: iframe ? iframe : '' }} />
    // </>
    <LeaderBoardTable />
  );
};

export default LeaderBoard;
