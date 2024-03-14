import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PresistGate } from "redux-persist/integration"

ReactDOM.render(
  <Provider store={store}>
    <PresistGate loading={null} persistor={persistor}>
      <App /> 
    </PresistGate>
  </Provider>,
  document.getElementById('root')
);