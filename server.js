const express = require("express");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
//importing the uuid id creator function
const uuid = require('./helpers/uuid.js');
//importing the db file
const db = require("./db/db.json")
const { readFromFile, readAndAppend } = require('./helpers/fsUtils');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// connects the client side files
app.use(express.static('./public'));


// it dose matters which order req and res are placed for the code to execute
app.get("/", (req,res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get("/notes",(req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))    
);

//calls the fetch command in index.js and then render the db.json to notes.html
app.get("/api/notes",(req, res) => res.sendFile(path.join(__dirname, "/db/db.json")));

app.post("/api/notes", (req, res) =>{
console.info(`${req.method} has been sent`)
const { title, text } = req.body;

if(req.body){
    const newNote = {
        title,
        text,
        id: uuid(),
      };
      readAndAppend(newNote, "./db/db.json");
      res.json(`new note added successfully`);
    } else {
      res.error('Error in adding new note');
    }
});

app.listen(PORT, ()=>{
    console.log(`listening to port ${PORT}`);
});

