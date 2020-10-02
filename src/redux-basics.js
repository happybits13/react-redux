const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}


// 1. Reducer 
// must always return a state.
const rootReducer = (state = initialState, action) => {
    if (action.type == 'INC_COUNTER'){
        // first para: initial state
        // second para: the new state you want to change
        return {
          ...state,
          counter: state.counter + 1
        };
    }

    if (action.type == 'ADD_COUNTER'){
        // first para: initial state
        // second para: the new state you want to change
        return {
          ...state,
          counter: state.counter + action.value
        };
    }

    return state
    
}

// 2. Store
const store = createStore(rootReducer);
console.log(store.getState());

// 3. Subscription
// Will be executed whenever dispatch mutates the store
store.subscribe(() => {
    console.log('[Subscription]', store.getState())
});

// 4. Dispatching Action
// convention is all caps for type
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());

// Subcription
