import { connect } from 'react-redux';
import Counter from './counter';
import { decrementCount, incrementCount, resetCount } from '../../lib/store';

const mapDispatchToProps = dispatch => ({
  increment: () => {
    dispatch(incrementCount());
  },
  decrement: () => {
    dispatch(decrementCount());
  },
  reset: () => {
    dispatch(resetCount());
  },
});

function mapStateToProps(state) {
  const { count } = state;
  return { count };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);