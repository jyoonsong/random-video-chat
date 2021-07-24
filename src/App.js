import { useEffect, useState } from "react";
import Login from "./components/Login";
import { firebase_auth } from './utils/firebase';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    firebase_auth.onAuthStateChanged((user) => {
        if (user !== null) {
            setLoggedIn(true);
        }
        else {
            setLoggedIn(false);
        }
    })
  }, []);

  return (
    <div className="wrapper">
        {loggedIn ?
          "You are logged in"
        :
          <Login />
        }
    </div>
  );
}

export default App;
