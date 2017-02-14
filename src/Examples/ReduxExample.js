import { createStore } from 'redux';

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

let store = createStore(reducer);

// Subscribe To Changes
let unsubscribe = store.subscribe(() => {
    let state = store.getState();
    console.log('Current State Name Is , ', state.name);
});

// let currentState = store.getState();
// console.log('currentState ', currentState);

var action = {
    type: 'CHANGE_NAME',
    name: 'James Bond'
};

store.dispatch(action);

// unsubscribe();

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Kylie Monogue'
});

// console.log('currentState after store dispatch', store.getState());


