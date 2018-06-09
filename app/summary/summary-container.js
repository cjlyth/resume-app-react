import { connect } from 'react-redux';
import Summary from './summary';
import { fetchSummaryData } from './actions';

const mapDispatchToProps = dispatch => ({
  fetchSummary: () => {
    dispatch(fetchSummaryData());
  },
});

function mapStateToProps(state) {
  const { summary } = state;
  console.log(state);
  return { summary };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Summary);
