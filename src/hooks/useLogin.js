import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    //login user
    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);
      console.log(res.user);
    } catch (err) {
      setError(err.message);
    }
  };
  return { login, error, isPending };
};
