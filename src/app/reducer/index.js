import {combineReducers} from  'redux'

import userinfo from './userinfo'

var rootReducer = combineReducers({
    userinfo: userinfo
})

export default rootReducer