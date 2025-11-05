const valideInp = (req,res,next) => {
    const {name,mail} = req.body
    if (!name || !mail) {
        return res.status(400).json({
            message:"not Valide req"
        })
    }

    const chekMail = mail.includes("@")
    if (!chekMail){
        return res.status(400).json({
            message:"mail not valide"
        })
    }

    const newUser = {
        id:Date.now(),
        name:name,
        mail:mail
    }

    req.user = newUser
    next()
}

module.exports = {
    valideInp
}