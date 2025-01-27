const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');




const app = express();
const PORT = 5500;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API to mark attendance
app.post('/attendance', (req, res) => {
    const { employeeId, timestamp } = req.body;

    if (!employeeId || !timestamp) {
        return res.status(400).send('Invalid data.');
    }

    const query = 'INSERT INTO Attendance (EmployeeId, Timestamp) VALUES (?, ?)';
    db.query(query, [employeeId, timestamp], (err, result) => {
        if (err) {
            console.error('Error saving attendance:', err);
            return res.status(500).send('Internal server error.');
        }
        res.status(200).send('Attendance marked successfully.');
    });
});

// API to fetch all attendance records
app.get('/attendance', (req, res) => {
    const query = 'SELECT * FROM Attendance';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching attendance records:', err);
            return res.status(500).send('Internal server error.');
        }
        res.status(200).json(results);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
