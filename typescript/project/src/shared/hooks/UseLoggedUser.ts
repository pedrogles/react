import { useContext } from "react";
import { LoggedUserContext } from "../contexts";

export const useLoggedUser = () => {
    return useContext(LoggedUserContext);
}