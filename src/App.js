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
