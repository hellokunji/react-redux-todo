import {createStore, compse} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

//import the root reducer
import rootReducer from './reducers/index';

import todo from './data/todo';

//create an object for the default data
const defaultState= {
	todo
};

const store= createStore(rootReducer, defaultState);

export const history= syncHistoryWithStore(browserHistory, store);

export default store;