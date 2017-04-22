var React = require('react');
var ReactDOM = require('react-dom');

//Import Components
import App from  './components/app';
import All from  './components/all';
import Active from  './components/active';
import Done from  './components/done';

//import react router deps
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';


const router= (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={All}></IndexRoute>
				<Route path="/all" component={All}></Route>
				<Route path="/active" component={Active}></Route>
				<Route path="/done" component={Done}></Route>
			</Route>
		</Router>
	</Provider>
)

ReactDOM.render(
  router, 
  document.getElementById('root')
);


/*
var count= 0;
function startCounter(){
	count+=1;
	document.getElementById("count").innerHTML= count;
}

setInterval(startCounter, 1000);
*/