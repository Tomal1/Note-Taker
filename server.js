const express = require("express");
const path = require('path');
const app = express();

const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static('public'));


// it matters which order req and res are place for the code to execute
app.get("/", (req,res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);



app.listen(PORT, ()=>{
    console.log(`listening to port ${PORT}`);
});