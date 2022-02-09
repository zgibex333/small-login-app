import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

export const Home = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 10 }}>
      <Box>
        <Typography variant="h1">Homepage</Typography>
        <Typography variant="h6" component="p">
          Demo app with login, registration and updating profile functionality
        </Typography>
      </Box>
    </Container>
  );
};
