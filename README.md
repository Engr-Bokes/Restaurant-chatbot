# Restaurant ChatBot

A simple restaurant chatbot built using **Node.js** and **Express**. This chatbot allows customers to interact with a restaurant system, place orders, view their order history, and more, all through a chat interface.

## Features

- Chat-based interface for interacting with the restaurant system.
- Supports placing orders, viewing current and past orders, and canceling orders.
- Session management to track users and their orders.
- Responsive design using HTML, CSS, and JavaScript for the chat interface.

## Project Structure

```plaintext
/restaurant-chatbot
│
├── /frontend
│   └── index.html        # Chat interface (HTML)
│
├── /backend
│   ├── app.js            # Node.js backend (Express server)
│   └── orders.js         # Order management module
│
├── /static               # Static folder for frontend resources
│   ├── css
│   │   └── styles.css    # CSS file for styles
│   └── js
│       └── script.js     # JavaScript file for chat functionality
│
├── package.json          # Dependencies for Node.js
└── README.md             # Project documentation


Prerequisites:
Node.js (v14 or higher) installed on your machine.
npm (comes with Node.js) for installing dependencies.

Installation:
Clone the repository to your local machine:
git clone https://github.com/your-username/restaurant-chatbot.git
cd restaurant-chatbot

Install the necessary dependencies using npm:
npm install

This will install the following dependencies:
express: A minimal and flexible Node.js web application framework.
express-session: Middleware for managing session data.
body-parser: Middleware for parsing incoming request bodies in JSON format.

Running the Project:
Start the server by running the following command:
npm start
Or, if you have nodemon installed, you can run:
npm run dev

Open your browser and navigate to http://localhost:3000 to view the chatbot interface.

How to Use:
When the page loads, the bot will present you with the following options:
Select 1 to Place an order
Select 99 to checkout order
Select 98 to see order history
Select 97 to see current order
Select 0 to cancel order

Order Process:
Place an Order: Type 1 and the bot will show you a list of available menu items.
Select items by typing the corresponding number (e.g., 1 for Burger, 2 for Pizza, etc.).
After selecting all your items, type 99 to checkout.
View Order History: Type 98 to see all previously placed orders.
View Current Order: Type 97 to see items in the current order that haven’t been checked out yet.
Cancel Order: Type 0 to cancel the current order.

Sample Interaction:
Bot: Select 1 to Place an order
User: 1
Bot: Menu:
     1. Rice and Stew
     2. Melon Soup and Swallow
     3. Pasta
     4. Salad
     5. Beans and Yam
     6. Fried Chicken
User: 2
Bot: Melon Soup and Swallow added to your order.
User: 1
Bot: Rice and stew added to your order.
User: 99
Bot: Order placed successfully.

You can start a new order by pressing 1


Technologies Used:
Node.js: Backend JavaScript runtime environment.
Express: Web framework for Node.js.
express-session: To handle session-based order tracking.
HTML/CSS/JavaScript: For the frontend chat interface.

Folder Structure Breakdown:
frontend/index.html: The main chat interface.
backend/app.js: The Express server and chat logic.
backend/orders.js: Logic for handling orders and session data.
static/css/styles.css: Styling for the chatbot UI.
static/js/script.js: Frontend logic for handling chat interactions with the bot.

Contributing:
Feel free to submit a pull request or open an issue if you find any bugs or have suggestions for improvements. 
My email: cbokesman@gmail.com.