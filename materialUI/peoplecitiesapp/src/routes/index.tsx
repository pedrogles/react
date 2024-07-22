import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppThemeContext, useDrawerContext } from "../shared/contexts/index";
import { useEffect } from "react";

export const AppRoutes = () => {
    const { toggleTheme } = useAppThemeContext();
    const { toggleDrawerState, setDrawerOptions } = useDrawerContext();
    useEffect(() => {
        setDrawerOptions([
            {
                path: '/pagina-inicial',
                label: 'Página Inicial',
                icon: 'home'
            },
            {
                path: '/ok',
                label: 'ok',
                icon: 'close'
            }
        ])
    }, [])
    return (
        <Routes>
            <Route path="/pagina-inicial" element={
                <>
                    <Button variant="contained" color="primary" onClick={toggleTheme}>Mudar tema</Button>
                    <Button variant="contained" color="primary" onClick={toggleDrawerState}>Menu</Button>
                </>} />
            <Route path="/ok" element={<h1>ok</h1>}/>
            <Route path="*" element={<Navigate to="/pagina-inicial" />}/>
        </Routes>
    )
};