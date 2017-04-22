import React, {Component} from 'react';
import {connect} from 'react-redux';


class TaskList extends Component {
	handleCheckbox(e){
		var id= e.target.getAttribute("data-id");
		console.log(id);
	}
	checkList(status, id){
		if(status=="active"){
			return(
				<div className="tliStatus">
					<input data-id={id} type="checkbox" onChange={this.handleCheckbox}/>
				</div>
			)
		}
		else{
			return(
				<div className="tliStatus">
					<input data-id={id} type="checkbox" checked onChange={this.handleCheckbox}/>
				</div>
			)
		}
	}
	createListItems(){
		var type= this.props.type;

		return this.props.all.map((all) => {
			if(type=="all"){
				return (
					<div key={all.id} className="tlItem">
						{this.checkList(all.status, all.id)}
						<div className="tliText">
							<div className="tlitBefore">
								<div className="tbText">
									{all.text}
								</div>
								<div className="tbButton">
									<button>&#9998;</button>
									<button>&#10008;</button>
								</div>
							</div>
							<div className="tlitAfter">
								<form>
									<input type="text" value={all.text}/>
									<button>&#10004;</button>
								</form>
							</div>
						</div>
					</div>
				)
			}
			else{
				if(type==all.status){
					return (
						<div key={all.id} className="tlItem">
							{this.checkList(all.status)}
							<div className="tliText">
								<div className="tlitBefore">
									<div className="tbText">
										{all.text}
									</div>
									<div className="tbButton">
										<button>&#9998;</button>
										<button>&#10008;</button>
									</div>
								</div>
								<div className="tlitAfter">
									<form>
										<input type="text" value={all.text}/>
										<button>&#10004;</button>
									</form>
								</div>
							</div>
						</div>		
					)
				}
			}
		});
	}
	render(){
		return (
			<div className="taskList">
				{this.createListItems()}
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		all: state.all
	};
}

export default connect(mapStateToProps)(TaskList);