import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './container/HomePage';
import { store } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <HomePage />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
