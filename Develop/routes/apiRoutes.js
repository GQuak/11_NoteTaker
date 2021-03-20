// LOAD DATA
// 
const noteData = require('../db/db');

// ROUTING
module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(tableData));

    app.post('/api/notes', (req, res) => {
        noteData.push(req.body);
    });
};