import { createStore } from 'redux';

let stateDefault = { 
    searchText: '', 
    showCompleted: false, 
    todos: []
};

let reducer = (state=stateDefault, action) => {
    switch (action.type) {
        case 'CHANGE_SEARCH_TEXT':
            return { 
                ...state, 
                searchText: action.name 
            };
        default: 
            return state;
    }
}
let store = createStore(reducer);

let currentState = store.getState();
console.log('current state of store ', currentState);

var action = {
    type: 'CHANGE_SEARCH_TEXT',
    name: 'searchText changed'
};

store.dispatch(action);

console.log('Store State After Dispatching Action ', store.getState());