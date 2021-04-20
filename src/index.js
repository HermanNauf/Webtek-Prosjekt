import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import dataReducer from "./store/dataReducer";
import { StrictMode } from "react";
import { Provider } from "react-redux";


import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
const reduxStore = createStore(dataReducer, compose(applyMiddleware(thunk)));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={reduxStore}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  rootElement
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
