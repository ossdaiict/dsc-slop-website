import React from 'react';
import { Link } from '@reach/router';

export default function HomePage() {
  return (
    <>
      <div>This is HomePage Page! </div>
      <Link to={'/leaderboard'}>
        <div>Link to leaderboards!</div>
      </Link>

      <Link to={'/projects'}>
        <div>Link to Projects!</div>
      </Link>
    </>
  );
}
