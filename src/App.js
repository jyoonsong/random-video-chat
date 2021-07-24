import { useEffect, useState } from "react";
import Login from "./components/Login";
import { firebase_auth } from './utils/firebase';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase_auth.onAuthStateChanged((user) => {
        if (user !== null) {
            setLoggedIn(true);
        }
        else {
            setLoggedIn(false);
        }
        setLoading(false);
    })
  }, []);
  
  return (
    <div className="wrapper">
        {loading ?
          "Loading..."
          :
          <>
            {loggedIn ?
              "You are logged in"
            :
              <Login />
            }
          </>
        }
    </div>
  );
}

export default App;
