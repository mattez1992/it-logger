import { combineReducers } from "redux";
import techReducer from "./techReducer";
import logReducer from "./logReducer";

export default combineReducers({
  // this is what we call the state
  log: logReducer,
  tech: techReducer,
});
