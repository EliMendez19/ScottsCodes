document.body.style.backgroundColor = "#343434"; // Replace with desired color code

// Define an array of valid codes
const validCodes = ['sc0ttl0v3sbutt3r', 'do', 'ball'];

// Get form elements
const nameField = document.getElementById('name');
const codeField = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const statusMsg = document.getElementById('status');

// Set maximum length for name and code fields
nameField.maxLength = 25;
codeField.maxLength = 20;

// Add event listener to submit button
submitBtn.addEventListener('click', () => {
  const name = nameField.value.trim();
  const code = codeField.value.trim();
  
  // Check if the user's code is valid and code and name fields are not empty
  if (validCodes.includes(code) && name !== '' && code !== '') {
    // If the code is valid, create a webhook bot and send a message to a Discord server
    const webhookURL = 'https://discord.com/api/webhooks/1103472689617838100/0QvS9NMwI57qHCzEQ7C9JZmn1ftE3x_HvAB3JrwOIYBq8cE8htVYjqfphmlskbU0t4RY'; // Replace with your own webhook URL
    const message = {content: `${name} has just redeemed a code: ${code}`};
    fetch(webhookURL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(message),
    });
    statusMsg.textContent = 'Code redeemed successfully!';
  } else {
    statusMsg.textContent = 'Invalid code or empty name/code fields.';
  }
});
