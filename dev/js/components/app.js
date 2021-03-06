import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './main';

function mapStateToProps(state){
	return{
		todo: state.todo
	}
}

function mapDispachToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch);
}

const App= connect(mapStateToProps, mapDispachToProps)(Main);

export default App;