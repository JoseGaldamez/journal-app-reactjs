import React from "react";
import { useDispatch, useSelector } from "react-redux";
// Material UI
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

// Actions
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth";
// Hooks
import { useForm } from "../../hooks";
// Components
import { AuthLayout } from "../layout/AuthLayout";
import { useMemo } from "react";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  const { email, password, onInputChange } = useForm({
    email: "josegaldamez@gmail.com",
    password: "123456",
  });

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(checkingAuthentication({ email, password }));
  };

  const handlerGoogleSubmit = () => {
    console.log("handlerGoogleSubmit");
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={handlerSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              name="email"
              value={email}
              onChange={onInputChange}
              type="email"
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              name="password"
              value={password}
              onChange={onInputChange}
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid>
          <Grid container sx={{ mb: 2, mt: 1 }} spacing={2}>
            <Grid item xs={12} md={6}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isAuthenticating}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                variant="contained"
                fullWidth
                onClick={handlerGoogleSubmit}
                disabled={isAuthenticating}
              >
                <Google /> <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container justifyContent="end" direction="row">
            <Link color="inherit" to="/auth/register" component={RouterLink}>
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
