import { Button, Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
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
      <Grid container direction="column" spacing={2} mt={10}>
        <Grid item>
          <Typography variant="h5">Create new account</Typography>
        </Grid>
        <Grid item xs={4}>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="userName"
              label="Name"
              variant="filled"
              {...register("name")}
              error={!!errors.name?.message}
              helperText={errors.name?.message}
            />
            <TextField
              id="surname"
              label="Surname"
              variant="filled"
              {...register("surname")}
              error={!!errors.surname?.message}
              helperText={errors.surname?.message}
            />
            <TextField
              id="login"
              type="email"
              label="Email"
              variant="filled"
              autoComplete="on"
              {...register("email")}
              error={!!errors.email?.message}
              helperText={errors.email?.message}
            />
            <TextField
              id="password"
              type="password"
              label="Password"
              variant="filled"
              autoComplete="on"
              {...register("password")}
              error={!!errors.password?.message}
              helperText={errors.password?.message}
            />
            <Box>
              <Button variant="contained" type="submit" size="large">
                Registration
              </Button>
              <Button
                size="large"
                sx={{ ml: 2 }}
                onClick={() => navigate("/login")}
              >
                Already have an Account?
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
