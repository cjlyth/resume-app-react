import { connect } from 'react-redux';
import Clock from './clock';


const mapStateToProps = (state) => {
  const { lastUpdate, light } = state;
  return { lastUpdate, light };
}

export default connect(mapStateToProps)(Clock);
