import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import myApp from './reducers'

let store = createStore(myApp)

function render() {
    ReactDOM.render(
        <div className="container">
          <App store={store}/>
        </div>,
        document.getElementById('root')
      )
}
store.subscribe(render)

render()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
