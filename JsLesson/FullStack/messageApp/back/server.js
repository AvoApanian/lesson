const express = require("express")
const fs = require("node:fs")
const {valideInp} = require("./middleware")
const cors = require("cors");

const server = express()
const PORT = 3001

server.use(cors({
  origin: "http://localhost:5173", 
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

server.use(express.json())

server.post("/message",valideInp,(req,res) => {
    const message = req.msg
    if (!message){
        return res.status(500).json(
            {message:"Intern Server error"}
        )
    }

    const data = fs.readFileSync("messages.json",{encoding:"utf-8"})
    const dataParsed = JSON.parse(data)

    dataParsed.push(message)
    fs.writeFileSync("messages.json",JSON.stringify(
        dataParsed,null,2
    ))
    res.status(200).json({
        message:"Message Add succesfully"
    })
})

server.get("/message/:id",(req,res) => {
    const {id} = req.params
    if (!id) {
        return res.status(400).json({
            message:"Invalide Id"
        })
    }

    const data = fs.readFileSync("messages.json",{encoding:"utf-8"})
    const dataParse = JSON.parse(data)

    const found = dataParse.find(item => item.id == id)
    
    if (!found){
        return res.status(404).json({
            message:"id not found"
        })
    }

    const idFilter = dataParse.filter(item => item.id == id)
    res.status(200).json({idFilter})
})


server.listen(PORT,() => {
    console.log(`Server run on ${PORT}`)
})