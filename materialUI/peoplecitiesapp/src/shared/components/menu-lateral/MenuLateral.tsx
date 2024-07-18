import React from "react";
import { Avatar, Divider, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import { Box, Drawer } from "@mui/material";
import { useDrawerContext } from "../../contexts";

interface IMenuLateral {
  children: React.ReactNode;
};

export const MenuLateral: React.FC<IMenuLateral> = ({ children }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const { isDrawerOpen, toggleDrawerState } = useDrawerContext();
    return (
        <>
            <Drawer variant={smDown ? "temporary" : "permanent"} open={isDrawerOpen} onClose={toggleDrawerState}>
                <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column'>
                    <Box width='100%' height={theme.spacing(18)} display='flex' alignItems='center' justifyContent='center'>
                        <Avatar 
                            sx={{ height: theme.spacing(12), width: theme.spacing(12)}} 
                            src="https://avatars.githubusercontent.com/u/76228682?v=4" 
                        />
                    </Box>

                    <Divider />

                    <Box flex={1}>
                        <List component='nav'>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>
                                <ListItemText primary='Página Inicial'/>
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box height='100vw' marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
};
