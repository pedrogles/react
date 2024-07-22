import React from "react";
import { Icon, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface IListItemLink {
  label: string;
  icon?: string;
  to: string;
  onClick: (() => void) | undefined;
};

export const ListItemLink: React.FC<IListItemLink> = ({ label, icon, to, onClick }) => {
  const navegate = useNavigate();
  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: false });
  const handleNavegate = () => {
    navegate(to);
    onClick?.();
  };
  return (
    <ListItemButton selected={!!match} onClick={handleNavegate}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};
