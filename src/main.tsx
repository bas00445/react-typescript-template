import ReactDOM from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import App from "./App";

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
