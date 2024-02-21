import Card from "../card/Card";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/actionsCreated";

// const array = [1, 2];
const Cards = () => {
  const dispatch = useDispatch();
  const { allPosts } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <section className="parent-section">
      <br />
      {allPosts.map((post) => (
        <Card post={post} key={post.id} />
      ))}
    </section>
  );
};

export default Cards;
