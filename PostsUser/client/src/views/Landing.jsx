import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h2>bienvenido a los post</h2>
      <span>haga click par ingresar</span>
      <NavLink to="/home">
        <button>click</button>
      </NavLink>
    </div>
  );
};

export default Landing;
