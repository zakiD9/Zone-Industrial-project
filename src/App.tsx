import { Routes, Route } from "react-router-dom";

function App() {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
  );
}

export default App;
