import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter} from 'react-router-dom';
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import Reducers from './reducers/index'


/*



*/
const store = createStore(
    Reducers,
    applyMiddleware( thunk )
)

ReactDOM.render(
    <HashRouter>
        <Provider store = { store } >
            <App />
        </Provider>
    </HashRouter>
    , 
    document.getElementById('root')
);
