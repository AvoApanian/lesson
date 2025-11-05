import { useState } from "react";
import "./App.css";
import Input from "./composent/input/input";
import Button from "./composent/button/button";

interface PackInter {
  name:string,
  mail:string
}

function App() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");

  const pack:PackInter = {
    name:name,
    mail:mail
  }

  

  const clicked = () =>  {
    const id:string = "1762376669025"
    fetch (`http://127.0.0.1:3001/users/${id}`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      },
      //body:JSON.stringify(pack)
    })

    .then(res => {
      if (!res.ok) { 
        throw new Error(`${res.status} ${res.statusText}`); 
      }
      return res.json();
    })


    .then (data => {
      console.log(data);
    })

    .catch (err => {
      console.error(err)
    })
  }

  return (
    <>
      <Input type="text" onChange={setName} placeholderData="name" />
      <Input type="email" onChange={setMail} placeholderData="email"/>
      <Button click={clicked}/>
    </>
  );
}

export default App;