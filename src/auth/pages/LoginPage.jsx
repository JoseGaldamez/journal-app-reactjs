import { Google, MailOutline } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid>
          <Grid container sx={{ mb: 2, mt: 1 }} spacing={2}>
            <Grid item xs={12} md={6}>
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button variant="contained" fullWidth>
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
