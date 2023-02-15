import { registerUserWithPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();

    if (!result.ok)
      return dispatch(logout({ errorMessage: result.errorMessage }));

    dispatch(login(result));
    // Google Authentication
  };
};


export const startCreatingUserWithEmailAndPassword = ({email, password, displayName}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await registerUserWithPassword({email, password, displayName});
    if (!result.ok)
      return dispatch(logout({ errorMessage: result.errorMessage }));

    dispatch(login(result));
  };
}