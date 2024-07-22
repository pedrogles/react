import { Navigate, Route, Routes } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import { Dashboard } from "../pages";

export const AppRoutes = () => {
    const { setDrawerOptions } = useDrawerContext();
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
            <Route path="/pagina-inicial" element={<Dashboard />} />
            <Route path="/ok" element={<h1>ok</h1>}/>
            <Route path="*" element={<Navigate to="/pagina-inicial" />}/>
        </Routes>
    )
};