import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./src/Redux/Store.js";
import App from "./App.jsx";
import "./index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);
