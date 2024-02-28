import axios from "axios";
import { useState } from "react";
import { validation } from "../helpers/valueformUser";
const CreateUser = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    event.preventDefault();
    const property = event.target.name;
    const value = event.target.value;

    setInput({
      ...input,
      [property]: value,
    });
    setErrors(
      validation({
        ...input,
        [property]: value,
      })
    );
  };

  console.log(errors);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let err = Object.keys(validation(input));
      if (err.length !== 0) {
        alert("llene todos los datos");
        return;
      } else {
        const { data } = await axios.post("/user", input);
        console.log(data);
        alert("perfil creado");
      }
    } catch (error) {
      console.error(error.message);

      alert(error.response.data.message);
    }
  };
  return (
    <section className=" flex flex-col border-4 border-sky-500">
      <div>Sing Up</div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="">nombre</label>
          <input
            name="name"
            value={input.name}
            onChange={handleChange}
            type="text"
          />
        </div>

        {errors.name && <h2>{errors.name}</h2>}
        <div className="flex flex-col">
          <label htmlFor="">email </label>
          <input
            name="email"
            value={input.email}
            onChange={handleChange}
            type="email"
          />
        </div>
        {errors.email && <h4>{errors.email}</h4>}
        <div className="flex flex-col">
          <label htmlFor="">password</label>
          <input
            name="password"
            value={input.password}
            onChange={handleChange}
            type="text"
          />
        </div>
        {errors.password && <h4>{errors.password}</h4>}
        <button type="submit">create</button>
      </form>
    </section>
  );
};

export default CreateUser;
