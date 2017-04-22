import React, {Component} from 'react';

class Nav extends Component {
	componentDidMount() {
		var page= this.props.page;
		$("#"+page).addClass("navActive");
	}
	render(){
		return (
			<div className="mNav">
				<div className="mnLogo">
					<img src="/media/logo.png"/>
					<span>ToDo</span>
				</div>
				<div className="mnLinks">
					<a id="all" href="/all">
						All
					</a>
					<a id="active" href="/active">
						Active
					</a>
					<a id="done" href="/done">
						Done
					</a>
				</div>
				<div className="mnFooter">
					<p>by: <a href="http://www.kunjimeena.com" target="_blank">Kunji Meena</a></p>
				</div>
			</div>
		)
	}
}


module.exports= Nav;