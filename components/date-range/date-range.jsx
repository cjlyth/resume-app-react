import React from 'react';
import sid from 'shortid';

const DateRange = ({ dates }) =>
  dates.map((d, i) => (
    <span key={sid.generate()}>{d} {i === 0 && ' - '}</span>
  ));

export default DateRange;
