import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App"

import "./estilos.css"

// function App () {
//   return "Hola Mundo"
// }

// const App = () => "Hola Mundo con JSX y Arrow Function"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);
