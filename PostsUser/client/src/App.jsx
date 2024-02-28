import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Landing from "./views/Landing";
import "./App.css";
import CreateUser from "./components/CreateUser";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<CreateUser />} />
      </Routes>
    </div>
  );
}

export default App;
