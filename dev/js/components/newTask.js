import React, {Component} from 'react';


class NewTask extends React.Component {
	handleAdd(e){
		e.preventDefault();
		var text= $("#new_note").val();
		if(text==""){
			$("#new_note").focus();
		}
		else{
			var noteId= Math.floor(Math.random()*90000000+10000000);
			this.props.addNote(noteId, text);
		}
	}
	render(){
		return (
			<div className="newTask">
				<form onSubmit={this.handleAdd.bind(this)}>
					<input id="new_note" type="text" placeholder="Type new note"/>
					<button onClick={this.handleAdd.bind(this)}>&#10010;</button>	
				</form>
			</div>
		)
	}
}


export default NewTask;