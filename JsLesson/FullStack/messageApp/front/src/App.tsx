import { useState } from 'react'
import './App.css'
import Input from './composent/Input/input'
import Button from './composent/button/button'

interface DataObj {
  data:string
}

function App() {
  const [text,setText] = useState("")

  const clicked = () => {
    const obj:DataObj = {
      data:text
    }

    const id:string = "1762365609593"

    fetch (`http://127.0.0.1:3001/message/${id}`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      },
      //body:JSON.stringify(obj)
    })

    .then((res) => {
        if (!res.ok) throw new Error(
          `${res.status} ${res.statusText}`
        );
        return res.json(); 
      })

    .then (data => {
      console.log(data)
    })

    .catch (err => {
      console.error(err)
    })
  }
  
  return (
    <>
      <div className="app">
        <h1 className="title">Message App</h1>
        <Input onChange={setText} />
        <Button click={clicked} />
      </div>
    </>
  )
}

export default App
