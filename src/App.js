import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/Index';

import './App.css';
import Home from './pages/home/Home';
import Info from './pages/Info/Info';


const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
            <Route path="/info">
              <Info />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </Provider>
  );
}

export default App;
