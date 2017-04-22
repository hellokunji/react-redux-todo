import {createStore} from 'redux';
//import the root reducer
import rootReducer from './reducers/index';

import all from './data/all';


const defaultState= {
	all
};

const store= createStore(rootReducer, defaultState);

export default store;