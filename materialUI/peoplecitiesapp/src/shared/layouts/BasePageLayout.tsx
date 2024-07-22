import {
  Box,
  Icon,
  IconButton,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDrawerContext } from "../contexts";

interface IBaseLayoutPages {
  title: string;
  children: React.ReactNode;
}

export const BaseLayoutPages: React.FC<IBaseLayoutPages> = ({
  children,
  title,
}) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const theme = useTheme();
  const { toggleDrawerState } = useDrawerContext();
  return (
    <Box display="flex" flexDirection="column" gap={1} height="100%">
      <Box
        display="flex"
        alignItems="center"
        height={theme.spacing(12)}
        gap={1}
        padding={1}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerState}>
            <Icon>menu</Icon>
          </IconButton>
        )}
        <Typography variant="h5" component="h1">
          {title}
        </Typography>
      </Box>
      <Box>Barra de ferramentas</Box>
      <Box>{children}</Box>
    </Box>
  );
};
