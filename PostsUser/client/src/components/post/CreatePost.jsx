import { useState } from "react";

const CreatePost = () => {
  const [input, setInput] = useState({
    title: "",
    texto: "",
    image: "",
  });
  const handleChange = (event) => {
    event.preventDefault();
    const property = event.target.name;
    const value = event.target.value;
    setInput({
      ...input,
      [property]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("tap");
  };
  return (
    <section className=" flex flex-col">
      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col">
          <label htmlFor="">titulo:</label>
          <input
            name="title"
            value={input.title}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="">texto:</label>
          <input
            name="texto"
            value={input.texto}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="">imagen:</label>
          <input
            name="image"
            value={input.image}
            onChange={handleChange}
            type="text"
          />
          <input type="image" src={input.image} alt="post" />
        </div>
        <button type="submit">postear</button>
      </form>
    </section>
  );
};

export default CreatePost;
