const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());



app.get('/sum', (req, res) => {
    try {
        const num1 = parseFloat(req.query.num1);
        const num2 = parseFloat(req.query.num2);

        // Validate input
        if (isNaN(num1) || isNaN(num2)) {
            return res.status(400).json({ error: 'Both num1 and num2 must be numbers' });
        }

        // Calculate the sum
        const result = num1 + num2;

        // Return the result
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



// POST route to calculate the sum
app.post('/sum', (req, res) => {
    try {
        const { num1, num2 } = req.body;

        // Validate input
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            return res.status(400).json({ error: 'Both num1 and num2 must be numbers' });
        }

        // Calculate the sum
        const result = num1 + num2;

        // Return the result
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
