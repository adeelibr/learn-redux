import { createStore } from 'redux';

console.log('Starting Redux Examples');

let reducer = (state = { name: 'Anonymous' }, action) => {
    return state;
}
let store = createStore(reducer);

let currentState = store.getState();
console.log('currentState ', currentState);