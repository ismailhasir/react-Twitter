import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signup = async (email, password, userName) => {
    setError(null);
    setIsPending(true);

    //signup user
    try {
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(res.user);

      if (!res) {
        throw new Error("Could not completed the sign up!");
      }

      //add userName to firestore
      await res.user.updateProfile({ userName: userName });
    } catch (err) {
      setError(err.message);
    }
  };
  return { signup, error, isPending };
};
