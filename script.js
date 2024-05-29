// Function to get a random quote from the API
async function getApiRandomQuote() {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    return { quote: data.content, author: data.author };
}

// Function to update the quote display
function updateQuoteDisplay(quote, author) {
    document.getElementById('output-text').value = quote; // Update the output text area
    autoAdjustOutputBoxSize(); // Adjust the size of the output box
}

// Event listener for the "New Quote" button
document.getElementById('new-quote').addEventListener('click', async () => {
    const randomQuote = await getApiRandomQuote();
    updateQuoteDisplay(randomQuote.quote, randomQuote.author);
});

// Function to share quote to Twitter
function shareToTwitter(quote, author) {
    const tweetText = `"${quote}" - ${author}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(tweetUrl, '_blank');
}

// Function to share quote to Instagram
function shareToInstagram(quote) {
    const instagramUrl = `https://www.instagram.com/stories/share/?story_text=${encodeURIComponent(quote)}`;
    window.open(instagramUrl, '_blank');
}

// Function to share quote to WhatsApp
function shareToWhatsApp(quote, author) {
    const whatsappText = `"${quote}" - ${author}`;
    const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, '_blank');
}

// Event listeners for social media icons/buttons
document.querySelector('.twitter').addEventListener('click', () => {
    const quote = document.getElementById('output-text').value;
    shareToTwitter(quote);
});

document.querySelector('.instagram').addEventListener('click', () => {
    const quote = document.getElementById('output-text').value;
    shareToInstagram(quote);
});

document.querySelector('.whatsapp').addEventListener('click', () => {
    const quote = document.getElementById('output-text').value;
    shareToWhatsApp(quote);
});

// Function to auto-adjust the size of the output box based on the content
function autoAdjustOutputBoxSize() {
    const outputBox = document.getElementById('output-text');
    const scrollHeight = outputBox.scrollHeight;
    const minHeight = 100; // Minimum height for the output box

    // Set the new height for the output box
    outputBox.style.height = `${Math.max(scrollHeight, minHeight)}px`;
}

// Call the function to initially adjust the size of the output box
autoAdjustOutputBoxSize();

// Function to save quote to a text file
function saveQuoteToFile(quote) {
    const blob = new Blob([quote], { type: 'text/plain' });
    const filename = 'quote.txt';
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Event listener for the "Save Quote" button
document.getElementById('save-quote').addEventListener('click', () => {
    const quote = document.getElementById('output-text').value;
    saveQuoteToFile(quote);
});
