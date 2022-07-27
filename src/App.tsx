import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import useTheme from "./hooks/useTheme";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const [Theme, toggleTheme] = useTheme();
  return (
    <div className="artboard  min-h-screen  flex flex-col" data-theme={Theme}>
      <div className="flex flex-row-reverse p-4 absolute sm:left-10 sm:bottom-0 sm:right-full right-0 ">
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
