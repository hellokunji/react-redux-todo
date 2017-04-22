var React = require('react');

class Login extends React.Component {
	constructor(props) {
	  super(props);
	}
	handleSubmit(event){
		event.preventDefault();
		var id= $("#log_id").val();
		var pass= $("#log_pass").val();

		if(id=="kunji" && pass=="kunjiReactRedux"){
			$.ajax({
	            url: "/backend/setSession.php",
	            data:{
	            	id: id
	            },
	            type: "POST",
	            dataType: "json",
	            success: function (data) {
	            	console.log(JSON.stringify(data));
	            	
	            	if(data.message=="no_error"){
	            		window.location.replace('/');
	            	}
	            	else{
	            		alert("login failed, try again");
	            	}
	            	
	            }.bind(this)
	        });
		}
		else{
			alert("enter_correct_credentials");
		}

	}
	render(){
		return(
			<div className="login">
				<img src="/media/logo_big.png"/>
				<h1>TODO Application</h1>

				<form onSubmit={this.handleSendEmail}>
					<input id="log_id" type="text" placeholder="User Name"/>
					<input id="log_pass" type="password" placeholder="Password"/>
					<button id="log_button" onClick={this.handleSubmit}>Send Email</button>
				</form>
			</div>
		)
	}
}

module.exports= Login;