// @flow
import { connect } from 'react-redux';
import Project from './project';
import { selectTechnology, registerTechnologies } from './actions';

const mapDispatchToProps = dispatch => ({
  registerTechnologies: (technologies) => {
    dispatch(registerTechnologies(technologies));
  },
  selectTechnology: (selectedTechnology) => {
    dispatch(selectTechnology(selectedTechnology));
  },
});

function mapStateToProps(state) {
  const { selectedTechnology } = state;
  return {
    selectedTechnology: selectedTechnology.list,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Project);
