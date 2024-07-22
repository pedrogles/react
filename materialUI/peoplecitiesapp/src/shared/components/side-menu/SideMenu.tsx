import React from "react";
import { Avatar, Divider, List, useMediaQuery, useTheme, Box, Drawer } from "@mui/material";
import { useDrawerContext } from "../../contexts";
import { ListItemLink } from "./list-item-link/ListItemLink";

interface ISideMenu {
  children: React.ReactNode;
};

export const SideMenu: React.FC<ISideMenu> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const { isDrawerOpen, toggleDrawerState, drawerOptions } = useDrawerContext();
  return (
    <>
      <Drawer
        variant={smDown ? "temporary" : "permanent"}
        open={isDrawerOpen}
        onClose={toggleDrawerState}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(18)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://avatars.githubusercontent.com/u/76228682?v=4"
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              {drawerOptions.map((drawerOption) => {
                return (
                  <ListItemLink
                    key={drawerOption.path}
                    label={drawerOption.label}
                    to={drawerOption.path}
                    icon={drawerOption.icon}
                    onClick={smDown ? toggleDrawerState : undefined}
                  />
                );
              })}
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height="100vw" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
