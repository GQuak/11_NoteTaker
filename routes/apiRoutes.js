// Generating a random ID
const { v4: uuidv4 } = require('uuid');
uuidv4();

// DEPENDENCIES
const fs = require('fs');
const path = require('path');
const express = require('express');

// use the following code to serve images, CSS files and javascript files in a directory named public:
const app = express();
app.use(express.static('public'));

// ROUTING
module.exports = (app) => {
    // Use a GET request to access existing notes data
    app.get('/api/notes', (req, res) => {
        // Gets and reads the db.json file and throws error if an error results
        fs.readFile("./db/db.json", "utf8", (err, notes) => {
            if (err) throw err;
            let note = jSON.parse(notes);
            console.log(notes);
            res.json(note);
            console.log("<get----------------->" + note);
        })
    })

    // Use a POST request to add new notes
    app.post('/api/notes', (req, res) => {
        // Adding the randomly generated ID to the new note
        req.body.id = uuidv4();
        // Creating a variable to store the previous notes and add the new note too
        let newNote;

        // Accesses the existing notes using fs to read the file 'db.json' and parse it from a string to an object
        fs.readFile("./db/db.json", "utf8", (err, notes) => {
            newNote = JSON.parse(notes);
            console.log(newNote);
            note.push(req.body);

            // Writing the new array of data to the 'db.json' file
            fs.writeFile("./db/db.json", JSON.stringify(newNote), err => {
                if (err) throw err;
                res.json(newNote)
            })
        }
        )
    })
};