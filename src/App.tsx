import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import useTheme from "./hooks/useTheme";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const [Theme, toggleTheme] = useTheme();
  return (
    <div className="artboard  min-h-screen p-4" data-theme={Theme}>
      <div className="flex flex-row-reverse  ">
        <ThemeToggle Theme={Theme} toggleTheme={toggleTheme} />
      </div>
      <Routes>
        <Route path="/Login" element={<Login />} />

        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
