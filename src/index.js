import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import Contador from "./components/Contador.js";
import Car from "./components/Car.js";
ReactDOM.render(
  <React.StrictMode>
    <Contador />
    <App />
    <Car marca="Subaru" modelo="Impreza" aceleracion="20" velmaxima="240" />
    <Car marca="Dodge" modelo="Challenger" aceleracion="15" velmaxima="200" />
    <Car marca="Renault" modelo="Clio" aceleracion="10" velmaxima="240" />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
