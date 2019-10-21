import {combineReducers} from 'redux' //把所有需要处理的值，结合起来；
import list from './list'
import details from './details'
import user from './user'




let Reducers =  combineReducers({
    list,
    details,
    user
})

export default Reducers;
