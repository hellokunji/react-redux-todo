import React, {Component} from 'react';
import {Link} from 'react-router';

class Nav extends Component {
	render(){
		return (
			<div className="mNav">
				<div className="mnLogo">
					<Link to="/">
						<img src="/media/logo.png"/>
						<span>ToDo</span>
					</Link>
				</div>
				<div className="mnLinks">
					<Link id="all" to="/all" className="mnlItem">
						All
					</Link>
					<Link id="active" to="/active" className="mnlItem">
						Active
					</Link>
					<Link id="done" to="/done" className="mnlItem">
						Done
					</Link>
				</div>
				<div className="mnFooter">
					<p>by: <Link to="http://www.kunjimeena.com" target="_blank">Kunji Meena</Link></p>
				</div>
			</div>
		)
	}
}


module.exports= Nav;