import {useEffect, useState} from "react";
import { useAuth } from "react-oidc-context";
import axios from 'axios';

const Status = () => {

  const [state, setState] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000", {
              headers: {
                'Content-Type': 'application/json',
              }
            }
        );
        setState(response.data);
      } catch (err) {
        console.error("Failed to communicate with api: " + err)
      }
    };
    fetchData();
  }, []);

  return (
        <b>API status: {state.status}</b>
  );
}

export const App = () => {

  const auth = useAuth();

  switch (auth.activeNavigator) {
    case "signinSilent":
      return (
          <div>
            ログイン中...
          </div>
      );
    case "signoutRedirect":
      return (
          <div>
            ログアウト中...
          </div>
      );
  }

  if (auth.isLoading) {
    return (
        <div>
          読み込み中...
        </div>
    );
  }

  if (auth.error) {
    return (
        <div>
          Oops... {auth.error.message}
        </div>);
  }

  if (auth.isAuthenticated) {

    return (
        <p>
          <Status/>
        </p>
    );
  }

  return (
      <button onClick={() => void auth.signinRedirect()}>
        ログイン
      </button>
  );
}
