import React from 'react';
import shortid from 'shortid';

type Props = {
  homeData: Array,
  showHomeSpinner: boolean,
  fetchHomeJson: Function
};

export default ({
  homeData,
  showHomeSpinner,
  fetchHomeJson,
}: Props) => (
  <div>
    {showHomeSpinner ? (
      <p>Loading...</p>
    ) : (
      <ul>
        {homeData.map(data => (
          <li key={shortid.generate()}>
            <a href={`https://reddit.com${data.url}`} target="_blank">{data.title}</a>
          </li>
        ))}
        <button onClick={() => fetchHomeJson('reactjs')}>Show ReactJS subreddits</button>
      </ul>
    )}
  </div>
);
