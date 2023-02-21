import {
    loginWithEmailAndPassword,
    logoutFirebase,
    registerUserWithPassword,
    signInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const startCheckingAuthentication = ({ email, password }) => {
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
    };
};

export const startCreatingUserWithEmailAndPassword = ({
    email,
    password,
    displayName,
}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await registerUserWithPassword({
            email,
            password,
            displayName,
        });
        if (!result.ok)
            return dispatch(logout({ errorMessage: result.errorMessage }));

        dispatch(login(result));
    };
};

export const startLoginWithEmailAndPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await loginWithEmailAndPassword({ email, password });

        if (!result.ok)
            return dispatch(logout({ errorMessage: result.errorMessage }));

        dispatch(login(result));
    };
};

export const startLogout = () => {
    return async (dispatch) => {
        try {
            await logoutFirebase();
            dispatch(logout());
        } catch (error) {
            console.warn(error);
        }
    };
};
