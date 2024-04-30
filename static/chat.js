function sendMessage() {
    const inputField = document.getElementById('chat-input');
    const message = inputField.value;
    
    if (message.trim() === '') {
        return; // Don't send empty messages
    }
    
    const chatDisplay = document.getElementById('chat-display');
    
    // Add the user's message to the display
    chatDisplay.innerHTML += `<div><strong>You:</strong> ${message}</div>`;
    
    // Send the message to the backend and get the response
    fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
    })
    .then(response => response.json())
    .then(data => {
        // Add the bot's response to the display
        chatDisplay.innerHTML += `<div><strong>Bot:</strong> ${data.response}</div>`;
        
        // Scroll to the bottom of the chat display
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
        
        // Clear the input field
        inputField.value = '';
    });
}
