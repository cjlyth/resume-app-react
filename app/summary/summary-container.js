// @flow
import { connect } from 'react-redux';
import Summary from '../../components/summary';
import { fetchSummaryIfNeeded, toggleSettings } from './summary-actions';

const mapDispatchToProps = dispatch => ({
  toggleSettings: () => {
    dispatch(toggleSettings());
  },
  fetchSummary: () => {
    dispatch(fetchSummaryIfNeeded());
  },
});

function mapStateToProps(state) {
  const { summary } = state;
  return { ...summary.data };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Summary);
