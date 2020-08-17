import React, { useState, useEffect } from 'react';
import LeaderBoardEntry from '../components/LeaderBoardEntry';
import axios from 'axios';

const LeaderBoard = () => {
  const [renderList, setRenderList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const users = await axios.get("https://script.google.com/macros/s/AKfycbxAfEhHRFKiwJ05oG1Zw4vF5sXqdnXKm2d6NP3QrF7C3oIhbxY/exec");
      console.log(users);
      const userList = users.data.user.map((row, index) => {
        return <LeaderBoardEntry
          rank={index + 1}
          username={row.username}
          points={row.points}
          pull_requests={row.pull_request}
          key={row.username}
        />
      });
      setRenderList(userList);
    }

    fetchData();
  }, []);

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