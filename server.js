// Import express module
const express = require('express');

// Create an express application
const app = express();

// Define a port for the server
const port = 3000;

// Define a route to respond with 'Hello World'
app.get('/', (req, res) => {
    res.send('Hello World! Its Manya!!');
});

// Make the app listen on the specified port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
