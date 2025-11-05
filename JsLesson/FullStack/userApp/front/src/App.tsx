import { useState } from 'react'
import './App.css'
import Button from './composent/button/button'
import Input from './composent/input/input'

function App() {
  const [name,setName] = useState("")
  const [mail,setMail] = useState("")
  const [title,setTitle] = useState("")
  const [bodi,setBodi] = useState("")


  const fetched = () => {
    
  }

  return (
    <>
      <section>
        <div>
          <Input 
            types='text'
            onchange={(e) => setName(e.target.value)}
            placeholderValue = "name"
          />
          <Input
            types = "email"
            onchange={(e) => setMail(e.target.value)}
            placeholderValue='Email'
          />
          <Button click={fetched} text = "user"/>
        </div>
        <div>
          <Input
            types = "text"
            onchange={(e) => setTitle(e.target.value)}
            placeholderValue='title'
            />
            <Input
              types='text'
              onchange={(e) => setBodi(e.target.value)}
              placeholderValue='body'
              />
              <Button click={fetched} text = "posts"/>
        </div>
      </section>
    </>
  )
}

export default App
