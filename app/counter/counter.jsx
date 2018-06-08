import React, { PureComponent } from 'react';
import { incrementCount, decrementCount, resetCount } from '../../lib/store';

type Props = {
  dispatch: Function,
  count: number
}
class Counter extends PureComponent<Props> {
  increment = () => {
    const { dispatch } = this.props;
    dispatch(incrementCount());
  }

  decrement = () => {
    const { dispatch } = this.props;
    dispatch(decrementCount());
  }

  reset = () => {
    const { dispatch } = this.props;
    dispatch(resetCount());
  }

  render() {
    const { count } = this.props;
    return (
      <div>
        <h1>Count: <span>{count}</span></h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Counter;