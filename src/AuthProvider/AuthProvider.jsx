import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null);
function AuthProvider({ children }) {
  const [user, setUser] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  //Create account
  const createAccount = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  // User login
  const signInUser = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  // user sign out

  const signOutUser = () => {
    return signOut(auth);
  };

  // Update profile name and image
  const setProfile = (data) => {
    return updateProfile(auth.currentUser, data);
  };
  // Google sign in
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setDataLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const authInfo = {
    user,
    createAccount,
    signInUser,
    signOutUser,
    setProfile,
    googleLogin,
    dataLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
