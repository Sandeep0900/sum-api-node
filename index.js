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
