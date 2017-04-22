import React from 'react';


class TaskItem extends React.Component {
	constructor(props) {
		super(props);

		this.handleCheck= this.handleCheck.bind(this);
		this.handleUnCheck= this.handleUnCheck.bind(this);
		this.handleDelete= this.handleDelete.bind(this);
		this.handleEdit= this.handleEdit.bind(this);
		this.handleEditButton= this.handleEditButton.bind(this);
	}
	handleCheck(noteId, index){
		this.props.checkNote(noteId, index);
	}
	handleUnCheck(noteId, index){	
		this.props.unCheckNote(noteId, index);
	}
	handleDelete(noteId, index){
		this.props.deleteNote(noteId, index);
	}
	handleEditButton(editIndex){
		$("#"+editIndex).parent().parent().hide();
		$("#"+editIndex).parent().parent().next().show();
	}
	checkList(status, noteId, index){
		if(status=="active"){
			return(
				<div className="tliStatus">
					<input type="checkbox" onChange={()=>this.handleCheck(noteId, index)}/>
				</div>
			)
		}
		else{
			return(
				<div className="tliStatus">
					<input type="checkbox" checked onChange={()=>this.handleUnCheck(noteId, index)}/>
				</div>
			)
		}
	}
	handleEdit(e){
		e.preventDefault();
		const index= e.target.getAttribute("data-index");
		const text= $("#editI"+index).val();
		const noteId= $("#editI"+index).attr("data-noteId");

		this.props.editNote(text, noteId, index);


		$("#editB"+index).parent().parent().next().hide();
		$("#editB"+index).parent().parent().show();

		///console.log(text+":::"+noteId+":::"+index);
	}
	render(){
		const data= this.props.data;
		const index= this.props.index;
		return(
			<div key={data.noteId} className="tlItem">
				{this.checkList(data.status, data.noteId, index)}
				<div className="tliText">
					<div className="tlitBefore">
						<div className="tbText">
							{data.text}
						</div>
						<div className="tbButton">
							<button onClick={()=>this.handleDelete(data.noteId, index)}>&#10008;</button>
							<button id={"editB"+index} onClick={()=>this.handleEditButton("editB"+index)}>&#9998;</button>
						</div>
					</div>
					<div className="tlitAfter">
						<form data-index={index} onSubmit={this.handleEdit}>
							<input id={"editI"+index} data-noteId={data.noteId} type="text" defaultValue={data.text}/>
							<button data-index={index} onClick={this.handleEdit}>&#10004;</button>
						</form>
					</div>
				</div>
			</div>	
		)
	}
}

/*
const TaskItem= React.createClass({
	handleCheck(noteId, index){
		//var index= e.target.getAttribute("index");
		//console.log(index+":::"+noteId);
		this.props.checkNote(noteId, index);
	},
	handleUnCheck(noteId, index){	
		//var index= e.target.getAttribute("index");
		//console.log(index+":::"+noteId);
		this.props.unCheckNote(noteId, index);
	},
	handleDelete(noteId, index){
		console.log(noteId+"::::"+index);
		this.props.deleteNote(noteId, index);
	},
	checkList(status, noteId, index){
		if(status=="active"){
			return(
				<div className="tliStatus">
					<input type="checkbox" onChange={()=>this.handleCheck(noteId, index)}/>
				</div>
			)
		}
		else{
			return(
				<div className="tliStatus">
					<input type="checkbox" checked onChange={()=>this.handleUnCheck(noteId, index)}/>
				</div>
			)
		}
	},
	handleEdit(){

	},
	render(){
		const data= this.props.data;
		const index= this.props.index;
		return(
			<div key={data.noteId} className="tlItem">
				{this.checkList(data.status, data.noteId, index)}
				<div className="tliText">
					<div className="tlitBefore">
						<div className="tbText">
							{data.text}
						</div>
						<div className="tbButton">
							<button onClick={()=>this.handleDelete(data.noteId, index)}>&#10008;</button>
							<button onClick={this.handleEditButton}>&#9998;</button>
						</div>
					</div>
					<div className="tlitAfter">
						<form>
							<input type="text" value={data.text} onChange={this.handleEdit}/>
							<button>&#10004;</button>
						</form>
					</div>
				</div>
			</div>	
		)
	}
});
*/

module.exports= TaskItem;