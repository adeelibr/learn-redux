import Redux, { createStore } from 'redux';

console.log('Starting Redux Examples');

let reducer = ( state = { name: 'Anonymous' }, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        default: 
            return state;
    }
}   

/**
 * Initialize store, by using createStore and
 * passing it the reducer
 */
// let store = createStore(reducer);

/**
 * This is how you use redux-dev-tools, which is chrome
 * extension https://github.com/zalmoxisus/redux-devtools-extension
 * the `eslint-disable no-underscore-dangle` is used to override the
 * eslint configuration added by create-react-app
 */
/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

// Subscribe To Changes
store.subscribe(() => {
    let state = store.getState();
    console.log('Current State Name Is , ', state.name);
    document.getElementById('redux-output').innerHTML = state.name
});

/**
 * If you at any time want to unsubscribe to the Changes
 * being made to the store, then simply assign your store.subscribe()
 * method to a variable and at any point in your code if you want to 
 * unsubscribe just call that variable method like unsubscribe()
 */
// let unsubscribe = store.subscribe(() => {
//     let state = store.getState();
//     console.log('Current State Name Is , ', state.name);
// });
// unsubscribe();

// Get Current State Of Your Store
console.log('currentState ', store.getState());

var action = {
    type: 'CHANGE_NAME',
    name: 'James Bond'
};

store.dispatch(action);
store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Kylie Monogue'
});

// console.log('currentState after store dispatch', store.getState());


