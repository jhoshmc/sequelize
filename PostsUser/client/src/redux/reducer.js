import { GET_ALL_POSTS, GET_ALL_USERS } from "./actionsTypes";

const initialState = {
  allUsers: [],
  allPosts: [],
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: payload,
      };

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
