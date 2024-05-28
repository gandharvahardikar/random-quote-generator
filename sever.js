const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Define API endpoint to fetch a random quote
app.get('/api/quote', async (req, res) => {
    try {
        // Fetch quote from the external API
        const response = await axios.get('https://api.api-ninjas.com/v1/quotes?category=happiness', {
            headers: {
                'X-Api-Key': 'CFGvzmaAAgICAQ3npBfOYg==cSpPDMVetrpCXc4y' // Replace with your API key
            }
        });

        // Extract the first quote from the response
        const quote = response.data[0]?.quote;

        // Send the quote as JSON response
        res.json({ quote });
    } catch (error) {
        console.error('Error fetching quote:', error);
        res.status(500).json({ error: 'Failed to fetch a quote' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
