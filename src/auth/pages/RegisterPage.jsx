import React, { useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailAndPassword } from "../../store/auth/thunks";

const defaultData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe tener un @"],
  password: [
    (value) => value.length >= 6,
    "La contraseña debe tener al menos 6 caracteres",
  ],
  displayName: [(value) => value.length >= 1, "El nombre es obligatorio"],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );

  const [formSubmited, setFormSubmited] = useState(false);
  const {
    email,
    password,
    displayName,
    onInputChange,
    isFormValid,
    emailValid,
    passwordValid,
    displayNameValid,
  } = useForm(defaultData, formValidations);

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid || isCheckingAuthentication) return;
    setFormSubmited(true);
    dispatch(
      startCreatingUserWithEmailAndPassword({ email, password, displayName })
    );
  };

  return (
    <AuthLayout title="Registro">
      <form onSubmit={handlerSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Tu nombre"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmited}
              helperText={formSubmited ? displayNameValid : null}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmited}
              helperText={formSubmited ? emailValid : null}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmited}
              helperText={formSubmited ? passwordValid : null}
            />
          </Grid>
          <Grid container sx={{ mb: 2, mt: 1 }} spacing={2}>
            <Grid item xs={12} display={!!errorMessage ? "" : "none"}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                disabled={isCheckingAuthentication}
              >
                Crear cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container justifyContent="end" direction="row">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link color="inherit" to="/auth/login" component={RouterLink}>
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
