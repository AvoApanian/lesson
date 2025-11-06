const express = require("express")
const cors = require("cors")
const {
    valideUser, valideUserID,
    validePostId, validePost
} = require("./middleware")
const fs = require("node:fs")

const PORT = 3001

const server = express()
server.use(cors())
server.use(express.json())

//=====================================
//---------------Users-----------------
//=====================================

server.get("/users", (req, res) => {
    let data = fs.readFileSync("users.json", { encoding: "utf-8" })
    data = JSON.parse(data)
    return res.status(200).json({ data })
})

server.get("/users/:id", valideUserID, (req, res) => {
    const { id } = req.userId

    let dataUsers = fs.readFileSync("users.json", { encoding: "utf-8" })
    dataUsers = JSON.parse(dataUsers)

    let dataPosts = fs.readFileSync("posts.json", { encoding: "utf-8" })
    dataPosts = JSON.parse(dataPosts)

    const foundUser = dataUsers.find(item => item.id == id)
    const foundPost = dataPosts.filter(item => item.uuid == id)

    const package = {
        foundUser,
        foundPost
    }

    res.status(200).json({ package })
})

server.post("/users", valideUser, (req, res) => {
    const newUser = req.user

    let data = fs.readFileSync("users.json", { encoding: "utf-8" })
    data = JSON.parse(data)

    data.push(newUser)
    fs.writeFileSync("users.json", JSON.stringify(data, null, 2))
    res.status(201).json({
        message: "User created successfully"
    })
})

server.put("/users/:id", valideUserID, (req, res) => {
    const { id } = req.userId
    const { name, mail } = req.body

    let data = fs.readFileSync("users.json", { encoding: "utf-8" })
    data = JSON.parse(data)

    const found = data.find(item => item.id == id)
    if (!found) {
        return res.status(404).json({
            message: "User not found"
        })
    }

    if (name) found.name = name
    if (mail) found.mail = mail

    fs.writeFileSync("users.json", JSON.stringify(data, null, 2))
    res.status(200).json({
        message: "Successfully changed",
        data: found
    })
})

server.delete("/users/:id", valideUserID, (req, res) => {
    const { id } = req.userId

    let data = fs.readFileSync("users.json", { encoding: "utf-8" })
    data = JSON.parse(data)

    const newData = data.filter(item => item.id != id)

    if (data.length === newData.length) {
        return res.status(404).json({
            message: "User not found"
        })
    }

    fs.writeFileSync("users.json", JSON.stringify(newData, null, 2))

    let postData = fs.readFileSync("posts.json", { encoding: "utf-8" })
    postData = JSON.parse(postData)

    const newPostData = postData.filter(item => item.uuid != id)
    fs.writeFileSync("posts.json", JSON.stringify(newPostData, null, 2))
    
    res.status(200).json({
        message: "Successfully deleted"
    })
})

//===================================
//------------POSTS------------------
//===================================

server.get("/posts", (req, res) => {
    let data = fs.readFileSync("posts.json", { encoding: "utf-8" })
    data = JSON.parse(data)

    res.status(200).json({ data })
})

server.get("/posts/:id", validePostId, (req, res) => {
    const { id } = req.postId

    let data = fs.readFileSync("posts.json", { encoding: "utf-8" })
    data = JSON.parse(data)

    const found = data.find(item => item.id == id)
    if (!found) {
        return res.status(404).json({
            message: "Post not found"
        })
    }

    res.status(200).json({ data: found })
})

server.post("/posts", validePost, (req, res) => {
    const newPost = req.post

    let data = fs.readFileSync("posts.json", { encoding: "utf-8" })
    data = JSON.parse(data)

    data.push(newPost)

    fs.writeFileSync("posts.json", JSON.stringify(data, null, 2))
    res.status(201).json({
        message: "Post created successfully",
        data: newPost
    })
})

server.put("/posts/:id", validePostId, (req, res) => {
    const { id } = req.postId
    const { title, content } = req.body

    let data = fs.readFileSync("posts.json", { encoding: "utf-8" })
    data = JSON.parse(data)

    const found = data.find(item => item.id == id)
    if (!found) {
        return res.status(404).json({
            message: "Post not found"
        })
    }

    if (title) found.title = title
    if (content) found.content = content

    fs.writeFileSync("posts.json", JSON.stringify(data, null, 2))
    res.status(200).json({
        message: "Post successfully updated",
        data: found
    })
})

server.delete("/posts/:id", validePostId, (req, res) => {
    const { id } = req.postId

    let data = fs.readFileSync("posts.json", { encoding: "utf-8" })
    data = JSON.parse(data)

    const newData = data.filter(item => item.id != id)

    if (data.length === newData.length) {
        return res.status(404).json({
            message: "Post not found"
        })
    }

    fs.writeFileSync("posts.json", JSON.stringify(newData, null, 2))
    res.status(200).json({
        message: "Post successfully deleted"
    })
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})