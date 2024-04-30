from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Main route to render the chat interface
@app.route('/')
def index():
    return render_template('chat.html')

# API endpoint to handle user messages and return responses
@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    
    # Logic to generate a response
    # In a real scenario, this would involve some NLP or backend logic
    bot_response = f"You said: {user_message}"
    
    return jsonify({'response': bot_response})

if __name__ == '__main__':
    app.run(debug=True)
