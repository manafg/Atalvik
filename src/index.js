import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk'
import {applyMiddleware, compose ,combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import {initialState} from './initial-state';
import {userReducer} from './Reducers/user-reducer';
import {BTCreducer} from './Reducers/BTC-reducer'

const combinedReducers = combineReducers({
    user : userReducer,
    BTC: BTCreducer
});

const storeEnhancer = compose(
    applyMiddleware(thunk),
)

const store = createStore(
    combinedReducers, 
    initialState, 
    storeEnhancer,
 ); 

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));
serviceWorker.unregister();
