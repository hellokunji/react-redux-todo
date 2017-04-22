var React = require('react');
var Component = require('react');
var page = require('page');

var Initial= require('./initial');
//var Login= require('./login');
var All= require('./all');
var Active= require('./active');
var Done= require('./done');


require('../../scss/style.scss');


class App extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {component: <Initial/>};
	}
	componentDidMount() {
		var self= this;
		/*
		var auth;
		$.ajax({
            url: "/backend/checkSession.php",
            type: "POST",
            dataType: "json",
            success: function (data) {
            	//console.log(JSON.stringify(data));
            	var parseData= JSON.parse(data);
            	auth= parseData.message;
            }.bind(this)
        });


		var self= this;
		console.log(auth);
		if(auth=="not_active"){
            console.log("not_active");
			self.setState( {component: <Login/> });
		}
		else{
            console.log("active");
            */
			page('/', function(){
				self.setState({ component: <All/> });
			});	
			/*
			page('/login', function(){
				self.setState({ component: <Login/> });
			});
			*/
			page('/all', function(){
				self.setState({ component: <All/> });
			});

			page('/active', function(){
				self.setState({ component: <Active/> });
			});

			page('/done', function(){
				self.setState({ component: <Done/> });
			});

			page.start();
			/*
		}*/
	}
	render(){
		return(
			<div className="mainFrame">
				{this.state.component}
			</div>
		)
	}
}

/*
const App= () => (
	<div id="mainBG" className="main addBG5 bg15">
		hello
	</div>
);
*/
module.exports= App;