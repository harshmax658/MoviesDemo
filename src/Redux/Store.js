import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

const thunk =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action === "function") {
      action(dispatch);
      return;
    }
    next(action);
  };
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
