import React from 'react';

import TaskItem from './taskItem';


class Done extends React.Component {
	componentDidMount() {
		$(".mnlItem").removeClass("navActive");
		$("#done").addClass("navActive");
	}
	render(){
		const listArray= [];
		const allList= this.props.todo;
		for(var i=0; i<allList.length; i++){
			if(allList[i].status=="done"){
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

module.exports= Done;