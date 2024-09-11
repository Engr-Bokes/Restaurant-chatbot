document.getElementById('chat-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the page from refreshing

    // Get the user input
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput) {
        addUserMessage(userInput); // Display user message in the chat
        sendToBot(userInput);      // Send message to the bot
        document.getElementById('user-input').value = ''; // Clear the input box
    }
});

// Function to append user message to the chat box
function addUserMessage(message) {
    const chatBox = document.getElementById('chat-box');
    const userMessage = `<div class="user-message">${message}</div>`;
    chatBox.innerHTML += userMessage;
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
}

// Function to append bot response to the chat box (with line breaks converted)
function addBotMessage(message) {
    const chatBox = document.getElementById('chat-box');
    const formattedMessage = message.replace(/\n/g, '<br>'); // Convert \n to <br> for HTML
    const botMessage = `<div class="bot-message">${formattedMessage}</div>`;
    chatBox.innerHTML += botMessage;
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
}

// Function to send the user message to the server and receive the bot response
function sendToBot(message) {
    fetch('https://chatbot-restaurant.hostless.app/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }) // Send the user input as JSON
    })
    .then(response => response.json())
    .then(data => {
        addBotMessage(data.response); // Display the bot response
    })
    .catch(error => {
        console.error('Error:', error); // Handle any errors
    });
}
