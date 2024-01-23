const express=require("express")
const connection=require("./Config/db")
const {authController}=require("./Routes/auth.Route")
const {notesController}=require("./Routes/notes.Route")
require("dotenv").config()
const cors=require("cors")


app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})
const app=express()

const PORT=process.env.PORT || 7600

app.use(express.json())
app.use(cors())
app.use("/auth",authController)
app.use("/notes",notesController)

app.get("/",(req,res)=>{
    res.json({msg:"Welcome to homePage"})
})

app.listen(PORT,async()=>{
    try{
        await connection
        console.log(`Listening on port ${PORT}`)
    }catch(err){
        console.log("connection Failed")
        console.log(err)
    }
    
})
