import axios from "axios";

export function getPosts() {
  return async function (dispatch) {
    try {
      const { data } = await axios("http://localhost:3001/post");

      return dispatch({
        type: "GET_ALL_POSTS",
        payload: data,
      });
    } catch (error) {
      console.error({ message: error.message });
    }
  };
}
