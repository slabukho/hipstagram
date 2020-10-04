import React from 'react'
import './App.scss';
import Application from './Containers/Application';
import { Provider } from 'react-redux';
import store from './store/store'


const App = () => {
  return (
    <Provider store={store} >
      <Application />
    </Provider>

  )
}

export default App;
