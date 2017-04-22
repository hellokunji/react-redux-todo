import React, {Component} from 'react';
import {bindActionCreators} from 'redux'; 
import {connect} from 'react-redux';
import {addNote} from '../actions/actionCreators';

class NewTask extends Component {
	componentDidMount() {
		var page= this.props.page;
		$("#"+page).addClass("navActive");
	}
	handleAdd(event){
		event.preventDefault();
		var text= $("#new_note").val();
		if(text==""){
			$("#new_note").focus();
		}
		else{
			this.props.addNote(text);
		}
	}
	render(){
		return (
			<div className="newTask">
				<form onSubmit={this.handleAdd}>
					<input id="new_note" type="text" placeholder="Type new note"/>
					<button onClick={this.handleAdd}>&#10010;</button>	
				</form>
			</div>
		)
	}
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({addNote: addNote}, dispatch)
}

function mapStateToProps(state){
	return {
		all: state.all
	};
}

export default connect(mapStateToProps, matchDispatchToProps)(NewTask);