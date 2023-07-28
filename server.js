const express = require("express");
const app = express();


app.get('/',(req,res)=>{
    res.send("Backend Is Running Live");
})

app.listen(8000,()=>{
    console.log("listening to the port number 8000");
})
