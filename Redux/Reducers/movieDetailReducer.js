import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  clickedMovie: {
    genres: [],
    production_companies: [],
  },
};

const movieDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      let nextState = { ...state, ...action.payload };
      if (nextState !== action.payload) {
        nextState = action.payload.movieDetail;
      }
      return nextState;

    case "FETCH_MOVIE_DETAIL":
      return {
        loading: false,
        ...state,
        clickedMovie: action.payload.movieDetails,
      };

    default:
      return { ...state };
  }
};

export default movieDetailReducer;
