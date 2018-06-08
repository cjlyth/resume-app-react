import { connect } from 'react-redux';
import Summary from './summary';
import { decrementCount, incrementCount, resetCount } from './actions';

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
)(Summary);
