import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export const NotExists = () => {
  return (
    <Box textAlign="center">
      <Typography variant="h1">404</Typography>
      <Typography variant="p">This page doesn't exist</Typography>
    </Box>
  );
};
