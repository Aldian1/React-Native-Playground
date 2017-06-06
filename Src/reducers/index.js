//creates reducer entry point
//why do we do this?


import {combineReducers} from 'redux'
import appData from './dataReducer.js'

const rootReducer = combineReducers({appData})


export default rootReducer