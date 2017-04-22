import React from 'react';
import Nav from './nav';
import NewTask from './newTask';


class Main extends React.Component {
	render(){
		return(
			<div className="mainFrame">
				<div className="main">
					<Nav/>
					<div className="mCont">
						<div className="mcForm">
							<NewTask {...this.props}/>
						</div>
						<div className="mcList">
							{React.cloneElement(this.props.children, this.props)}
						</div>
					</div>
				</div>
			</div>
		)
	}
}


export default Main;