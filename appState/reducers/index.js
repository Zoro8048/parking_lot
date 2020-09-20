import parking from './parking';
import {combineReducers} from 'redux';
 
const allReducers = combineReducers({
    parking: parking

});
export default allReducers;