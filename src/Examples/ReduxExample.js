import { createStore } from 'redux';

console.log('Starting Redux Examples');

let reducer = ( state = { name: 'Anonymous' }, action) => {
    console.log('New Action ', action);
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

let currentState = store.getState();
console.log('currentState ', currentState);

var action = {
    type: 'CHANGE_NAME',
    name: 'James Bond'
};

store.dispatch(action);

console.log('currentState after store dispatch', store.getState());


