document.body.style.backgroundColor = "#343434"; // Replace with desired color code

// Define an array of valid codes
const validCodes = ['sc0ttl0v3sbutt3r', 'fR3ePr0XXYpA$$', 'alsofakecode'];

// Get form elements
const nameField = document.getElementById('name');
const codeField = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const statusMsg = document.getElementById('status');

// Define cooldown time in seconds
const COOLDOWN_TIME = 25;

// Create an object to store cooldowns for each user
const cooldowns = {};

// Add event listener to submit button
submitBtn.addEventListener('click', () => {
  const name = nameField.value.trim();
  const code = codeField.value.trim();
  
  // Check if the user's code is valid and code and name fields are not empty
  if (validCodes.includes(code) && name !== '' && code !== '') {
    // Check if the user is on cooldown
    if (cooldowns.hasOwnProperty(name) && (Date.now() - cooldowns[name]) < (COOLDOWN_TIME * 1000)) {
      const remainingTime = Math.ceil(((COOLDOWN_TIME * 1000) - (Date.now() - cooldowns[name])) / 1000);
      statusMsg.textContent = `You're on cooldown for ${remainingTime} seconds.`;
    } else {
      // If the code is valid and the user is not on cooldown, redeem the code and set a new cooldown for the user
      const webhookURL = 'https://discord.com/api/webhooks/1103472689617838100/0QvS9NMwI57qHCzEQ7C9JZmn1ftE3x_HvAB3JrwOIYBq8cE8htVYjqfphmlskbU0t4RY'; // Replace with your own webhook URL
      const message = {content: `${name} has just redeemed a code: ${code}.`};
      fetch(webhookURL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(message),
      });
      statusMsg.textContent = 'Code redeemed successfully!';
      cooldowns[name] = Date.now();
    }
  } else {
    statusMsg.textContent = 'Invalid code or empty name/code fields.';
  }
});
