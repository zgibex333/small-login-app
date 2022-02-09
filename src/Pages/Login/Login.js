import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Container, Grid, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./Schema";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const sumbitHandle = (data) => {
    console.log(data);
  };
  return (
    <Container maxWidth="sm" onSubmit={handleSubmit(sumbitHandle)}>
      <Grid container direction="column">
        <Grid item mt={10}>
          {/*Login*/}
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              "> div:first-of-type": {
                marginBottom: "1rem",
              },
              "> div:last-of-type": {
                marginTop: "1rem",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="login"
              label="Login"
              variant="filled"
              type="email"
              autoComplete={"on"}
              {...register("login")}
              error={!!errors.login?.message}
              helperText={errors.login?.message}
            />
            <TextField
              id="password"
              label="Password"
              variant="filled"
              type="password"
              autoComplete={"on"}
              error={!!errors.password?.message}
              {...register("password")}
              helperText={errors.password?.message}
            />
            <Box xs={4}>
              <Button variant="contained" type="submit" size="large">
                Login
              </Button>
              <Button
                size="large"
                sx={{ ml: 2 }}
                onClick={() => navigate("/register")}
              >
                Create an Account
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
