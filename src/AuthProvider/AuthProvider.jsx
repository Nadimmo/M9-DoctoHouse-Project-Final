import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../components/Hooks/useAxiosPublic";
const auth = getAuth(app);

export const AuthContext = createContext();
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();
const TwitterProvider = new TwitterAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic()

  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const LogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const ProfileUpdate = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  const GoogleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };

  const GithubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, GithubProvider);
  };
  const TwitterSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, TwitterProvider);
  };

  useEffect(() => {
    const UnSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
      console.log(currentUser);
      const userInfo = {email: currentUser?.email}
      // jwt
      axiosPublic.post('/jwt', userInfo)
      .then(res =>{
        if(currentUser){
          localStorage.setItem('access-token', res.data.token)
        }
        else{
          localStorage.removeItem('access-token')
        }
      })

    });

    return () => {
      UnSubscribe();
    };
  });

  const authInfo = {
    register,
    login,
    user,
    loading,
    LogOut,
    ProfileUpdate,
    GoogleSignIn,
    GithubSignIn,
    TwitterSignIn,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
