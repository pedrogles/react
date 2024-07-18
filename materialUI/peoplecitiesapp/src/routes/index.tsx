import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppThemeContext, useDrawerContext } from "../shared/contexts/index";

export const AppRoutes = () => {
    const { toggleTheme } = useAppThemeContext();
    const { toggleDrawerState } = useDrawerContext();
    return (
        <Routes>
            <Route path="/pagina-inicial" element={
                <>
                    <Button variant="contained" color="primary" onClick={toggleTheme}>Mudar tema</Button>
                    <Button variant="contained" color="primary" onClick={toggleDrawerState}>Menu</Button>
                </>} />
            <Route path="*" element={<Navigate to="/pagina-inicial" />}/>
        </Routes>
    )
};