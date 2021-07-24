import React from "react";

import { firebase_auth, firebase_instance } from "../utils/firebase";

const Login = () => {

    const handleClick = async () => {
        const provider = new firebase_instance.auth.GoogleAuthProvider();
        await firebase_auth.signInWithPopup(provider);
    }

    return (
        <button onClick={handleClick}>Continue with Google</button>
    )
}
export default Login;