import rootReducer from "./Reducers/index";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";

const composeEnhancer =
  (typeof window !== "undefined" &&
    process.env.NODE_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = () =>
  createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default createWrapper(store);
