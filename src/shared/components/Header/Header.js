import styles from "./Header.module.css"
import { IconicButton } from "../IconicButton/IconicButton.js";
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";
import { useState } from "react";

export function Header({ toggleBanner }) {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        document.documentElement.setAttribute("data-theme", theme)
    };
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
                Web Topics
            </Link>
            <div className={styles.buttonContainer}>
                <IconicButton text={"Dark Mode"} icon={"moon-outline"} onClick={toggleTheme} />
                <IconicButton text={"Favourite"} icon={"heart-outline"} onClick={toggleBanner} />
            </div>
        </header>
    )
}