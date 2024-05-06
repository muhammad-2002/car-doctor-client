import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";
import UseAxiosSecure from "./../custom-hook/UseAxiosSecure";
export const AuthContext = createContext(null);
const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  const signUpForEmailAndPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const axiosSecure = UseAxiosSecure();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        const logedInUser = user?.email;
        const userEmail = { email: logedInUser };
        if (user) {
          setUser(user);
          setLoading(false);
          axiosSecure.post("/jwt", userEmail).then();
        } else {
          setUser(null);
          setLoading(false);

          axiosSecure.post("/logout", userEmail).then();
        }
      },
      () => unsubscribe()
    );
  }, []);

  const AuthObj = {
    user,
    createWithEmailAndPassword,
    signUpForEmailAndPass,
    logOutUser,
    loading,
  };
  return (
    <div>
      <AuthContext.Provider value={AuthObj}>{children}</AuthContext.Provider>
    </div>
  );
};

export default Provider;
