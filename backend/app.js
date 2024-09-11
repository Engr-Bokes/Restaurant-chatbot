const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const { menuItems, initializeSession, addItemToOrder, getCurrentOrder, checkoutOrder, getOrderHistory, cancelOrder } = require('./orders'); // Import menuItems and functions

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Session setup
app.use(session({
    secret: 'restaurant-chatbot',
    resave: false,
    saveUninitialized: true
}));

// Serve static files (CSS, JS, etc.)
app.use('/static', express.static(path.join(__dirname, '../static')));

// Route to serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Route to handle chat input
app.post('/chat', (req, res) => {
    const userSession = req.session;
    const userInput = req.body.message;

    // Initialize session data if not present
    initializeSession(userSession);

    // Initialize state if not present
    if (!userSession.state) {
        userSession.state = 'default'; // Set the default state
    }

    let botResponse;

    // Handle general commands when in the default state
    if (userSession.state === 'default') {
        switch (userInput) {
            case '1': // Display the menu items
                botResponse = `Menu:\n\n${menuItems.map(item => `  ${item.id}. ${item.name}`).join('\n')}\n\nPlease select the item number to add to your order.`;
                userSession.state = 'ordering'; // Switch to ordering state
                break;
            case '99': // Checkout order
                botResponse = checkoutOrder(userSession);
                userSession.state = 'default'; // Reset state after checkout
                break;
            case '98': // View order history
                botResponse = getOrderHistory(userSession);
                break;
            case '97': // View current order
                botResponse = getCurrentOrder(userSession);
                break;
            case '0': // Cancel current order
                botResponse = cancelOrder(userSession);
                userSession.state = 'default'; // Reset state after cancellation
                break;
            default:
                botResponse = 'Invalid input. Please select 1 to view the menu or other valid options.';
        }
    } else if (userSession.state === 'ordering') {
        // In the ordering state, treat the input as a menu item selection
        const itemId = parseInt(userInput);
        if (!isNaN(itemId) && itemId >= 1 && itemId <= menuItems.length) {
            botResponse = addItemToOrder(userSession, itemId); // Add item to order
            // After selecting a valid item, ask the user if they want to continue or checkout
            botResponse += `\nWould you like to select more items? Type '1' to view the menu again, '99' to checkout, '97' to view current order, or '0' to cancel current order.`;
            userSession.state = 'default'; // Reset to default state after a valid item selection
        } else {
            botResponse = 'Invalid item number. Please select a valid item from the menu.';
        }
    }

    res.json({ response: botResponse });
});

// Start the server
app.listen(8000, () => {
    console.log('ChatBot server running on http://localhost:8000');
});
