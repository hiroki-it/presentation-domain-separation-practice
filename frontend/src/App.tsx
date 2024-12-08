import {useEffect, useState} from "react";
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

  return (
      <p>
        <Status/>
      </p>
  );
}
