import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);
  const googleProvider = new GoogleAuthProvider();

  //    create user with email,password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   login with email ,password
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google Login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };


  // update profile
  const updateUserProfile=(name,photo)=>{
    return updateProfile(auth.currentUser,{
      displayName:name,
      photoURL:photo
    });

  }
  //
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    createUser,
    login,
    googleLogin,
    user,
    setUser,
    updateUserProfile,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
