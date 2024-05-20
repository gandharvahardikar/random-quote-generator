// Array of local quotes
const quotes = [
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    // Add more quotes as needed
];

// Function to get a random quote from the local array
function getLocalRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to get a random quote from the API
async function getApiRandomQuote() {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    return { quote: data.content, author: data.author };
}

// Event listener for the button
document.getElementById('new-quote').addEventListener('click', async () => {
    const useApi = document.getElementById('use-api').checked;
    let randomQuote;
    if (useApi) {
        randomQuote = await getApiRandomQuote();
    } else {
        randomQuote = getLocalRandomQuote();
    }
    document.getElementById('quote').textContent = randomQuote.quote;
    document.getElementById('author').textContent = randomQuote.author;
});
