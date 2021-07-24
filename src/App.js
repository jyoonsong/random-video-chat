import { useEffect, useState } from "react";
import { firebase_auth } from './utils/firebase';

import Login from "./components/Login";
import Chat from "./components/Chat";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase_auth.onAuthStateChanged((user) => {
        if (user !== null) {
            setLoggedIn(true);
            setUser({
              uid: user.uid,
              name: user.displayName,
              email: user.email,
            });
        }
        else {
            setLoggedIn(false);
        }
        setLoading(false);
    })
  }, []);

  const handleLogout = () => {
    firebase_auth.signOut();
  }
  
  return (
    <div className="wrapper">
        {loading ?
          "Loading..."
          :
          <>
            {loggedIn ?
              <>
                <Chat currentUser={user} />
                <button onClick={handleLogout}>Sign out</button>
              </>
            :
              <Login />
            }
          </>
        }
    </div>
  );
}

export default App;
