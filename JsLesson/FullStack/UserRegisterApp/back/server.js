const express = require("express")
const fs = require("node:fs")
const cors = require("cors");
const {valideInp} = require("./middleware");

const PORT = 3001;

const server = express()

server.use(cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}));


server.use(express.json())

server.post("/users",valideInp,(req,res) => {
    const user = req.user
    if (!user){
        return res.status(500).json({
            message:"Intern Server Error"
        })
    }

    const userFile = fs.readFileSync("users.json",{encoding:"utf-8"})
    const userFileParse = JSON.parse(userFile)

    userFileParse.push(user)

    fs.writeFileSync("users.json",JSON.stringify(
        userFileParse,null,2
    ))
    res.status(201).json({
        message:"User Create succesfully"
    })
})

server.get("/users/:id",(req,res) => {
    const {id} = req.params

    if (!id){
        return res.status(400).json({
            message:"req bad id"
        })
    }

    const userFile = fs.readFileSync("users.json",{encoding:"utf-8"})
    const userFileParse = JSON.parse(userFile)

    const found = userFileParse.find(item => item.id == id)
    if (!found) {
        return res.status(404).json({
            message:"User not found"
        })
    }

    res.status(200).json({found})
})

server.listen(PORT,() => {
    console.log (`Server run on ${PORT}`)
})