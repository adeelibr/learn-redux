import { createStore } from 'redux';

console.log('Starting Redux Examples');

/**
 * Default/Initial State Which Is Passed 
 * to the reducer as the default value
 * to the `state` param
 */
let stateDefault = {
    name: 'Anonymous',
    hobbies: [],
    movies: [],
};

let nextHobbyId = 1;
let nextMovieId = 1;

let reducer = ( state = stateDefault, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        case 'ADD_HOBBY':
            return {
                ...state,
                hobbies: [
                    ...state.hobbies, 
                    {
                        id: nextHobbyId++,
                        hobby: action.hobby
                    }
                ]
            };
        case 'REMOVE_HOBBY':
            return {
                ...state,
                hobbies: state.hobbies.filter((hobby, index) => hobby.id !== action.id)
            };
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [
                    ...state.movies,
                    {
                        id: nextMovieId++,
                        title: action.movie.title,
                        genre: action.movie.genre,
                    }
                ]
            };
        case 'REMOVE_MOVIE':
            return {
                ...state,
                movies: state.movies.filter((movie, index) => movie.id !== action.id)
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

var action = {
    type: 'CHANGE_NAME',
    name: 'James Bond'
};
store.dispatch(action);

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Running',
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'walking',
});

store.dispatch({
    type: 'REMOVE_HOBBY',
    id: 2,
});

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Kylie Monogue'
});

store.dispatch({
    type: 'ADD_MOVIE',
    movie: {
        title: 'Raiders Of The Lost Ark',
        genre: 'sci-fy'
    }
})

store.dispatch({
    type: 'ADD_MOVIE',
    movie: {
        title: 'Moana',
        genre: 'animated'
    }
})

store.dispatch({
    type: 'REMOVE_MOVIE',
    id: 2,
});

// console.log('currentState after store dispatch', store.getState());


