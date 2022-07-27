import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import useTheme from "./hooks/useTheme";

function App() {
  const [Theme] = useTheme();
  return (
    <div className="" data-theme={Theme}>
      <ThemeToggle />
    </div>
  );
}

export default App;
