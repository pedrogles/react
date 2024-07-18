import { useMediaQuery, useTheme } from "@mui/material";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

interface IDrawerContext {
  isDrawerOpen: boolean;
  toggleDrawerState: () => void;
};

interface IDrawerProvide {
    children: React.ReactNode;
};

const DrawerContext = createContext({} as IDrawerContext);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<IDrawerProvide> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  useEffect(() => {
    if (smDown) setIsDrawerOpen(false);
  }, [smDown]);

  const toggleDrawerState = useCallback(() => {
    setIsDrawerOpen(oldDrawerState => !oldDrawerState);
  }, [isDrawerOpen]);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerState }}>
      {children}
    </DrawerContext.Provider>
  );
};
