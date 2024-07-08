import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
import "./app.css"

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme} app`}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
