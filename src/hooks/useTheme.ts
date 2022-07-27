import { useState } from "react";

export default function useTheme() {
    const [Theme, setTheme] = useState("light");
    const toggleTheme = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    }

    return [Theme, toggleTheme]

}