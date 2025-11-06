const fs = require("node:fs")

const valideUser = (req,res,next) => {
    const {name,mail} = req.body

    if (!name||!mail) {
        return res.status(400).json({
            message:"bad request"
        })
    }

    const mailinclude = mail.include("@")
    if (!mailinclude) {
        return res.status(400).status({
            message:"mail not valide"
        })
    }

    const newUser = {
        id:Date.now(),
        name:name,
        mail:mail
    }

    req.user = newUser
    next ();
}

const valideUserID = (req,res,next) => {
    const {id} = req.params;
    if (!id){
        return res.status(400).json({
            message:"bad request"
        })
    }

    let dataUser = fs.readFileSync("users.json",{encoding:"utf-8"})
    dataUser = JSON.parse(dataUser)

    const foundUser = dataUser.find(item => item.id == id)
    if (!foundUser) {
        return res.status(404).status("Id not found")
    }
    req.userId = id
    next()
}


const validePostId = (req,res,next) => {
    const {id} = req.params;
    if (!id) {
        return res.status (400).json({
            message:"bad request"
        })
    }

    let dataUser = fs.readFileSync("posts.json",{encoding:"utf-8"})
    dataUser = JSON.parse(dataUser)
    
    const foundPost = dataUser.find(item => item.id == id)
    if (!foundPost){
        return res.status(404).status("id not found")
    }
    res.PostId = id
    next()
}

const validePost = (req,res,next) => {
    const {id} = req.params;
    if (!id) {
        return res.status(400).json({
            "message":"Bad request {ID}"
        })
    }

    const {title,bodi} = req.body;
    if(!title||!bodi){
        return res.status(400).json({
            message:"Bad request {body}"
        })
    }

    const newPost = {
        id:Date.now(),
        uuid:id,
        title:title,
        bodi:bodi
    }

    req.posts = newPost
    next()
}

module.exports = {
    valideUser,
    valideUserID,
    validePostId,
    validePost
}
