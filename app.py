from flask import Flask
import requests

# Define API URL.
TRIVIA_URL = 'https://api.api-ninjas.com/v1/trivia'

# Initialize Flask.
app = Flask(__name__)

# Define routing.
@app.route('/')
def index():
    # Make API Call - make sure to use a valid API key.
    resp = requests.get(TRIVIA_URL, headers={'X-Api-Key': 'CFGvzmaAAgICAQ3npBfOYg==cSpPDMVetrpCXc4y'}).json()
    # Get first trivia result since the API returns a list of results.
    trivia = resp[0]
    return trivia

# Run the Flask app (127.0.0.1:5000 by default).
if __name__ == '__main__':
    app.run()
