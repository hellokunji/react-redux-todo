import {combineReducers} from 'redux';
import all from './all';

const allReducers= combineReducers({
	all: all
});

module.exports= allReducers;