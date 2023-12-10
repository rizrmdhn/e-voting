import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { Provider } from "react-redux"
import store from "./states/index.js"
import { BrowserRouter } from "react-router-dom"
import "./styles/index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
