import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import postReducer from "./postReducer";
import commentReducer from "./commentReducer";

const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer,
  routing: routerReducer
});

export default rootReducer;
