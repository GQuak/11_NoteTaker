// DEPENDENCIES
const express = require('express');
const path = require('path')
const fs = require('fs');

// Create the express server
const app = express();
// app.use(express.static('public'));

// Creating a PORT Variable 
var PORT = process.env.PORT || 3030;

// Call the routing files
require('./routes/htmlRoutes.js')(app);
require('./routes/apiRoutes.js')(app);

// Start listening on the specified port, aka start the server
app.listen(PORT, () => console.log(`Listening at port http://localhost:${PORT}`));



// Setting up Express
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// The following HTML routes should be created:
// Creating an HTML route for the db.js file
// const dbPath = path.join(__dirname, 'db/db.json');

// use the following code to serve images, CSS files and javascript files in a directory named public:
// app.use(express.static('public'));


// --------------------------------------------------------------
// // GET requests
// // `GET /notes` should return the `notes.html` file.
// app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

// // `GET *` should return the `index.html` file.
// app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

// // // `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
// app.get('/api/notes', (req, res) => {
//     // read the db.json file
//     let noteArray = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
//     // assign an id value to each item in noteArray
//     noteArray.forEach((note, index) => {
//         note.id = index + 1; 
//     })
//     //return saved notes as json
//     return res.json(noteArray);
// });

// // POST requests
// // * `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you).
// app.post('/api/notes', (req, res) => {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body parsing middleware
//     // read all of the existing notes
//     var existingNotes = fs.readFileSync('./db/db.json', 'utf8');

//     // convert string into JSON object
//     let allNotes = JSON.parse(existingNotes);


//     // add the new note to the existingNotes array
//     allNotes.push(req.body);
//     console.log(allNotes);
//     // if the array is not null (empty) assign each note a unique id
//     if (!allNotes) {
//         // assign id based on index and array length
//         allNotes[allNotes.length].id = allNotes.length;
//     };

//     // stringify object so writefile can read it
//     fs.writeFileSync('./db/db.json', JSON.stringify(allNotes));

//     res.json(req.body);
// });
// --------------------------------------------------------