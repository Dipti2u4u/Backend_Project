const express = require('express');
const app = express();
const port = process.env.PORT || 8000

app.get("/",(req,res)=>{
    res.send("welcome to home page");
})

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})