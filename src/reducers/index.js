/**
 * Created by appBakerz - 05 on 11-Feb-17.
 */

import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const reducer = combineReducers({
    todos,
    visibilityFilter
});

export default reducer