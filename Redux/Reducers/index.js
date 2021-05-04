import { combineReducers } from "redux";
import movieDetailReducer from "./movieDetailReducer";
import movieReducer from "./movieReducer";
import searchBarReducer from "./searchBarReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
  movieDetail: movieDetailReducer,
  show_search: searchBarReducer,
});

export default rootReducer;
