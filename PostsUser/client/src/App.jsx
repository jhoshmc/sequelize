import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Landing from "./views/Landing";
import "./App.css";
import CreateUser from "./components/CreateUser";
import { useLocation } from "react-router-dom";
import NavBar from "./components/nav/NavBar";

function App() {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<CreateUser />} />
      </Routes>
    </div>
  );
}

export default App;
