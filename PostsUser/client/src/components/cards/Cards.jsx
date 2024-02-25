import Card from "../card/Card";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, getUsers } from "../../redux/actionsCreated";

const Cards = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.allPosts);
  const allUsers = useSelector((state) => state.allUsers);
  // console.log(allUsers);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, []);

  return (
    <section className="parent-section">
      <br />
      {allPosts.map((post) => (
        <Card post={post} users={allUsers} key={post.id} />
      ))}
    </section>
  );
};

export default Cards;
