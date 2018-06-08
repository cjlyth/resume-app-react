import React, { PureComponent } from 'react';

type Props = {
  +count: number,
  +increment: Function,
  +decrement: Function,
  +reset: Function,
}
class Counter extends PureComponent<Props> {
  render() {
    return (
      <div>
        <h1>Count: <span>{this.props.count}</span></h1>
        <button onClick={this.props.increment}>+1</button>
        <button onClick={this.props.decrement}>-1</button>
        <button onClick={this.props.reset}>Reset</button>
      </div>
    );
  }
}

export default Counter;
