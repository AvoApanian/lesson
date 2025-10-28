import { useState } from "react";
import './App.css';

function App() {
  const [mailInp, setMail] = useState<string>("");
  const [passwordInp, setPassword] = useState<string>("");
  const [responseMsg, setResponseMsg] = useState<string>("");

  const sendBack = () => {
    const req = {
      mail: mailInp,
      password: passwordInp,
    };

    fetch("http://127.0.0.1:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    })
      .then(async (res) => {
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || `${res.status} ${res.statusText}`);
        }

        return data;
      })
      .then((data) => {
        if (data.passwordStrong === false) {
          setResponseMsg(data.message);
        } else if (data.mailValide === false) {
          setResponseMsg(data.message);
        }else {
          setResponseMsg("Welcome");
        }
      })
      .catch((e) => {
        console.error(e);
        setResponseMsg("Error: " + e.message);
      });
  };

  return (
    <section className="app-section">
      <h2>Sign Up</h2>

      <input
        type="text"
        value={mailInp}
        onChange={(e) => setMail(e.target.value)}
        placeholder="Enter your mail"
      />

      <input
        type="password"
        value={passwordInp}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />

      <button onClick={sendBack}>Sign up</button>

      {responseMsg && <p>{responseMsg}</p>}
    </section>
  );
}

export default App;
