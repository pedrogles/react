import { createContext, FC, ReactNode, useCallback, useState } from "react";

export interface ILoggedUserContextData {
    loggedUser: string;
    setLoggedUser: (newName: string) => void;
}

interface ILoggedUserProvider {
    children: ReactNode;
}

export const LoggedUserContext = createContext<ILoggedUserContextData>({} as ILoggedUserContextData);

export const LoggedUserProvider: FC<ILoggedUserProvider> = ({ children }) => {
    const [loggedUser, setLoggedUser] = useState('');
    const handleChangeLoggedUser = useCallback((newName: string) => {
        setLoggedUser(newName);
    }, [loggedUser])
    return (
        <LoggedUserContext.Provider value={{loggedUser, setLoggedUser: handleChangeLoggedUser}}>
            {children}
        </LoggedUserContext.Provider>
    )
}