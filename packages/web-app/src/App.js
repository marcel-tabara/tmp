import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from '@template/redux-store'
import { Provider } from 'react-redux'

const template_store = store()

console.log('########## store', template_store)


function App() {
  return (
    <Provider store={template_store}>
      <div>
        This is the web-app
      </div>
  </Provider>
  );
}

export default App;
