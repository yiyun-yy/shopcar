import React from 'react';
import Router from './router/index'
import './scss/index.css'
import store from './store/index'
import { Provider } from 'react-redux'
import './mock/data'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router />
      </div>
    </Provider>

  );
}

export default App;
