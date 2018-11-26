import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import {createEpicMiddleware} from 'redux-observable';
import {allEpics} from "./epics";

// Material UI Typography
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const epicMiddleware = createEpicMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  composeEnhancer(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(allEpics);

ReactDOM.render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
