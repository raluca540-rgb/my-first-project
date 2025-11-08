// Chatbot functionality

// Get DOM elements
const chatButton = document.getElementById('chat-button');
const chatWindow = document.getElementById('chat-window');
const closeChat = document.getElementById('close-chat');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');

// Toggle chat window
chatButton.addEventListener('click', () => {
    chatWindow.classList.add('active');
    chatInput.focus();
});

closeChat.addEventListener('click', () => {
    chatWindow.classList.remove('active');
});

// Send message function
function sendMessage() {
    const message = chatInput.value.trim();

    if (message === '') return;

    // Add user message to chat
    addMessage(message, 'user');

    // Clear input
    chatInput.value = '';

    // Get bot response after a short delay
    setTimeout(() => {
        const botResponse = getBotResponse(message);
        addMessage(botResponse, 'bot');
    }, 500);
}

// Add message to chat window
function addMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');

    const messageParagraph = document.createElement('p');
    messageParagraph.textContent = message;

    messageDiv.appendChild(messageParagraph);
    chatMessages.appendChild(messageDiv);

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Get bot response based on user message
function getBotResponse(message) {
    const lowerMessage = message.toLowerCase();

    // TODO: Add more responses and make the chatbot smarter

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
        return 'Hello! How can I help you today?';
    }

    if (lowerMessage.includes('how are you')) {
        return "I'm doing great, thank you for asking! How can I assist you?";
    }

    if (lowerMessage.includes('name')) {
        return "I'm your friendly chatbot assistant! What's your name?";
        // TODO: Try storing the user's name and using it in responses
    }

    if (lowerMessage.includes('help')) {
        return 'I can help you learn about this website and web development! Try asking me about projects, contact info, or just chat with me.';
    }

    if (lowerMessage.includes('project')) {
        return 'You can find my projects in the Projects section above. Feel free to check them out!';
    }

    if (lowerMessage.includes('contact') || lowerMessage.includes('email')) {
        return 'You can reach out via the Contact section on this page. Just scroll up to find the contact information!';
    }

    if (lowerMessage.includes('website') || lowerMessage.includes('site')) {
        return 'This website was built using HTML, CSS, and JavaScript. It\'s a great learning project!';
    }

    if (lowerMessage.includes('learn') || lowerMessage.includes('tutorial')) {
        return 'I recommend starting with HTML basics, then CSS for styling, and finally JavaScript for interactivity. Practice is key!';
    }

    if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
        return 'Goodbye! Feel free to chat with me anytime!';
    }

    // Default response
    return "That's interesting! I'm still learning, so I might not have all the answers yet. Try asking me about projects, help, or just say hi!";
    // TODO: Add more conversation topics and responses
}

// Event listeners for sending messages
sendButton.addEventListener('click', sendMessage);

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// TODO: Try adding typing indicators when the bot is "thinking"
// TODO: Add timestamps to messages
// TODO: Save chat history in browser storage
// TODO: Add quick reply buttons for common questions
