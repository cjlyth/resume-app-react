// @flow
import React from 'react';

type Props = {
  +count: number,
  +increment: Function,
  +decrement: Function,
  +reset: Function,
}

const Summary = ({
  count, increment, decrement, reset,
}: Props) => (
  <div>
    <h1>Count: <span>{count}</span></h1>
    <button onClick={increment}>+1</button>
    <button onClick={decrement}>-1</button>
    <button onClick={reset}>Reset</button>
  </div>
);

export default Summary;
