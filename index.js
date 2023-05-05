const { timeStamp } = require("console")
const express = require("express")
const app = express()
const fs = require("fs")
const PORT = 3500




app.get("/",(req,res)=>{
    let time = new Date();
    let dateString = time.toUTCString().slice(0,-3);
    let content = `Current timeStamp is ${dateString}`
    fs.writeFileSync("./date-time.txt",content,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("File Writen Sucessfully")
    }
})
    res.sendFile(__dirname+"/date-time.txt")
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT} port`)
})