const initialState = 0; // initializing initial state

// function for changing the state
const chnageNumber = ( state = initialState, action ) => {

    // handling state for different cases
    switch(action.type){
        case "INCREMENT" : return state + 1;
        case "DECREMENT" : return state - 1;
        default: return state;
    }

}

export default chnageNumber