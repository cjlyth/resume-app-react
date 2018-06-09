// @flow
import React, { PureComponent } from 'react';

type Props = {
  +fetchSummary: Function,
}


// count, increment, decrement, reset,
// }: Props) => (
class Summary extends PureComponent<Props> {
  componentDidMount() {
    const { fetchSummary } = this.props;
    fetchSummary();
    console.log('componentDidMount', this.props);
  }
  render() {
    const {
      fetchSummary,
    } = this.props;
    return (
      <div>
        <button onClick={fetchSummary}>Load</button>
      </div>
    );
  }
}

export default Summary;
