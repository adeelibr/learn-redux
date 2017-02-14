import { createStore, combineReducers } from 'redux';

console.log('Starting Redux Examples');

/**
 * Initialize store, by using createStore and
 * passing it the reducer
 */
// let store = createStore(reducer);

/**
 * Name Reducers & Actions Generators
 */
let nameReducer = (state = 'Anonymous', action) => {
    switch (action.type) {
        case 'CHANGE_NAME': { 
            return action.name;
        }
        default:
            return state;
    }
}

let changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        name: name
    }
}

/**
 * Hobbies Reducers & Actions Generators
 */
let nextHobbyId = 1;
let hobbiesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_HOBBY': {
            return [ ...state, { id: nextHobbyId++, hobby: action.hobby } ];
        }
        case 'REMOVE_HOBBY': {
            return state.filter((hobby, index) => hobby.id !== action.id);
        }
        default: 
            return state;
    }
}

let addHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        hobby: hobby
    }
}
let removeHobby = (id) => {
    return {
        type: 'REMOVE_HOBBY',
        id: id
    }
}

/**
 * Movies Reducers & Actions Generators
 */
let nextMovieId = 1;
let moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MOVIE': {
            return [ ...state, { id: nextMovieId++, title: action.title, genre: action.genre } ];
        }
        case 'REMOVE_MOVIE': {
            return state.filter((movie, index) => movie.id !== action.id);
        }
        default: 
            return state;
    }
}

let addMovie = (title, genre) => {
    return {
        type: 'ADD_MOVIE',
        title: title,
        genre: genre
    }
}
let removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        id: id,
    };
}


/**
 * combineReducers is a more efficient way to
 * mangage your reduces rather then putting all of 
 * your reducers in a single function e.g, oldReducer() 
 * function in the code above.
 */
let reducer = combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer,
});

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
    console.log('New State Is ', state); 
    document.getElementById('redux-output').innerHTML = JSON.stringify(state);
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
// console.log('currentState ', store.getState());

store.dispatch(changeName('James Bond'));
store.dispatch(addHobby('Running'));
store.dispatch(addHobby('Walking'));
store.dispatch(removeHobby(2));
store.dispatch(changeName('Connor McGreygor'));
store.dispatch(addMovie('Indian Jones', 'sci-fy'));
store.dispatch(addMovie('Moana', 'animated'));
store.dispatch(removeMovie(2));

// console.log('currentState after store dispatch', store.getState());


