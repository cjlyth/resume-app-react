
import { connect } from 'react-redux';
import Counter from './counter';
// import {decrementCount, incrementCount, resetCount} from "../../lib/store";

// type Props = {
//   count: number
// }
//
// class CounterContainer extends PureComponent<Props> {
//   state = { count: [] };
//   increment = () => {
//     const { dispatch } = this.props;
//     dispatch(incrementCount());
//   }
//
//   decrement = () => {
//     const { dispatch } = this.props;
//     dispatch(decrementCount());
//   }
//
//   reset = () => {
//     const { dispatch } = this.props;
//     dispatch(resetCount());
//   }
// }

function mapStateToProps(state) {
  const { count } = state;
  return { count };
}

export default connect(mapStateToProps)(Counter);
