const valideInp = (req,res,next)  => {
    const {data} = req.body

    if (!data){
        return res.status(400).json({message:"invalide message"})
    }

    const newMessage = {
        id:Date.now(),
        message:data
    }

    req.msg = newMessage
    next()
}

module.exports = {
    valideInp
}