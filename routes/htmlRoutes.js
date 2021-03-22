// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
const path = require('path');
const express = require('express');

// use the following code to serve images, CSS files and javascript files in a directory named public:
const app = express();
app.use(express.static('public'));

// Sets routes to HTML pages
module.exports = (app) => {
    // Sends users to the notes page
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // Sends users to the index page
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    // Sends all other requests to the index page
    // app.get('*', (req, res) => {
    //     res.sendFile(path.join(__dirname, '../public/index.html'));
    // });
};