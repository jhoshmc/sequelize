import { GET_ALL_POSTS } from "./actionsTypes";

const initialState = {
  allPosts: [],
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        allPosts: payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
