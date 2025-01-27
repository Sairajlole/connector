const mysql = require('mysql');

// MySQL connection configuration
const connection = mysql.createConnection({
    host: 'localhost',      // Replace with your MySQL server address
    user: 'root',           // Replace with your MySQL username
    password: '', // Replace with your MySQL password
    database: 'GeofencingAttendance',
});

// Connect to the database
const originalTimestamp = '2025-01-27T04:26:35.250Z';
const formattedTimestamp = new Date(originalTimestamp).toISOString().slice(0, 19).replace('T', ' ');


// Execute the SQL query using your database connection

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the MySQL database!');
});

module.exports = connection;
