import React from 'react';

import TaskItem from './taskItem';


class Active extends React.Component {
	componentDidMount() {
		$(".mnlItem").removeClass("navActive");
		$("#active").addClass("navActive");
	}
	render(){
		const listArray= [];
		const allList= this.props.todo;
		for(var i=0; i<allList.length; i++){
			if(allList[i].status=="active"){
				listArray.push(
					<TaskItem {...this.props} index={i} key={allList[i].noteId} data={allList[i]}/>
				)
			}
		}
		return(
			<div className="taskList">
				{listArray}
			</div>
		)
	}
}

module.exports= Active;