const express = require("express");
const path = require('path');
const app = express();

const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static('public'));




app.listen(PORT, ()=>{
    console.log(`listening to port ${PORT}`);
});