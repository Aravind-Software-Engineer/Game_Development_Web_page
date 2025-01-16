let express=require("express")
let mongoose=require("mongoose")
let Message=require("./bootstrapRoute")
let app=express()
let cors=require("cors")
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/GameDev_Messages")
.then((res)=>{
    console.log("Mongo DB Connected Successfully");
    
})
.catch((err)=>{
    console.log("Connection Failed");
    
});

app.post("/Send",Message.Send_message)
app.listen(3210,"127.0.0.1",()=>{
    console.log("Server Started");
})