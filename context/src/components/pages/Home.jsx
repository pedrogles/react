import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

export default function Home() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
        <h1>Home</h1>
        <p>tema: {theme}</p>
        <button onClick={toggleTheme}> clica</button>
        </>
    )
}