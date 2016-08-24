import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../todo/todoModule';
import App from './App';


function mapStateToProps(state) {
  return {
    todos: state.get('todos')
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const appDispatcher = connect(mapStateToProps, mapDispatchToProps)(App);

export default appDispatcher;
