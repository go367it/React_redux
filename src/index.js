import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store' // importing the central store
import { Provider } from 'react-redux' // importing a function which will provide the central store to the app

store.subscribe(()=> console.log(store.getState()))

ReactDOM.render(
  <React.StrictMode>
    
    {/* providing central store store to app */}
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
