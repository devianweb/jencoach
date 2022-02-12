import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password).catch((err) =>
    alert(err)
  );
};

export const signUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password).catch((err) =>
    alert(err)
  );
};
