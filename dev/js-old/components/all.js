var React = require('react');
import TaskList from '../containers/tasklist';
import Nav from './nav';
import NewTask from './newTask';

const All= () => (
	<div className="main">
		<Nav page="all"/>
		<div className="mCont">
			<div className="mcForm">
				<NewTask/>
			</div>
			<div className="mcList">
				<TaskList type="all"/>
			</div>
		</div>
	</div>
);

module.exports= All;