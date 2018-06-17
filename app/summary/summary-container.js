// @flow
import { connect } from 'react-redux';
import Summary from '../../components/summary';
import { fetchSummaryIfNeeded } from './summary-actions';
import { toggleSettings } from '../settings/settings-actions';

const mapDispatchToProps = dispatch => ({
  toggleSettings: () => {
    dispatch(toggleSettings());
  },
  fetchSummary: () => {
    dispatch(fetchSummaryIfNeeded());
  },
});

function mapStateToProps(state) {
  const { summary, settings } = state;
  const { settingsOpen } = settings;
  return { settingsOpen, ...summary.data };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Summary);
