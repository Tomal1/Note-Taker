const express = require("express");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001; //added today 
const db = require("./db/db.json")



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// connects the css files
app.use(express.static('./public'));


// it dose matters which order req and res are placed for the code to execute
app.get("/", (req,res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get("/notes",(req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))    
);

app.get("/api/notes",(req, res) => res.json(db));


app.listen(PORT, ()=>{
    console.log(`listening to port ${PORT}`);
});