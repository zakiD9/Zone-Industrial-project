import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/error";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/Admin" element={<Dashboard/>} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
  );
}

export default App;
