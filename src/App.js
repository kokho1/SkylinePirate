import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust import path based on your structure
import Home from "./pages/Home"; // Ensure all components are properly imported
import Crew from "./pages/Crew";
import Adventures from "./pages/Adventures";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/adventures" element={<Adventures />} />
      </Routes>
    </Router>
  );
};

export default App;
