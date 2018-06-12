import React from 'react';
import shortid from 'shortid';

export const DateRange = ({ dates }) =>
  dates.map((d, i) => (
    <span key={shortid.generate()}>{d} {i === 0 && ' - '}</span>
  ));

