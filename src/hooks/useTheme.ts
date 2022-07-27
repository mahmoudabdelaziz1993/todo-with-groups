import { useEffect, useState } from "react";

export default function useTheme(): [string, () => void] {
    const [Theme, setTheme] = useState("light");

    let temp = Theme === "light" ? "dark" : "light"

    const toggleTheme = () => setTheme(temp);


    return [Theme, toggleTheme]

}