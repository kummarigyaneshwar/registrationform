const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const ipAddress = '0.0.0.0'; // Replace with your actual IP address

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
    // Handle form data here (e.g., store in database)
    const formData = req.body;
    console.log(formData);
    res.send('Form submitted successfully!');
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running at http://0.0.0.0:${port}`);
});

