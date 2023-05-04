document.body.style.backgroundColor = "#343434"; // Replace with desired color code
// Define an array of valid codes
const validCodes = ['eliisgoated', 'hazemisbetter', 'impoor'];

// Get form elements
const nameField = document.getElementById('name');
const codeField = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const statusMsg = document.getElementById('status');

// Add event listener to submit button
submitBtn.addEventListener('click', () => {
  const name = nameField.value;
  const code = codeField.value;
  // Check if the user's code is valid
  if (validCodes.includes(code)) {
    // If the code is valid, create a webhook bot and send a message to a Discord server
    const webhookURL = 'https://discord.com/api/webhooks/1103472689617838100/0QvS9NMwI57qHCzEQ7C9JZmn1ftE3x_HvAB3JrwOIYBq8cE8htVYjqfphmlskbU0t4RY'; // Replace with your own webhook URL
    const message = {content: `${name} has redeemed the code ${code}.`};
    fetch(webhookURL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(message),
    });
    statusMsg.textContent = 'Code redeemed successfully!';
    statusMsg.style.color = 'green';
  } else {
    statusMsg.textContent = 'Invalid code.';
    statusMsg.style.color = 'red';
  }
});
