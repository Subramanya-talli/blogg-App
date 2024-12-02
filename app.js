const Dotenv = require("dotenv");
Dotenv.config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.get('/', (req,res)=>{
    res.send("Hello from the server");
});

app.listen(()=>{
    console.log(`Server is running in ${PORT}`);
});
