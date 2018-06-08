import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';

// This will make sense to you once we discuss the Redux code,
// but for now, just know that 'homeOperations' will let you trigger
// Redux actions.
import { homeOperations } from './api';

const mapStateToProps = (state) => {
  const { homeData, showHomeSpinner } = state.home;
  return {
    homeData,
    showHomeSpinner,
  };
};

const mapDispatchToProps = (dispatch) => {
  const fetchHomeJson = (home) => {
    dispatch(homeOperations.fetchHomeJson(home));
  };

  return { fetchHomeJson };
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeComponent);

export default HomeContainer;
