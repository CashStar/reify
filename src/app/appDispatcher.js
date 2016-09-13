import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../todo/todoModule';
import App from '../index/App';


// this is where we connect our app's props to our redux state tree
// add a new mapping to mapStateToProps every for each branch
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
