import { useMediaQuery, useTheme } from "@mui/material";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

interface IDrawerOptions {
  path: string;
  icon: string;
  label: string;
}

interface IDrawerContext {
  isDrawerOpen: boolean;
  drawerOptions: IDrawerOptions[];
  toggleDrawerState: () => void;
  setDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => void;
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
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([]);
  
  useEffect(() => {
    if (smDown) setIsDrawerOpen(false);
  }, [smDown]);

  const toggleDrawerState = useCallback(() => {
    setIsDrawerOpen(oldDrawerState => !oldDrawerState);
  }, [isDrawerOpen]);

  const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOptions[]) => {
    setDrawerOptions(newDrawerOptions);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerState, drawerOptions, setDrawerOptions: handleSetDrawerOptions }}>
      {children}
    </DrawerContext.Provider>
  );
};
