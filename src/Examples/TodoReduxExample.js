import { createStore } from 'redux';

let stateDefault = { 
    searchText: '', 
    showCompleted: false, 
    todos: []
};

let reducer = (state = stateDefault, action) => {
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

// let store = createStore(reducer);

/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

// console.log('Current State Of Store ', store.getState());

// Subscribe To Changes
store.subscribe(() => {
    let state = store.getState();
    console.log('SearchText Current State Is ', state.searchText);
    document.getElementById('redux-output').innerHTML = state.searchText;
});


var action = {
    type: 'CHANGE_SEARCH_TEXT',
    name: 'searchText changed'
};

store.dispatch(action);
store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    name: 'something different'
});
store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    name: 'new search awesome'
});

// console.log('Store State After Dispatching Action ', store.getState());