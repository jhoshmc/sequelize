import { NavLink } from "react-router-dom";
const NavBar = () => {
  const tap = (e) => {
    console.log(e.target);
  };
  return (
    <ol className="flex justify-around my-5">
      <li>
        <NavLink to="/home">home</NavLink>
      </li>
      <li>create Post</li>
      <li>
        <NavLink to="/login">sing in / sing up</NavLink>
      </li>
      <li> log out</li>
    </ol>
  );
};

export default NavBar;
