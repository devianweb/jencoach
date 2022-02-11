import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const signUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password).catch((err) =>
    alert(err)
  );
};
