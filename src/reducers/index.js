import changeNumber from './upDown' // importing different reducers

import { combineReducers } from 'redux' // importing a redux function for combining all the reducers

// combining all the reducers
const rootReducer = combineReducers({
    changeNumber
})

export default rootReducer