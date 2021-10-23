import { createStore } from "redux"; // importing a redux function for creating a central state

import rootReducer from "./reducers/index"; // importiung all the reducers 

// creating the central store using createStore function
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store