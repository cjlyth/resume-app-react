import React from 'react';

const pad = n => (n < 10 ? `0${n}` : n);
const format = t => `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`;

type Props = {
  +lastUpdate: any,
  +light: boolean
}

export default ({ lastUpdate, light }: Props) => (
  <div className={light ? 'light' : ''}>
    {format(new Date(lastUpdate))}
    <style jsx>{`
        div {
          padding: 15px;
          display: inline-block;
          color: #82FA58;
          font: 50px menlo, monaco, monospace;
          background-color: #000;
        }

        .light {
          background-color: #999;
        }
      `}
    </style>
  </div>
);
