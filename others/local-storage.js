// Save data
localStorage.setItem('username', 'nadeem');

// Read data
const user = localStorage.getItem('username');
console.log(user);

// Update data
localStorage.setItem('username', 'nadeem_dev');

// Remove a specific item
localStorage.removeItem('username');

// Clear all data
localStorage.clear();