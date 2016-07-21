import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './appActions';
import App from './App';


function mapStateToProps(state) {
  return {
    // foo: state.foo,
    // bar: state.bar
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const appDispatcher = connect(mapStateToProps, mapDispatchToProps)(App);

export default appDispatcher;
