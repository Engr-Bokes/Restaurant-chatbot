const menuItems = [
    { id: 1, name: 'Rice and Stew', price: 3000 },
    { id: 2, name: 'Melon Soup and Swallow', price: 3500 },
    { id: 3, name: 'Pasta', price: 2500 },
    { id: 4, name: 'Salad', price: 1000 },
    { id: 5, name: 'Beans and Yam', price: 2500 },
    { id: 6, name: 'Fried Chicken.', price: 2500 }
];

// Initialize order and history for the session
function initializeSession(session) {
    if (!session.orders) session.orders = [];
    if (!session.history) session.history = [];
}

// Add item to the current order
function addItemToOrder(session, itemId) {
    const item = menuItems.find(menuItem => menuItem.id === itemId);
    if (item) {
        session.orders.push(item);
        return `${item.name} added to your order.`;
    } else {
        return 'Invalid item selected.';
    }
}

// Get current order
function getCurrentOrder(session) {
    if (session.orders.length === 0) {
        return 'No items in current order.';
    }
    return `Current Order: ${session.orders.map(item => item.name).join(', ')}`;
}

// Checkout the current order
function checkoutOrder(session) {
    if (session.orders.length === 0) {
        return 'No order to place.';
    }
    // Push current order to order history and clear the current order
    session.history.push([...session.orders]);
    session.orders = [];
    return 'Order placed successfully. Type 1 to view the menu again, 99 to checkout, 97 to view current order, or 0 to cancel current order.';
}

// Get order history
function getOrderHistory(session) {
    if (session.history.length === 0) {
        return 'No previous orders found.';
    }
    return session.history.map((order, index) =>
        `Order ${index + 1}: ${order.map(item => item.name).join(', ')}`
    ).join('\n');
}

// Cancel current order
function cancelOrder(session) {
    if (session.orders.length === 0) {
        return 'No order to cancel.';
    }
    session.orders = [];
    return 'Order canceled.';
}

// Export the menuItems array along with the functions
module.exports = {
    menuItems,              
    initializeSession,
    addItemToOrder,
    getCurrentOrder,
    checkoutOrder,
    getOrderHistory,
    cancelOrder
};
