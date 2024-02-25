import axios from "axios";
//* post
export function getPosts() {
  return async function (dispatch) {
    try {
      const { data } = await axios("/post");

      return dispatch({
        type: "GET_ALL_POSTS",
        payload: data,
      });
    } catch (error) {
      console.error({ message: error.message });
    }
  };
}
//* user
export function getUsers() {
  return async function (dispatch) {
    try {
      const { data } = await axios("/user");

      return dispatch({
        type: "GET_ALL_USERS",
        payload: data,
      });
    } catch (error) {
      console.error({ message: error.message });
    }
  };
}
