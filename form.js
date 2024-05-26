const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(__dirname));

// Handle form submission
app.post('/submit', (req, res) => {
    const { username, password, remember } = req.body;
    
    // Store data in a JSON file (for demonstration purposes)
    const data = {
        username,
        password,
        remember: remember === 'on' ? true : false
    };

    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));

    res.send('Form data received and stored.');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
