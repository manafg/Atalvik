import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore } from 'redux';
import {Provider} from 'react-redux';
import {initialState} from './initial-state';
import {userReducer} from './Reducers/user-reducer'

const combinedReducers = combineReducers({
    user : userReducer,
});


const store = createStore(
    combinedReducers, 
    initialState, 
    window.devtoolsextension && window.devtoolsextension()); 

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));
serviceWorker.unregister();
