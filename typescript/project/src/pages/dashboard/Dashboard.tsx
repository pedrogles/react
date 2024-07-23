import { useLoggedUser } from "../../shared/hooks";


export const Dashboard = () => {
    const { loggedUser } = useLoggedUser();
    return (
        <>
            <h1>Dashboard</h1>
            <p>Usuário Logado: {loggedUser}</p>
        </>
    )
}