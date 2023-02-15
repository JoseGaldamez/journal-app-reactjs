import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./init";

const googleAuthProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleAuthProvider);
    //const credentials = GoogleAuthProvider.credentialFromResult(result);
    //console.log(credentials);
    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const registerUserWithPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    // Create user
    const result = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = result;

    // Update user profile displayName
    await updateProfile(FirebaseAuth.currentUser, { displayName });

    return { ok: true, displayName, email, photoURL, uid };
  } catch (error) {
    return { ok: false, errorMessage: error.message };
  }
};
