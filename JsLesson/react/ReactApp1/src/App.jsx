import { useState } from "react";
import "./App.css";


function App (){
    const [userName, setUserName] = useState("");
  
    return (
    <section>
      <input
        type="text"
        value={userName}  
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <h2>Hello {userName}</h2>
    </section>
  )
}

export default App;