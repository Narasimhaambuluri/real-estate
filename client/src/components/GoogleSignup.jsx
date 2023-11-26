import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "./../firebase.js";

function GoogleSignup() {
  async function signup(e) {
    e.preventDefault();
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <button
      className="bg-red-500 text-white p-3 rounded-lg uppercase"
      onClick={signup}
    >
      Continue with Google
    </button>
  );
}

export default GoogleSignup;
