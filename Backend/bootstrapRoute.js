let Messages = require("./bootstrapSchema")

exports.Send_message = async (req,res)=>{
    try{
        let {Sname,Semail,Smessage} = req.body
        let postData= await Messages.create({Sname,Semail,Smessage})
        res.status(200).json({ msg : " Message Sent"})
    }
    catch(err){
        res.status(400).json({ msg : " Failed to send the message "})
    }
}